import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NewObservation() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    topic: '', 
    headline: '',
    speciesName: '', 
    content: '',
    latitude: '',
    longitude: '',
    observedAt: '',
    isNative: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 1. Get the dynamic user_id from localStorage
    const currentUserId = localStorage.getItem('user_id');
    
    if (!currentUserId) {
      alert("Session expired. Please log in again.");
      navigate('/login');
      return;
    }

    try {
      let finalSpeciesId = null;
      const cleanSpeciesName = formData.speciesName.trim();

      // 2. Fetch existing species
      const speciesResponse = await fetch('http://localhost:8000/species');
      const speciesData = await speciesResponse.json();

      if (speciesData.status === "success") {
        const existingSpecies = speciesData.data.find(
          s => s.species_name.toLowerCase() === cleanSpeciesName.toLowerCase()
        );

        if (existingSpecies) {
          finalSpeciesId = existingSpecies.species_id;
          console.log("Found existing species ID:", finalSpeciesId);
        }
      }

      // 3. Create new species if needed
      if (!finalSpeciesId) {
        console.log("Species not found. Creating new species record...");
        
        const newSpeciesPayload = {
          species_name: cleanSpeciesName,
          user_id: parseInt(currentUserId)
        };

        const createSpeciesRes = await fetch('http://localhost:8000/species', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newSpeciesPayload)
        });
        
        const createSpeciesData = await createSpeciesRes.json();

        if (createSpeciesData.status === "success") {
          finalSpeciesId = createSpeciesData.species_id;
          console.log("New species created with ID:", finalSpeciesId);
        } else {
          throw new Error(createSpeciesData.message || "Failed to catalog new species.");
        }
      }

      // 4. Post the Observation
      const payload = {
        user_id: parseInt(currentUserId),
        species_id: finalSpeciesId,
        topic: formData.topic,               
        headline: formData.headline,         
        research_content: formData.content,  
        latitude: parseFloat(formData.latitude),
        longitude: parseFloat(formData.longitude),
        observed_at: formData.observedAt,
        is_native: formData.isNative
      };

      const obsResponse = await fetch('http://localhost:8000/observations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      // THE FIX: Parse the JSON first, THEN check if it was actually a success
      const result = await obsResponse.json();

      if (obsResponse.ok && result.status === "success") {
        console.log("Archive update successful:", result);
        navigate('/researcher-dashboard');
      } else {
        // If Postgres threw an error, this will catch it and pop up on your screen!
        throw new Error(`Database Error: ${result.message}`);
      }

    } catch (error) {
      console.error("Workflow Error:", error);
      // This alert will show you EXACTLY what is breaking in the backend
      alert(`Upload Failed:\n${error.message}`);
    }
  };

  return (
    <div className="bg-surface text-on-background font-sans selection:bg-tertiary-fixed-dim selection:text-primary min-h-screen flex flex-col">
      {/* TopNavBar */}
      <nav className="bg-surface sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-12 h-20 max-w-screen-2xl mx-auto">
          <Link className="text-2xl font-serif text-primary italic tracking-tight" to="/">
            BioInvisia
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link className="text-on-surface-variant font-normal hover:text-primary transition-colors duration-300" to="/researcher-dashboard">
              Catalog
            </Link>
            <Link className="text-on-surface-variant font-normal hover:text-primary transition-colors duration-300" to="/forum">
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
            <Link to="/login" title="Sign Out" onClick={() => localStorage.removeItem('user_id')}>
              <span className="material-symbols-outlined text-primary cursor-pointer scale-100 active:scale-95 transition-transform">
                account_circle
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-16 md:py-24">
        
        <header className="mb-12 text-center md:text-left">
          <span className="text-tertiary-fixed-dim font-sans font-bold tracking-widest text-xs uppercase mb-4 block">
            Archival Entry
          </span>
          <h1 className="font-serif text-5xl md:text-6xl italic text-primary leading-tight mb-4">
            Submit a Field Note
          </h1>
          <p className="text-lg text-on-surface-variant font-sans leading-relaxed max-w-2xl">
            Your observations enrich the collective intelligence. Ensure coordinates and timestamps are accurate to maintain catalog integrity.
          </p>
        </header>

        <div className="bg-surface-container-lowest p-8 md:p-12 rounded shadow-[0px_12px_32px_rgba(26,28,27,0.04)] relative overflow-hidden">
          
          <span className="material-symbols-outlined text-[300px] text-surface-container-low absolute -bottom-20 -right-20 pointer-events-none rotate-12 z-0">
            local_florist
          </span>

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            
            {/* 1. Topic Category */}
            <div className="group">
              <label className="block font-sans text-xs font-semibold tracking-wider text-tertiary-fixed-dim uppercase mb-2">
                1. Topic Category
              </label>
              <input 
                type="text"
                name="topic" 
                value={formData.topic} 
                onChange={handleChange}
                required
                placeholder="e.g., Field Reports, Methodology, Species Discovery"
                className="w-full bg-surface-container-highest border-none rounded-md px-4 py-4 text-primary font-serif text-lg placeholder:text-on-surface-variant/40 focus:ring-0 focus:bg-surface-container-high transition-colors outline-none"
              />
            </div>

            {/* 2. Headline / Hook */}
            <div className="group">
              <label className="block font-sans text-xs font-semibold tracking-wider text-tertiary-fixed-dim uppercase mb-2">
                2. Headline
              </label>
              <input 
                name="headline"
                value={formData.headline}
                onChange={handleChange}
                required
                placeholder="e.g., Autonomous re-forestation drones: A field report"
                className="w-full bg-surface-container-highest border-none rounded-md px-4 py-4 text-primary font-serif text-2xl placeholder:text-on-surface-variant/40 focus:ring-0 focus:bg-surface-container-high transition-colors outline-none"
              />
            </div>

            {/* 3. Biological Classification */}
            <div className="group">
              <label className="block font-sans text-xs font-semibold tracking-wider text-tertiary-fixed-dim uppercase mb-2">
                3. Species Name
              </label>
              <input 
                type="text"
                name="speciesName"
                value={formData.speciesName}
                onChange={handleChange}
                required
                placeholder="e.g., House Sparrow"
                className="w-full bg-surface-container-highest border-none rounded-md px-4 py-4 text-on-surface font-sans placeholder:text-on-surface-variant/40 focus:ring-0 focus:bg-surface-container-high transition-colors outline-none"
              />
            </div>

            {/* 4. Content */}
            <div className="group">
              <label className="block font-sans text-xs font-semibold tracking-wider text-tertiary-fixed-dim uppercase mb-2">
                4. Full Content
              </label>
              <textarea 
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows="8"
                placeholder="Detail your methodology, findings, and environmental variables..."
                className="w-full bg-surface-container-highest border-none rounded-md px-4 py-4 text-on-surface font-sans leading-relaxed placeholder:text-on-surface-variant/40 focus:ring-0 focus:bg-surface-container-high transition-colors outline-none resize-y"
              ></textarea>
            </div>

            {/* 5 & 6. Coordinates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="block font-sans text-xs font-semibold tracking-wider text-tertiary-fixed-dim uppercase mb-2">
                  5. Latitude
                </label>
                <input 
                  type="number"
                  step="any"
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 46.5197"
                  className="w-full bg-surface-container-highest border-none rounded-md px-4 py-4 text-on-surface font-sans placeholder:text-on-surface-variant/40 focus:ring-0 focus:bg-surface-container-high transition-colors outline-none"
                />
              </div>
              <div className="group">
                <label className="block font-sans text-xs font-semibold tracking-wider text-tertiary-fixed-dim uppercase mb-2">
                  6. Longitude
                </label>
                <input 
                  type="number"
                  step="any"
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 6.6323"
                  className="w-full bg-surface-container-highest border-none rounded-md px-4 py-4 text-on-surface font-sans placeholder:text-on-surface-variant/40 focus:ring-0 focus:bg-surface-container-high transition-colors outline-none"
                />
              </div>
            </div>

            {/* 7 & 8. Date and Nativity Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="group">
                <label className="block font-sans text-xs font-semibold tracking-wider text-tertiary-fixed-dim uppercase mb-2">
                  7. Observed At
                </label>
                <input 
                  type="datetime-local"
                  name="observedAt"
                  value={formData.observedAt}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container-highest border-none rounded-md px-4 py-4 text-on-surface font-sans placeholder:text-on-surface-variant/40 focus:ring-0 focus:bg-surface-container-high transition-colors outline-none cursor-pointer"
                />
              </div>

              <div className="group flex items-center justify-between bg-surface-container-highest px-6 py-4 rounded-md h-full mt-6">
                <div>
                  <label className="block font-sans text-xs font-semibold tracking-wider text-primary uppercase">
                    8. Is Native Species?
                  </label>
                  <span className="text-[10px] text-on-surface-variant font-sans">Verify regional catalog</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="isNative"
                    checked={formData.isNative}
                    onChange={handleChange}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-[#c2c8c0] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-8 border-t border-[#c2c8c0]/20 flex justify-end gap-4">
              <Link to="/researcher-dashboard" className="px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors outline-none flex items-center">
                Cancel
              </Link>
              <button 
                type="submit"
                className="bg-primary text-on-primary px-10 py-4 font-sans font-bold text-xs tracking-widest uppercase rounded hover:bg-primary-container transition-all duration-300 shadow-lg outline-none"
              >
                Upload to Archive
              </button>
            </div>

          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#f1f1ef] mt-auto py-16">
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

export default NewObservation;