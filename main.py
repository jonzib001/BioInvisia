from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
from db import conn
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#for posting
class observationCreate(BaseModel):
    user_id : int
    species_id : int
    research_content : str
    latitude: float
    longitude: float
    observed_at: str
    is_native : bool


#for commenting
class commentCreate(BaseModel):
    obs_id : int
    user_id : int
    comments: str
    parent_id : Optional[int] = None # Allows null for top-level comments

class SpeciesCreate(BaseModel):
    species_name: str
    user_id: int

#User 
class UserCreate(BaseModel):
    username: str
    email: str
    password: str
    role: str

class UserLogin(BaseModel):
    username: str
    password: str

def fetch_observations(species_id=None, user_id = None, limit=10):
    curr = conn.cursor() # executes queries
    query = """
    select u.user_id, s.genus_name, s.species_name, o.research_content, o.latitude, o.longitude, o.observed_at
    from observation o
    join users u on u.user_id = o.user_id
    join species s on s.species_id = o.species_id
    where 1=1
    """

    param = []

    if species_id is not None:
        query += " and o.species_id = %s" # o.species because we usef from observation
        param.append(species_id)
    if user_id is not None:
        query += " and o.user_id = %s"
        param.append(user_id)
    query += " LIMIT %s"
    param.append(limit)

    try:
        curr.execute(query,param)
        rows = curr.fetchall()
        return rows
    except Exception as e:
        conn.rollback()
        print("DB ERROR", e)
        return []
    finally:
        curr.close()




@app.get("/observations")

def get_observations (species_id: int = None, user_id: int = None):
    
    rows = fetch_observations(species_id=species_id, user_id=user_id)

    #convert to json file

    data = []

    for row in rows:
        obs = {
           "user_id" : row[0],
           "species" : {
               "genus" : row[1],
               "species" : row[2]
           },
           "research_content" : row[3],
           "location" : {
               "latitude" : row[4],
               "longitude" : row[5]
           },
           "observed_at" : str(row[6]) 
        }

        data.append(obs)

    return {
        "status" : "success",
        "count" : len(data),
        "data" : data
    }

@app.post("/signup")
def create_user(user: UserCreate):
    curr = conn.cursor()

    # The user_id is serial, so we don't insert it. Postgres handles it.
    query = """
    INSERT INTO users (username, role, email, password)
    VALUES (%s, %s, %s, %s)
    RETURNING user_id;
    """
    
    values = (user.username, user.role, user.email, user.password)

    try:
        curr.execute(query, values)
        new_id = curr.fetchone()[0]
        conn.commit()

        return {
            "status": "success",
            "message": "User created successfully",
            "user_id": new_id
        }

    except Exception as e:
        conn.rollback()
        # This will catch if a username already exists (UNIQUE constraint)
        return {
            "status": "error",
            "message": str(e)
        }
    finally:
        curr.close()

#Api endpoint for login
@app.post("/login")
def login_user(login_data: UserLogin):
    curr = conn.cursor()
    
    # Check if the username and password match a record
    query = """
    SELECT user_id, role, username 
    FROM users 
    WHERE username = %s AND password = %s
    """
    
    try:
        curr.execute(query, (login_data.username, login_data.password))
        user = curr.fetchone()
        
        if user:
            return {
                "status": "success",
                "user_id": user[0],
                "role": user[1],
                "username": user[2]
            }
        else:
            return {
                "status": "error",
                "message": "Invalid username or password."
            }
    except Exception as e:
        return {
            "status": "error",
            "message": str(e)
        }
    finally:
        curr.close()


