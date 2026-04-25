import React from 'react';
import { Link } from 'react-router-dom';

function Forum() {
  // Mock data updated with likes
  const discussions = [
    {
      id: 1,
      category: "Conservation Ethics",
      title: "Ethics of Synthetic Biology in Conservation",
      excerpt: "As CRISPR and other gene-editing tools become more accessible, we must establish a unified framework for deploying synthetic biology in fragile ecosystems. This thread aims to consolidate our stance on the introduction of engineered traits to endangered populations.",
      author: "Dr. Aris Thorne",
      time: "2 hours ago",
      likes: 312,
      replies: 14,
      avatars: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBdgJIpV1mGjVzLLmvjdH5W1MUCUKuQH4jBW-3HzKdVcNlQB5vQBHPkEW0jQhP6uZwisVX1xZjbQoIaqy-RqPv50L5RpCpoQlPp3xHEw3iHSrC5WnAVuO4-DmVVL4ktEMJgYUEiB2NhmAFpluevOXM6rLpECThq1oIPk-gtxbw9L3skjyMN3SE2Pa8ojmGtIJIBaOq0vPwZLkzbrfA53finF8NkdJkvWKH4O8N6gRvqdIcs3qJFpjwALBxtYY1e6qfx6tSrOr9Swaxp", "https://lh3.googleusercontent.com/aida-public/AB6AXuD9cfXog7sumX82Dr8MTjJlXsrhzYROFz_gmNp6RLHZB75CFsw-nEItlYCtyP2Eo7uT1-jUxWiCgD09qD3mzPeT09mMaQKP8PvTLCI01wBltjlQRO8J9Usz4KhQcp5s6QWc6LkHv45VExFnDuoCjDja9uD908xu15gcfaNvfPKVyKmaTQ7Xcr89EuAGqwKQkk_AGleQ4QJAYtAQhNOGC4a_Q4TExH6fWjU0X5EdSnJ4Ng3qbsIa0ojBZvhM63MO2m1eyCJc_Li39Uxc"]
    },
    {
      id: 2,
      category: "Field Reports",
      title: "Micro-plastic tracing in Amazonian tributaries",
      excerpt: "Initial findings from the Q3 expedition show a 15% increase in micro-plastic saturation upstream from previously untouched tributaries. Looking for researchers who can cross-reference this with local precipitation models.",
      author: "Elena Rostova",
      time: "5 hours ago",
      likes: 89,
      replies: 8,
      avatars: ["https://lh3.googleusercontent.com/aida-public/AB6AXuAs3POExwcJXMNWhscivrvLS5OLXh5Ww7wROtIbzBOe2ZWw2O-3vwM9GxkdZLu_mtAlm4r54YpVjsqWXp-p4krU1DnNuf6NwLQ31htG7c2d3Rcp3NhVzw8N6I7cxb8YmmWJIdfX_VSuJ1-3PrBK3c82PahsKtex6nJ_GuI9YArkkSbMtNS9RrEF3FjDa8TJ80tCWK06zzxCwNW5RNzOzsKLzI1ktL30MrzAOV_kOdlSo4d8KiLuTVutRcKDLZ7HvSFKBMVt4O61h7M0"]
    },
    {
      id: 3,
      category: "Technology & Methodology",
      title: "Autonomous re-forestation drones: A field report",
      excerpt: "We deployed the Mk-IV seed-dispersal drones over a 50-hectare burn scar. Seedling survival rates are currently tracking at 62%, which is promising, but battery life at high altitudes remains a severe limitation.",
      author: "Julian Vane",
      time: "1 day ago",
      likes: 142,
      replies: 42,
      avatars: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBDJNhl1vXDxDHtF5cSDY9D72e66RYUB2p2QEi_3t_22zBQQ2S-sHbP2VVjd78OBBVH8YasnV0lJqP6yPlPj0ZJjfs6GKsb6TDs_SEFKBzd_W6MvZ58VZH7oXV_WWm_az3C935hBlQe-BcSj8gMQZ2jFJ5EWPXX2GlJtEi9ROyg8Z0KzzYWJVBRbCHvUuHQXKM6XVUnPcCdv2tbqTAqF20vG9j5-q_MORYqeARlZJdNeB0Lwmnz9w8AsG816vYYLnipkhc-Qy08F_-U", "https://lh3.googleusercontent.com/aida-public/AB6AXuChk-hewFDV7k6WZNDZXNJuyfAIEwFtpK_sck1D8IJQ1PxjRTNxMlibPJqm5lgraZgV2Gnn3ZInmBwBMDRtMptRNHcUK1Is7guAmMbozf4__bOKI2lqI9AFbgfcnTBNHquEEii9uw2YlqIcYv4mOXxtAoMMWB00rWWUdGB6mNSHyGjLfatevu-QPrl_3Nlypx6oajtAPoKe4RH6UiyNatUuviyhQPoIdMzDrTTE0T6QsjAK3YLvEq1vTMdiohhVMhhf7wx9p6U7LLdR"]
    }
  ];

  return (
    <div className="bg-surface text-on-background font-sans selection:bg-tertiary-fixed-dim selection:text-primary min-h-screen flex flex-col">
      {/* TopNavBar */}
      <nav className="bg-surface sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-12 h-20 max-w-screen-2xl mx-auto">
          <Link className="text-2xl font-serif text-primary italic tracking-tight" to="/">
            BioInvisia
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            {/* Correctly updated Researcher Dashboard link */}
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
          {discussions.map((post) => (
            <article key={post.id} className="bg-surface-container-lowest p-8 md:p-12 rounded-md shadow-[0px_12px_32px_rgba(26,28,27,0.04)] group transition-all duration-500 hover:shadow-[0px_12px_32px_rgba(26,28,27,0.08)]">
              {/* Post Meta */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-tertiary-fixed-dim font-sans text-[10px] font-extrabold tracking-widest uppercase">
                  {post.category}
                </span>
                <span className="text-on-surface-variant font-sans text-xs">
                  {post.time}
                </span>
              </div>
              
              {/* Title & Excerpt */}
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4 leading-snug group-hover:text-tertiary-container transition-colors cursor-pointer">
                {post.title}
              </h2>
              <p className="font-sans text-on-surface-variant leading-relaxed mb-8">
                {post.excerpt}
              </p>
              
              {/* Footer / Interaction - Updated with Likes/Comments */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pt-6 border-t border-[#c2c8c0]/20 gap-6">
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
                    <span className="material-symbols-outlined text-on-surface-variant mt-1 ml-1 text-xl">person</span>
                  </div>
                  <span className="font-sans text-sm font-semibold text-primary">{post.author}</span>
                </div>
                
                <div className="flex flex-wrap items-center gap-6 w-full lg:w-auto justify-between lg:justify-end">
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4 border-r border-[#c2c8c0]/30 pr-6">
                    <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-sans text-xs font-bold uppercase tracking-widest outline-none">
                      <span className="material-symbols-outlined text-base">favorite</span> {post.likes}
                    </button>
                    <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-sans text-xs font-bold uppercase tracking-widest outline-none">
                      <span className="material-symbols-outlined text-base">chat_bubble</span> {post.replies}
                    </button>
                  </div>

                  {/* Avatars and Button */}
                  <div className="flex items-center gap-6">
                    <div className="flex -space-x-2">
                      {post.avatars.map((avatar, idx) => (
                        <div key={idx} className="w-8 h-8 rounded-full border-2 border-white bg-[#e8e8e6] overflow-hidden">
                          <img alt="Participant" className="w-full h-full object-cover" src={avatar}/>
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-container-highest flex items-center justify-center text-primary font-sans text-[10px] font-bold">
                        +{post.replies}
                      </div>
                    </div>
                    <Link to="/ThreadDetail" className="flex items-center gap-2 text-primary hover:text-tertiary-fixed-dim transition-colors outline-none font-sans font-bold text-xs tracking-wider uppercase">
                    Join Thread <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
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