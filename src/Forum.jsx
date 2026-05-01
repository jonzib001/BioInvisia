import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Forum() {
  // State to hold the dynamic database records
  const [observations, setObservations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock avatars for the visual layout until users can upload profile pictures
  const mockAvatars = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBdgJIpV1mGjVzLLmvjdH5W1MUCUKuQH4jBW-3HzKdVcNlQB5vQBHPkEW0jQhP6uZwisVX1xZjbQoIaqy-RqPv50L5RpCpoQlPp3xHEw3iHSrC5WnAVuO4-DmVVL4ktEMJgYUEiB2NhmAFpluevOXM6rLpECThq1oIPk-gtxbw9L3skjyMN3SE2Pa8ojmGtIJIBaOq0vPwZLkzbrfA53finF8NkdJkvWKH4O8N6gRvqdIcs3qJFpjwALBxtYY1e6qfx6tSrOr9Swaxp", 
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD9cfXog7sumX82Dr8MTjJlXsrhzYROFz_gmNp6RLHZB75CFsw-nEItlYCtyP2Eo7uT1-jUxWiCgD09qD3mzPeT09mMaQKP8PvTLCI01wBltjlQRO8J9Usz4KhQcp5s6QWc6LkHv45VExFnDuoCjDja9uD908xu15gcfaNvfPKVyKmaTQ7Xcr89EuAGqwKQkk_AGleQ4QJAYtAQhNOGC4a_Q4TExH6fWjU0X5EdSnJ4Ng3qbsIa0ojBZvhM63MO2m1eyCJc_Li39Uxc"
  ];

  useEffect(() => {
    // Fetch data from your FastAPI endpoint
    const fetchObservations = async () => {
      try {
        const response = await fetch('http://localhost:8000/observations');
        const result = await response.json();
        
        if (result.status === "success") {
          setObservations(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch forum data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchObservations();
  }, []);

  // Helper function to format the PostgreSQL timestamp into a clean date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
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

      <main className="flex-grow max-w-screen-md mx-auto w-full px-6 py-16 md:py-24">
        {/* Forum Header */}
        <header className="mb-16">
          <span className="text-tertiary-fixed-dim font-sans font-bold tracking-widest text-xs uppercase mb-4 block">
            The Collective Intelligence
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h1 className="font-serif text-5xl md:text-6xl italic text-primary leading-tight">
              Research Forum
            </h1>
            <Link to="/NewObservation" className="bg-primary text-on-primary px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase rounded hover:bg-primary-container transition-all duration-300 shadow-[0px_12px_32px_rgba(26,28,27,0.06)] shrink-0 outline-none inline-block text-center">
              Start Discussion
            </Link>
          </div>
          <p className="mt-6 text-lg text-on-surface-variant font-sans leading-relaxed">
            Connect with world-leading conservationists, share field notes, and collaboratively decode the unseen pulse of our planet.
          </p>
        </header>

        {/* Filter/Sort Bar */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden">
          <button className="bg-surface-container-highest text-primary px-6 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider uppercase whitespace-nowrap outline-none">
            All Topics
          </button>
          <button className="bg-transparent text-on-surface-variant border border-[#c2c8c0] px-6 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider uppercase whitespace-nowrap hover:bg-surface-container-low transition-colors outline-none">
            Conservation Ethics
          </button>
          <button className="bg-transparent text-on-surface-variant border border-[#c2c8c0] px-6 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider uppercase whitespace-nowrap hover:bg-surface-container-low transition-colors outline-none">
            Field Reports
          </button>
          <button className="bg-transparent text-on-surface-variant border border-[#c2c8c0] px-6 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider uppercase whitespace-nowrap hover:bg-surface-container-low transition-colors outline-none">
            Methodology
          </button>
        </div>

        {/* Discussion Feed */}
        <div className="space-y-12">
          {loading ? (
            <div className="text-center font-serif italic text-primary py-12">Loading field notes...</div>
          ) : observations.length === 0 ? (
            <div className="text-center font-sans text-on-surface-variant py-12">No observations found in the archive.</div>
          ) : (
            observations.map((obs) => (
              <article key={obs.observation_id} className="bg-surface-container-lowest p-8 md:p-12 rounded-md shadow-[0px_12px_32px_rgba(26,28,27,0.04)] group transition-all duration-500 hover:shadow-[0px_12px_32px_rgba(26,28,27,0.08)]">
                {/* Post Meta */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-tertiary-fixed-dim font-sans text-[10px] font-extrabold tracking-widest uppercase">
                    {obs.topic || "General"}
                  </span>
                  <span className="text-on-surface-variant font-sans text-xs">
                    {formatDate(obs.observed_at)}
                  </span>
                </div>
                
                {/* Title & Excerpt */}
                <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 leading-snug group-hover:text-tertiary-container transition-colors cursor-pointer">
                  {obs.headline || "Untitled Field Note"}
                </h2>
                {/* NOTE: line-clamp-3 added here to truncate the content dynamically! */}
                <p className="font-sans text-on-surface-variant leading-relaxed mb-8 line-clamp-3">
                  {obs.research_content}
                </p>
                
                {/* Footer / Interaction */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-6 border-t border-[#c2c8c0]/20 gap-6">
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-surface-variant text-xl">person</span>
                    </div>
                    <span className="font-sans text-sm font-semibold text-primary">{obs.author_name || "Unknown Researcher"}</span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-6 w-full lg:w-auto justify-between lg:justify-end">
                    
                    {/* Action Buttons (Mock Data for now until comments API is hooked up) */}
                    <div className="flex gap-4 border-r border-[#c2c8c0]/30 pr-6">
                      <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-sans text-xs font-bold uppercase tracking-widest outline-none">
                        <span className="material-symbols-outlined text-base">favorite</span> 0
                      </button>
                      <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-sans text-xs font-bold uppercase tracking-widest outline-none">
                        <span className="material-symbols-outlined text-base">chat_bubble</span> 0
                      </button>
                    </div>

                    {/* Avatars and Button */}
                    <div className="flex items-center gap-6">
                      <div className="flex -space-x-2">
                        {mockAvatars.map((avatar, idx) => (
                          <div key={idx} className="w-8 h-8 rounded-full border-2 border-white bg-[#e8e8e6] overflow-hidden">
                            <img alt="Participant" className="w-full h-full object-cover" src={avatar}/>
                          </div>
                        ))}
                      </div>
                      {/* Dynamically pass the ID in the URL to the thread detail page */}
                      <Link to={`/ThreadDetail/${obs.observation_id}`} className="flex items-center gap-2 text-primary hover:text-tertiary-fixed-dim transition-colors outline-none font-sans font-bold text-xs tracking-wider uppercase">
                      Join Thread <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
        
        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="text-primary font-sans font-bold text-xs tracking-widest uppercase border-b-2 border-tertiary-fixed-dim pb-1 hover:text-tertiary-container transition-colors">
            Load Archive Archives
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low mt-12 py-16">
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

export default Forum;