@app.post("/observations")
def create_observation(obs: observationCreate):
    curr = conn.cursor()

    query = """
    INSERT INTO observation 
    (user_id, species_id, research_content, latitude, longitude,is_native, observed_at)
    VALUES (%s, %s, %s, %s, %s,%s,%s)
    RETURNING observation_id;
    """

    values = (
        obs.user_id,
        obs.species_id,
        obs.research_content,
        obs.latitude,
        obs.longitude,
        obs.is_native,
        obs.observed_at,
    )

    try:
        curr.execute(query, values)
        new_id = curr.fetchone()[0]

        conn.commit()
        
        return {
            "status" : "success",
            "message" : "observation created",
            "observation_id" : new_id
        }
    except Exception as e:
        conn.rollback()
        return {
            "status": "error",
            "message": str(e)
        }
    finally:
        curr.close()


@app.post("/comments")

def create_comment(c : commentCreate):
    curr = conn.cursor()

    query = """
    insert into forum
    (obs_id, user_id, comments, parent_id)
    values(%s, %s, %s, %s)
    returning post_id
    """

    
    values = (
        c.obs_id,
        c.user_id,
        c.comments,
        c.parent_id
    )

    try:
        curr.execute(query, values)
        new_id = curr.fetchone()[0]

        conn.commit()
        curr.close()

        return {
            "status" : "success",
            "post_id" : new_id
    }

    except Exception as e:
        conn.rollback()
        return {"status": "error", "message": str(e)}
    
    finally:
        curr.close()
#copied
def build_comment_tree(comments):

    comment_map = {}

    # create node map
    for c in comments:
        comment_map[c["post_id"]] = {
            "post_id": c["post_id"],
            "user_id": c["user_id"],
            "username": c["username"],
            "comments": c["comments"],
            "parent_id": c["parent_id"],
            "replies": []
        }

    root = []

    # attach children to parents
    for c in comment_map.values():

        if c["parent_id"] is None:
            root.append(c)
        else:
            parent = comment_map.get(c["parent_id"])
            if parent:
                parent["replies"].append(c)

    return root


#get commets
@app.get("/comments")
def get_comments(obs_id: int):

    curr = conn.cursor()

    query = """
    SELECT 
        f.post_id,
        f.user_id,
        u.username,
        f.comments,
        f.parent_id
    FROM forum f
    JOIN users u ON u.user_id = f.user_id
    WHERE f.obs_id = %s
    ORDER BY f.post_id;
    """

    curr.execute(query, (obs_id,))
    rows = curr.fetchall()
    curr.close()

    comments = []

    for row in rows:
        comments.append({
            "post_id": row[0],
            "user_id": row[1],
            "username": row[2],
            "comments": row[3],
            "parent_id": row[4]
        })

    nested = build_comment_tree(comments)

    return {
        "status": "success",
        "obs_id": obs_id,
        "count": len(comments),
        "data": nested
    }

#users
@app.get("/users")
def get_users():
    curr = conn.cursor()

    query = """
    SELECT user_id, username, expertise_level, role
    FROM users;
    """

    curr.execute(query)
    rows = curr.fetchall()
    curr.close()

    data = []

    for row in rows:
        data.append({
            "user_id": row[0],
            "username": row[1],
            "expertise_level": row[2],
            "role": row[3]
        })

    return {
        "status": "success",
        "data": data
    }

# 2. Update the GET endpoint
@app.get("/species")
def get_species():
    cur = conn.cursor()
    # Simplified query to match your new schema
    query = "SELECT species_id, species_name FROM species ORDER BY species_id;"
    
    cur.execute(query)
    rows = cur.fetchall()
    cur.close()

    data = [{"species_id": row[0], "species_name": row[1]} for row in rows]

    return {
        "status": "success",
        "data": data
    }

# 3. Update the POST endpoint
@app.post("/species")
def create_species(s: SpeciesCreate):
    cur = conn.cursor()
    # (Optional: Keep your role-check logic here if you want only researchers to add species)
    
    query = """
    INSERT INTO species (species_name)
    VALUES (%s)
    RETURNING species_id;
    """
    try:
        cur.execute(query, (s.species_name,))
        new_id = cur.fetchone()[0]
        conn.commit()
        return {"status": "success", "species_id": new_id}
    except Exception as e:
        conn.rollback()
        return {"status": "error", "message": str(e)}
    finally:
        cur.close()

