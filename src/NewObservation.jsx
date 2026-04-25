import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NewObservation() {
  const navigate = useNavigate();
  
  // State to hold our form data for the future FastAPI backend
  const [formData, setFormData] = useState({
    topic: '', // Starts empty to show placeholder
    headline: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // FUTURE BACKEND LOGIC: 
    // await axios.post('/api/observations', formData);
    console.log("Data ready for database:", formData);
    
    // For now, simulate success and return to dashboard
    navigate('/researcher-dashboard');
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
            <Link to="/login" title="Sign Out">
              <span className="material-symbols-outlined text-primary cursor-pointer scale-100 active:scale-95 transition-transform">
                account_circle
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-16 md:py-24">
        
        {/* Page Header */}
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

        {/* Observation Form */}
        <div className="bg-surface-container-lowest p-8 md:p-12 rounded shadow-[0px_12px_32px_rgba(26,28,27,0.04)] relative overflow-hidden">
          
          {/* Subtle decorative botanical watermark */}
          <span className="material-symbols-outlined text-[300px] text-surface-container-low absolute -bottom-20 -right-20 pointer-events-none rotate-12 z-0">
            local_florist
          </span>

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            
            {/* 1. Topic Category - Converted to Input */}
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

            {/* 3. Content */}
            <div className="group">
              <label className="block font-sans text-xs font-semibold tracking-wider text-tertiary-fixed-dim uppercase mb-2">
                3. Full Content
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

            {/* 4 & 5. Coordinates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="block font-sans text-xs font-semibold tracking-wider text-tertiary-fixed-dim uppercase mb-2">
                  4. Latitude
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
                  5. Longitude
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

            {/* 6 & 7. Date and Nativity Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="group">
                <label className="block font-sans text-xs font-semibold tracking-wider text-tertiary-fixed-dim uppercase mb-2">
                  6. Observed At
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
                    7. Is Native Species?
                  </label>
                  <span className="text-[10px] text-on-surface-variant font-sans">Verify regional catalog</span>
                </div>
                {/* Custom Toggle Switch */}
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