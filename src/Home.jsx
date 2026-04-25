import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md no-border bg-surface-container-low/50 h-20">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-full">
          <div className="text-2xl font-serif text-emerald-950 tracking-tighter">BioInvisia</div>
          <div className="hidden md:flex items-center gap-10">
            <a className="text-stone-600 font-medium hover:text-emerald-700 transition-colors duration-300" href="#research">Research</a>
            <a className="text-stone-600 font-medium hover:text-emerald-700 transition-colors duration-300" href="#forum">Forum</a>
            <a className="text-stone-600 font-medium hover:text-emerald-700 transition-colors duration-300" href="#">Conservation</a>
            <a className="text-emerald-900 font-semibold border-b border-amber-400/50 hover:text-emerald-700 transition-colors duration-300" href="#mission">Mission</a>
          </div>
          <div className="flex gap-6 items-center">
             <Link className="font-serif italic text-lg text-stone-600 hover:text-emerald-700 transition-colors duration-300" to="/login">Sign In</Link>
             <Link className="bg-primary text-on-primary px-6 py-2.5 text-sm font-semibold tracking-wide hover:opacity-90 transition-all duration-300 flex items-center justify-center" to="/signup">Join the Collective</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover scale-105 blur-sm brightness-75" 
            alt="cinematic wide shot of a misty emerald green rainforest with shafts of sunlight piercing through dense tropical foliage and ancient trees" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOD0QLGZmAO-OqGqqEWKGDnOMAYB7dj5boWPTNFQ2HEofVEbEdSMl1IubSrxaQPtt8eAgcUBGQACEhqu-ghBjEXuY7lZaH_dA81MYeTdYfeYvdNexeNj-YqzjMgA9ZV_wtsDHkatpPfZ3EoskLt4YqVJjoI6_QK_gwBFcd7CVOOP0E7eJLDuu1mPNXP8CyduWnu3iB1c3Ye_qatGg4rFrEVenGaUomT9dhI1l17eJevD2ISsAD2R3uM7rLXBl4gb5aiT-Os5hoquNm"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-background"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="font-serif text-7xl md:text-9xl text-white italic tracking-tighter mb-4 drop-shadow-lg">
            BioInvisia
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/90 tracking-widest uppercase mb-12 max-w-2xl mx-auto font-light">
            Advancing Wildlife Research & Global Sustainability
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a className="bg-tertiary-fixed-dim text-primary px-10 py-4 font-bold tracking-tight hover:bg-tertiary-fixed transition-all duration-300 shadow-xl" href="#forum">
              Explore the Forum
            </a>
            <a className="text-white border border-white/30 backdrop-blur-md px-10 py-4 font-bold tracking-tight hover:bg-white hover:text-primary transition-all duration-300" href="#mission">
              Our Mission
            </a>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <span className="material-symbols-outlined text-4xl">expand_more</span>
        </div>
      </section>

      {/* Research Section (The Specimen Grid) */}
      <section className="py-32 px-8 max-w-7xl mx-auto" id="research">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-tertiary-fixed-dim font-bold tracking-widest text-sm uppercase mb-4 block">Current Investigations</span>
            <h2 className="font-serif text-5xl text-primary leading-tight">Pioneering insights into the Earth's most resilient ecosystems.</h2>
          </div>
          <a className="text-primary font-bold border-b-2 border-tertiary-fixed-dim pb-1 hover:text-tertiary-container transition-colors" href="#">View All Papers</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Featured Specimen Card */}
          <div className="md:col-span-8 bg-surface-container-low group overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 overflow-hidden h-96">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt="macro photography of rare alpine flowers" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2KjlGtWxheT6YEO2yKA8fU2M5zrz0uFGohUYk5ZUKYaI2p1RHUrH8k2wqKB9rHrdP_AJqKkoDOliA5y2KiHZxaSk_0bfat3xZ1V9_jhMndFXnGFnfu2Q2qT_ZrfOO4XL_z0dSx8aEU9fNlhqHZhz-5h1nvgm2RI9dVk7J7k_KPk9DI0YKxBvhT7518LUMNaML9QvWLc0_LRVJJHn1cWN-KJ1-JllQECaxfKB0it__-WVxUrer3_DGW328a_4u5CT5g1nVhK5RcfDa"
                />
              </div>
              <div className="p-12 flex flex-col justify-center w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-[1px] bg-tertiary-fixed-dim"></span>
                  <span className="text-tertiary-fixed-dim text-xs font-bold uppercase tracking-widest">Case Study 042</span>
                </div>
                <h3 className="font-serif text-3xl text-primary mb-6">Alpine Biodiversity: Survival at the Edge</h3>
                <p className="text-on-surface-variant font-body leading-relaxed mb-8">
                  Examining the symbiotic relationships between high-altitude flora and microbial soil networks in the face of shifting climates.
                </p>
                <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                  Read Full Thesis <span className="material-symbols-outlined">arrow_right_alt</span>
                </button>
              </div>
            </div>
          </div>

          {/* Side Cards */}
          <div className="md:col-span-4 flex flex-col gap-12">
            <div className="bg-surface-container-lowest p-8 flex flex-col h-full border-l-4 border-tertiary-fixed-dim">
              <h4 className="font-serif text-2xl text-primary mb-4 italic">Sustainable Ecosystems</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                A longitudinal study on re-wilding urban corridors and their impact on avian migratory patterns.
              </p>
              <div className="mt-auto flex justify-between items-center pt-6 border-t border-surface-variant/30">
                <span className="text-[10px] text-tertiary-fixed-dim font-bold uppercase tracking-tighter">Sept 2024</span>
                <span className="material-symbols-outlined text-primary text-xl">biotech</span>
              </div>
            </div>
            
            <div className="bg-primary p-8 flex flex-col h-full">
              <h4 className="font-serif text-2xl text-on-primary mb-4 italic">Marine Bio-Luminescence</h4>
              <p className="text-sm text-on-primary-container leading-relaxed mb-6">
                Decoding the chemical signals of deep-sea cephalopods in the Twilight Zone.
              </p>
              <div className="mt-auto flex justify-between items-center pt-6 border-t border-primary-container">
                <span className="text-[10px] text-tertiary-fixed-dim font-bold uppercase tracking-tighter">New Release</span>
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-xl">waves</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Preview Section */}
      <section className="bg-surface-container-low py-32" id="forum">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="font-serif text-5xl text-primary mb-6">The Collective Intelligence</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto font-body">Connect with world-leading conservationists and researchers in our curated forum spaces.</p>
          </div>
          
          <div className="space-y-4">
            {/* Forum Row 1 */}
            <div className="bg-surface-container-lowest group hover:bg-white transition-all p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary-container text-2xl">eco</span>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-primary group-hover:text-tertiary-container transition-colors">Ethics of Synthetic Biology in Conservation</h4>
                  <p className="text-xs text-stone-500 mt-1 uppercase tracking-widest font-bold">48 Active Participants • 12 New Insights</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="hidden lg:flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-stone-200 overflow-hidden">
                    <img alt="User Avatar" className="w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdgJIpV1mGjVzLLmvjdH5W1MUCUKuQH4jBW-3HzKdVcNlQB5vQBHPkEW0jQhP6uZwisVX1xZjbQoIaqy-RqPv50L5RpCpoQlPp3xHEw3iHSrC5WnAVuO4-DmVVL4ktEMJgYUEiB2NhmAFpluevOXM6rLpECThq1oIPk-gtxbw9L3skjyMN3SE2Pa8ojmGtIJIBaOq0vPwZLkzbrfA53finF8NkdJkvWKH4O8N6gRvqdIcs3qJFpjwALBxtYY1e6qfx6tSrOr9Swaxp"/>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-stone-200 overflow-hidden">
                    <img alt="User Avatar" className="w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9cfXog7sumX82Dr8MTjJlXsrhzYROFz_gmNp6RLHZB75CFsw-nEItlYCtyP2Eo7uT1-jUxWiCgD09qD3mzPeT09mMaQKP8PvTLCI01wBltjlQRO8J9Usz4KhQcp5s6QWc6LkHv45VExFnDuoCjDja9uD908xu15gcfaNvfPKVyKmaTQ7Xcr89EuAGqwKQkk_AGleQ4QJAYtAQhNOGC4a_Q4TExH6fWjU0X5EdSnJ4Ng3qbsIa0ojBZvhM63MO2m1eyCJc_Li39Uxc"/>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-stone-300 flex items-center justify-center text-[10px] font-bold">+15</div>
                </div>
                <button className="bg-primary text-on-primary px-6 py-2 text-xs font-bold tracking-widest uppercase">Join Discussion</button>
              </div>
            </div>

            {/* Forum Row 2 */}
            <div className="bg-surface-container-lowest group hover:bg-white transition-all p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary-container text-2xl">magnification_small</span>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-primary group-hover:text-tertiary-container transition-colors">Micro-plastic tracing in Amazonian tributaries</h4>
                  <p className="text-xs text-stone-500 mt-1 uppercase tracking-widest font-bold">32 Active Participants • 5 New Insights</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="hidden lg:flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-stone-200 overflow-hidden">
                    <img alt="User Avatar" className="w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs3POExwcJXMNWhscivrvLS5OLXh5Ww7wROtIbzBOe2ZWw2O-3vwM9GxkdZLu_mtAlm4r54YpVjsqWXp-p4krU1DnNuf6NwLQ31htG7c2d3Rcp3NhVzw8N6I7cxb8YmmWJIdfX_VSuJ1-3PrBK3c82PahsKtex6nJ_GuI9YArkkSbMtNS9RrEF3FjDa8TJ80tCWK06zzxCwNW5RNzOzsKLzI1ktL30MrzAOV_kOdlSo4d8KiLuTVutRcKDLZ7HvSFKBMVt4O61h7M0"/>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-stone-300 flex items-center justify-center text-[10px] font-bold">+8</div>
                </div>
                <button className="bg-primary text-on-primary px-6 py-2 text-xs font-bold tracking-widest uppercase">Join Discussion</button>
              </div>
            </div>

            {/* Forum Row 3 */}
            <div className="bg-surface-container-lowest group hover:bg-white transition-all p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary-container text-2xl">forest</span>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-primary group-hover:text-tertiary-container transition-colors">Autonomous re-forestation drones: A field report</h4>
                  <p className="text-xs text-stone-500 mt-1 uppercase tracking-widest font-bold">114 Active Participants • 29 New Insights</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="hidden lg:flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-stone-200 overflow-hidden">
                    <img alt="User Avatar" className="w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDJNhl1vXDxDHtF5cSDY9D72e66RYUB2p2QEi_3t_22zBQQ2S-sHbP2VVjd78OBBVH8YasnV0lJqP6yPlPj0ZJjfs6GKsb6TDs_SEFKBzd_W6MvZ58VZH7oXV_WWm_az3C935hBlQe-BcSj8gMQZ2jFJ5EWPXX2GlJtEi9ROyg8Z0KzzYWJVBRbCHvUuHQXKM6XVUnPcCdv2tbqTAqF20vG9j5-q_MORYqeARlZJdNeB0Lwmnz9w8AsG816vYYLnipkhc-Qy08F_-U"/>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-stone-200 overflow-hidden">
                    <img alt="User Avatar" className="w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChk-hewFDV7k6WZNDZXNJuyfAIEwFtpK_sck1D8IJQ1PxjRTNxMlibPJqm5lgraZgV2Gnn3ZInmBwBMDRtMptRNHcUK1Is7guAmMbozf4__bOKI2lqI9AFbgfcnTBNHquEEii9uw2YlqIcYv4mOXxtAoMMWB00rWWUdGB6mNSHyGjLfatevu-QPrl_3Nlypx6oajtAPoKe4RH6UiyNatUuviyhQPoIdMzDrTTE0T6QsjAK3YLvEq1vTMdiohhVMhhf7wx9p6U7LLdR"/>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-stone-300 flex items-center justify-center text-[10px] font-bold">+42</div>
                </div>
                <button className="bg-primary text-on-primary px-6 py-2 text-xs font-bold tracking-widest uppercase">Join Discussion</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Block */}
      <section className="py-32 px-8 overflow-hidden" id="mission">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <div className="aspect-square bg-surface-container-low p-12">
              <img 
                className="w-full h-full object-cover shadow-2xl" 
                alt="close-up of a scientist's hand" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMuFgCl_1mrW9x0c8qH1jagnqqMmJZpJiIw__8uscwDzOW7OIyRiblT2kwm00-JKylKwys0Us1lPP_cDQXNwGhnFNHBH-AncfI2cVLilvCCXnkjsBE29pVsUEvIOzEC1z4n88ZegfY4WOvnhz-56-5Rjw5NXFYtu270I5wtechi0G0qGZjlNoQ1w6iOyUliJmTVchrZZZqXZK46kahM6EuhGjhnBGfCz_TAapmb40sAK5kOd_bFYONzspP3RZzf7zUjRaNsNGP3u10"
              />
            </div>
            {/* Artistic element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-8 border-tertiary-fixed-dim/20 z-[-1] hidden md:block"></div>
          </div>
          
          <div className="lg:w-1/2">
            <span className="text-tertiary-fixed-dim font-bold tracking-[0.2em] text-xs uppercase mb-6 block">Our Core Ethos</span>
            <h2 className="font-serif text-6xl text-primary mb-8 leading-[1.1]">Preserving the unseen pulse of our planet.</h2>
            <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-10">
              BioInvisia was founded on the belief that the most critical ecological data often exists at the margins—in the microorganisms, the quiet migratory shifts, and the fragile balances that modern industrialization overlooks. We provide the tools, the network, and the archival prestige to bring these vital truths to light.
            </p>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <h5 className="font-serif text-3xl text-primary mb-2 italic">12k+</h5>
                <p className="text-xs uppercase font-bold text-stone-500 tracking-widest">Archived Studies</p>
              </div>
              <div>
                <h5 className="font-serif text-3xl text-primary mb-2 italic">85%</h5>
                <p className="text-xs uppercase font-bold text-stone-500 tracking-widest">Conservation ROI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-5xl text-on-primary mb-10 italic">Begin your contribution to global heritage.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link className="bg-tertiary-fixed text-on-tertiary-fixed font-bold px-12 py-5 tracking-tight hover:brightness-110 transition-all flex items-center justify-center" to="/signup">Register as Researcher</Link>
            <button className="bg-white/10 text-white font-bold px-12 py-5 tracking-tight border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
              Support Our Mission
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-stone-200/50 bg-stone-100">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto gap-6">
          <div className="font-serif text-lg text-emerald-900">BioInvisia</div>
          <div className="flex gap-10 font-sans text-sm tracking-wide text-stone-500">
            <a className="hover:text-emerald-800 underline decoration-amber-400/30 transition-all" href="#">Archives</a>
            <a className="hover:text-emerald-800 underline decoration-amber-400/30 transition-all" href="#">Ethics Statement</a>
            <a className="hover:text-emerald-800 underline decoration-amber-400/30 transition-all" href="#">Contact</a>
            <a className="hover:text-emerald-800 underline decoration-amber-400/30 transition-all" href="#">Terms</a>
          </div>
          <div className="font-sans text-sm tracking-wide text-stone-500">
            © 2024 BioInvisia. Dedicated to the preservation of the unseen.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;