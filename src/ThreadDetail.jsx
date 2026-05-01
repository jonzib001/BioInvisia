import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function ThreadDetail() {
  const navigate = useNavigate();
  const { id } = useParams(); // Grab the observation_id from the URL

  // Dynamic Article State
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  // Interactive State
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(142);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [newComment, setNewComment] = useState("");

  // Mock Comments State (Preserved for the next step!)
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Dr. Aris Thorne",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdgJIpV1mGjVzLLmvjdH5W1MUCUKuQH4jBW-3HzKdVcNlQB5vQBHPkEW0jQhP6uZwisVX1xZjbQoIaqy-RqPv50L5RpCpoQlPp3xHEw3iHSrC5WnAVuO4-DmVVL4ktEMJgYUEiB2NhmAFpluevOXM6rLpECThq1oIPk-gtxbw9L3skjyMN3SE2Pa8ojmGtIJIBaOq0vPwZLkzbrfA53finF8NkdJkvWKH4O8N6gRvqdIcs3qJFpjwALBxtYY1e6qfx6tSrOr9Swaxp",
      time: "1 hour ago",
      text: "Fascinating results, Julian. Did you notice any specific seed variants performing better with the pneumatic embedding? We found that larger, harder shells tend to fracture under the pressure of the Mk-III models.",
      likes: 12,
      replies: [
        {
          id: 101,
          author: "Julian Vane",
          avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDJNhl1vXDxDHtF5cSDY9D72e66RYUB2p2QEi_3t_22zBQQ2S-sHbP2VVjd78OBBVH8YasnV0lJqP6yPlPj0ZJjfs6GKsb6TDs_SEFKBzd_W6MvZ58VZH7oXV_WWm_az3C935hBlQe-BcSj8gMQZ2jFJ5EWPXX2GlJtEi9ROyg8Z0KzzYWJVBRbCHvUuHQXKM6XVUnPcCdv2tbqTAqF20vG9j5-q_MORYqeARlZJdNeB0Lwmnz9w8AsG816vYYLnipkhc-Qy08F_-U",
          time: "45 mins ago",
          text: "Excellent question. We actually dialed back the PSI by 15% specifically for the Whitebark Pine seeds to prevent fracturing. The softer payload seeds (like the fireweed) handled the standard pressure perfectly.",
          likes: 4
        }
      ]
    },
    {
      id: 2,
      author: "Elena Rostova",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAs3POExwcJXMNWhscivrvLS5OLXh5Ww7wROtIbzBOe2ZWw2O-3vwM9GxkdZLu_mtAlm4r54YpVjsqWXp-p4krU1DnNuf6NwLQ31htG7c2d3Rcp3NhVzw8N6I7cxb8YmmWJIdfX_VSuJ1-3PrBK3c82PahsKtex6nJ_GuI9YArkkSbMtNS9RrEF3FjDa8TJ80tCWK06zzxCwNW5RNzOzsKLzI1ktL30MrzAOV_kOdlSo4d8KiLuTVutRcKDLZ7HvSFKBMVt4O61h7M0",
      time: "30 mins ago",
      text: "Regarding the battery issue: have you considered utilizing thermophotovoltaic coatings on the upper chassis? It won't solve the deep cold drain, but it might extend your flight time by 2-3 minutes during peak sunlight.",
      likes: 8,
      replies: []
    }
  ]);

  // Fetch the specific observation from the backend
  useEffect(() => {
    const fetchObservation = async () => {
      try {
        const response = await fetch('http://localhost:8000/observations');
        const result = await response.json();
        
        if (result.status === "success") {
          // Find the observation that matches the ID in the URL
          const foundArticle = result.data.find(obs => obs.observation_id === parseInt(id));
          setArticle(foundArticle);
        }
      } catch (error) {
        console.error("Failed to fetch article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchObservation();
  }, [id]);

  // Formatting helper for the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Handlers
  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleBookmarkToggle = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const newCommentObj = {
      id: Date.now(),
      author: "Current User",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOD0QLGZmAO-OqGqqEWKGDnOMAYB7dj5boWPTNFQ2HEofVEbEdSMl1IubSrxaQPtt8eAgcUBGQACEhqu-ghBjEXuY7lZaH_dA81MYeTdYfeYvdNexeNj-YqzjMgA9ZV_wtsDHkatpPfZ3EoskLt4YqVJjoI6_QK_gwBFcd7CVOOP0E7eJLDuu1mPNXP8CyduWnu3iB1c3Ye_qatGg4rFrEVenGaUomT9dhI1l17eJevD2ISsAD2R3uM7rLXBl4gb5aiT-Os5hoquNm", 
      time: "Just now",
      text: newComment,
      likes: 0,
      replies: []
    };

    setComments([newCommentObj, ...comments]);
    setNewComment("");
  };

  // Render a loading state while fetching from PostgreSQL
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface text-primary font-serif italic text-2xl">
        Accessing Archive...
      </div>
    );
  }

  // Handle case where URL ID doesn't match any database record
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface text-center px-6">
        <h1 className="font-serif text-4xl text-primary mb-4 italic">Record Not Found</h1>
        <p className="font-sans text-on-surface-variant mb-8">This field note may have been removed or reclassified.</p>
        <button onClick={() => navigate('/forum')} className="bg-primary text-on-primary px-8 py-3 font-sans text-xs font-bold uppercase tracking-widest rounded-sm">
          Return to Forum
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface text-on-background font-sans selection:bg-tertiary-fixed-dim selection:text-primary min-h-screen flex flex-col">
      
      {/* TopNavBar */}
      <nav className="bg-surface sticky top-0 z-50 border-b border-[#c2c8c0]/20">
        <div className="flex justify-between items-center w-full px-12 h-20 max-w-screen-2xl mx-auto">
          <Link className="text-2xl font-serif text-primary italic tracking-tight" to="/">
            BioInvisia
          </Link>
          
          <div className="hidden md:flex gap-8 items-center">
            <Link className="text-on-surface-variant font-normal hover:text-primary transition-colors duration-300" to="/researcher-dashboard">
              Catalog
            </Link>
            <Link className="text-primary border-b-2 border-tertiary-fixed-dim font-semibold transition-colors duration-300" to="/forum">
              Forum
            </Link>
            <Link className="text-on-surface-variant font-normal hover:text-primary transition-colors duration-300" to="#">
              Conservation
            </Link>
            <Link className="text-on-surface-variant font-normal hover:text-primary transition-colors duration-300" to="#">
              Archive
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" title="Sign Out">
              <span className="material-symbols-outlined text-primary cursor-pointer scale-100 active:scale-95 transition-transform">
                account_circle
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Article Container */}
        <article className="max-w-screen-md mx-auto w-full px-6 py-12 md:py-16">
          
          {/* Return Button */}
          <div className="mb-12">
            <button 
              onClick={() => navigate(-1)} 
              className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors outline-none"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Return to Forum
            </button>
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <span className="text-tertiary-fixed-dim font-sans text-xs font-extrabold tracking-widest uppercase">
                {article.topic || "General"}
              </span>
              <span className="text-on-surface-variant font-sans text-xs">
                Observed: {formatDate(article.observed_at)}
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-primary leading-tight mb-8">
              {article.headline || "Untitled Field Note"}
            </h1>
            
            <div className="flex items-center gap-4 pb-8 border-b border-[#c2c8c0]/20">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface-variant">person</span>
              </div>
              <div>
                <p className="font-sans font-bold text-primary">{article.author_name}</p>
                <p className="font-sans text-xs text-on-surface-variant uppercase tracking-widest">Lead Researcher</p>
              </div>
            </div>
          </header>

          {/* Body (Dynamically maps paragraphs based on line breaks!) */}
          <div className="space-y-8 mb-16">
            {article.research_content.split('\n').filter(p => p.trim() !== '').map((paragraph, idx) => (
              <p key={idx} className="font-sans text-lg text-on-surface-variant leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Metadata Specimen Card */}
          <div className="bg-surface-container-lowest p-6 border-l-2 border-tertiary-fixed-dim mb-16 shadow-[0px_12px_32px_rgba(26,28,27,0.02)]">
            <span className="block font-sans text-[10px] text-tertiary-fixed-dim font-bold uppercase tracking-widest mb-4">Observation Data</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="font-sans text-[10px] uppercase text-on-surface-variant tracking-wider mb-1">Latitude</p>
                <p className="font-sans font-bold text-primary text-sm">{article.location?.latitude || "N/A"}</p>
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase text-on-surface-variant tracking-wider mb-1">Longitude</p>
                <p className="font-sans font-bold text-primary text-sm">{article.location?.longitude || "N/A"}</p>
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase text-on-surface-variant tracking-wider mb-1">Species</p>
                <p className="font-sans font-bold text-primary text-sm italic">{article.species_name || "Unknown"}</p>
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase text-on-surface-variant tracking-wider mb-1">Status</p>
                {/* Checks if is_native exists in response, otherwise defaults */}
                <p className="font-sans font-bold text-primary text-sm">
                  {article.is_native === undefined ? "Unverified" : article.is_native ? "Native" : "Non-Native"}
                </p>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex flex-wrap justify-between items-center py-6 border-y border-[#c2c8c0]/20 mb-16 gap-4">
            <div className="flex gap-6">
              <button 
                onClick={handleLikeToggle}
                className={`flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-widest outline-none transition-colors ${isLiked ? 'text-[#ba1a1a]' : 'text-on-surface-variant hover:text-primary'}`}
              >
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: isLiked ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
                {likeCount}
              </button>
              <button className="flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors outline-none">
                <span className="material-symbols-outlined text-xl">chat_bubble</span>
                {comments.length + comments.reduce((acc, curr) => acc + curr.replies.length, 0)}
              </button>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={handleBookmarkToggle}
                className={`flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest outline-none transition-colors ${isBookmarked ? 'text-tertiary-container' : 'text-on-surface-variant hover:text-primary'}`}
              >
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: isBookmarked ? "'FILL' 1" : "'FILL' 0" }}>bookmark</span>
                {isBookmarked ? "Saved" : "Save"}
              </button>
              <button className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors outline-none">
                <span className="material-symbols-outlined text-xl">ios_share</span>
                Share
              </button>
            </div>
          </div>

        </article>

        {/* Discussion / Comments Section (Mocked for now) */}
        <section className="bg-surface-container-low py-16 md:py-24 border-t border-[#c2c8c0]/20">
          <div className="max-w-screen-md mx-auto w-full px-6">
            <h2 className="font-serif text-3xl italic text-primary mb-12">Collective Discussion</h2>

            <form onSubmit={handleCommentSubmit} className="mb-16">
              <div className="bg-surface-container-lowest p-6 rounded shadow-[0px_12px_32px_rgba(26,28,27,0.04)]">
                <label className="block font-sans text-xs font-semibold tracking-wider text-tertiary-fixed-dim uppercase mb-4">
                  Add to the field notes
                </label>
                <textarea 
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  rows="3"
                  placeholder="Share your insights or ask a question..."
                  className="w-full bg-surface border-none rounded px-4 py-4 text-on-surface font-sans placeholder:text-on-surface-variant/40 focus:ring-0 transition-colors outline-none resize-y mb-4"
                ></textarea>
                <div className="flex justify-end">
                  <button 
                    type="submit"
                    disabled={!newComment.trim()}
                    className="bg-primary text-on-primary px-8 py-3 font-sans font-bold text-xs tracking-widest uppercase rounded hover:bg-primary-container transition-all shadow-sm outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Post Comment
                  </button>
                </div>
              </div>
            </form>

            <div className="space-y-10">
              {comments.map(comment => (
                <div key={comment.id} className="group">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden bg-surface-container-highest mt-1">
                      <img src={comment.avatar} alt={comment.author} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-sans font-bold text-primary text-sm">{comment.author}</span>
                        <span className="font-sans text-[10px] text-on-surface-variant uppercase tracking-widest">{comment.time}</span>
                      </div>
                      <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-3">
                        {comment.text}
                      </p>
                      <div className="flex items-center gap-6">
                        <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-sans text-[10px] font-bold uppercase tracking-widest outline-none">
                          <span className="material-symbols-outlined text-sm">favorite</span> {comment.likes}
                        </button>
                        <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-sans text-[10px] font-bold uppercase tracking-widest outline-none">
                          <span className="material-symbols-outlined text-sm">reply</span> Reply
                        </button>
                      </div>
                    </div>
                  </div>

                  {comment.replies.length > 0 && (
                    <div className="ml-14 mt-6 space-y-6 border-l-2 border-tertiary-fixed-dim/30 pl-6">
                      {comment.replies.map(reply => (
                        <div key={reply.id} className="flex gap-4">
                          <div className="w-8 h-8 shrink-0 rounded-full overflow-hidden bg-surface-container-highest mt-1">
                            <img src={reply.avatar} alt={reply.author} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-1">
                              <span className="font-sans font-bold text-primary text-sm">{reply.author}</span>
                              <span className="font-sans text-[10px] text-on-surface-variant uppercase tracking-widest">{reply.time}</span>
                            </div>
                            <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-3">
                              {reply.text}
                            </p>
                            <div className="flex items-center gap-6">
                              <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-sans text-[10px] font-bold uppercase tracking-widest outline-none">
                                <span className="material-symbols-outlined text-sm">favorite</span> {reply.likes}
                              </button>
                              <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-sans text-[10px] font-bold uppercase tracking-widest outline-none">
                                <span className="material-symbols-outlined text-sm">reply</span> Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#f1f1ef] py-16">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-screen-2xl mx-auto gap-8">
          <div className="font-serif text-lg italic text-primary">BioInvisia</div>
          <div className="flex gap-12 font-sans text-sm tracking-wide">
            <Link className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200" to="#">Ethics</Link>
            <Link className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200" to="#">Privacy</Link>
            <Link className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200" to="#">Methodology</Link>
            <Link className="text-on-surface-variant hover:text-tertiary-fixed-dim transition-colors duration-200" to="#">Contact</Link>
          </div>
          <div className="font-sans text-sm tracking-wide text-on-surface-variant opacity-100 hover:opacity-80 transition-opacity">
            © 2024 BioInvisia Research Collective. All rights preserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ThreadDetail;