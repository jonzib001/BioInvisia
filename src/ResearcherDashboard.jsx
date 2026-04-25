import React from 'react';
import { Link } from 'react-router-dom';

function ResearcherDashboard() {
  return (
    <div className="bg-background text-on-background font-sans selection:bg-tertiary-fixed-dim selection:text-primary min-h-screen flex flex-col">
      {/* TopNavBar */}
      <nav className="bg-surface sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-12 h-20 max-w-screen-2xl mx-auto">
          <Link className="text-2xl font-serif text-primary italic tracking-tight" to="/">
            BioInvisia
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link className="text-primary border-b-2 border-tertiary-fixed-dim font-semibold transition-colors duration-300" to="#">
              Catalog
            </Link>
            <Link className="text-on-surface-variant font-normal hover:text-primary transition-colors duration-300" to="/Forum">
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
        {/* Hero / Welcome Header */}
        <header className="max-w-screen-2xl mx-auto px-12 pt-16 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <span className="text-tertiary-fixed-dim font-sans font-bold tracking-widest text-xs uppercase mb-4 block">
                Field Access Terminal
              </span>
              <h1 className="font-serif text-5xl md:text-7xl italic text-primary leading-tight">
                Welcome back, <span className="text-primary font-bold non-italic">Researcher</span>
              </h1>
              <p className="mt-6 text-lg text-on-surface-variant max-w-lg font-sans leading-relaxed">
                Accessing the collective archives of the BioInvisia Research Collective. Your curated observations and the global species catalog are now synchronized.
              </p>
            </div>
            <div className="flex gap-2">
              <Link to="/NewObservation" className="bg-primary text-on-primary px-6 py-3 rounded font-sans font-semibold text-sm hover:opacity-90 transition-opacity inline-block text-center">
              New Observation
</Link>
            </div>
          </div>
        </header>

        {/* Species Archive - Horizontal Scroll */}
        <section className="mt-12">
          <div className="max-w-screen-2xl mx-auto px-12 mb-8 flex justify-between items-center">
            <h2 className="font-serif text-3xl italic text-primary">Species Archive</h2>
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e8e8e6] text-primary hover:bg-tertiary-fixed-dim transition-colors group">
                <span className="material-symbols-outlined group-active:scale-90 transition-transform">chevron_left</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e8e8e6] text-primary hover:bg-tertiary-fixed-dim transition-colors group">
                <span className="material-symbols-outlined group-active:scale-90 transition-transform">chevron_right</span>
              </button>
            </div>
          </div>
          
          <div className="flex overflow-x-auto gap-8 px-12 pb-12 snap-x [&::-webkit-scrollbar]:h-[3px] [&::-webkit-scrollbar-track]:bg-[#f4f4f2] [&::-webkit-scrollbar-thumb]:bg-[#e9c176]">
            
            {/* Card 1: Iberian Lynx */}
            <div className="flex-none w-[400px] snap-start">
              <div className="bg-surface-container-lowest p-5 group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                <div className="relative overflow-hidden aspect-[4/5] mb-6">
                  <img 
                    className="w-full h-full object-cover rounded-sm transition-transform duration-700 group-hover:scale-105" 
                    alt="Close-up photograph of an Iberian Lynx with distinctive ear tufts and spotted fur sitting alert in a Mediterranean scrubland" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvlMF8UmDNgBWRgb0L1FspYtp9EU1xlnJUz3w1Sw7w32akOtY9AkqYbkQR-1_PVx0xvK7ubMEI-1FGjOOGG-Z92aFGM4moN_IUv_AEU5WCU5IRrhfexRexRWaEXr9R-C0_3yZ1YPhHlHdNIwC-NPBO0AWfLQrA79Spb4_xMrcGXzVm5_BliPJqwH2sB7llJwDNAma9qetddXEvhO_Qb12g3srINB671cIm1mF3AZNN3CZYeexeUmIjRxmeswG5ZqezYMEzA_lUX7IP"
                  />
                  <div className="absolute top-4 right-4 bg-tertiary-container text-tertiary-fixed px-3 py-1 text-[10px] font-bold tracking-tighter uppercase rounded-sm">
                    Endangered
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-2 italic">Iberian Lynx</h3>
                <p className="text-tertiary-fixed-dim font-sans text-[10px] font-extrabold tracking-widest uppercase mb-3">Lynx pardinus</p>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-sans">
                  Endemic to the Iberian Peninsula, these majestic predators favor Mediterranean scrubland. Extensive conservation efforts have stabilized populations in Andalusia.
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-[#c2c8c0]/10">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-sm">location_on</span>
                  <span className="text-[11px] font-bold text-on-surface-variant font-sans">Sierra de Andújar, Spain</span>
                </div>
              </div>
            </div>

            {/* Card 2: Amur Leopard */}
            <div className="flex-none w-[400px] snap-start">
              <div className="bg-surface-container-lowest p-5 group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                <div className="relative overflow-hidden aspect-[4/5] mb-6">
                  <img 
                    className="w-full h-full object-cover rounded-sm transition-transform duration-700 group-hover:scale-105" 
                    alt="A rare Amur Leopard with striking thick fur and large spots prowling through a temperate forest with autumn foliage" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6QZekAgZx_RCQq34D2tiAIjlFLIp_wBUfuctgsb3stzwvbL2ps8G1Kj9z01gN8vsjniMpevZ8Ju5dlfFxlV7EyzSEGpEG2-5O1KU5lX4fnxeP8Wy1P15WNIEJsCnO3vkonUSozV6r6HrJTA91JypYulnyxG3ybzBsEJAB91FZUcubFWQbqCcSkc_n6SS7kT-H8Z-zDs6x3dUZJMNhHUw1GGBaEPAaq9jt3P8pkup4hjomPoPnnRBLdEaE5ZvY9MkStL62lhyKcpqr"
                  />
                  <div className="absolute top-4 right-4 bg-[#ba1a1a] text-white px-3 py-1 text-[10px] font-bold tracking-tighter uppercase rounded-sm">
                    Critically Endangered
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-2 italic">Amur Leopard</h3>
                <p className="text-tertiary-fixed-dim font-sans text-[10px] font-extrabold tracking-widest uppercase mb-3">Panthera pardus orientalis</p>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-sans">
                  The world's rarest big cat, adapted to the temperate forests of the Russian Far East and Northeast China. Fewer than 100 remain in the wild.
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-[#c2c8c0]/10">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-sm">location_on</span>
                  <span className="text-[11px] font-bold text-on-surface-variant font-sans">Primorsky Krai, Russia</span>
                </div>
              </div>
            </div>

            {/* Card 3: Snow Leopard */}
            <div className="flex-none w-[400px] snap-start">
              <div className="bg-surface-container-lowest p-5 group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                <div className="relative overflow-hidden aspect-[4/5] mb-6">
                  <img 
                    className="w-full h-full object-cover rounded-sm transition-transform duration-700 group-hover:scale-105" 
                    alt="A ghost-like Snow Leopard camouflaged against rugged gray Himalayan cliffs with a dusting of fresh snow" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWpTNGAQD6wEm7-NoYgyP-dqj64TSzdJSyJKiUdokL6MGNciZ4qEinmeedlMJNYPT-Hx-a5_7J5jX7NodkViYdLMdm4P3Ik5hQEOiN3auLKAiXltR43Lmk1CKsZE3seN2LltASK2x1YAVOx-ttE-_13XOV0f9wIMoWLqdOBZU4eHOEco1oY11QEeuY9tuws695pE9jIa4PxlkYT3JRuKocdVKdfmFZY_9jPQQ2u7oxYgJ8vhleH5Qq_IvU4eEt3xVRns19AQQWDN_O"
                  />
                  <div className="absolute top-4 right-4 bg-tertiary-container text-tertiary-fixed px-3 py-1 text-[10px] font-bold tracking-tighter uppercase rounded-sm">
                    Vulnerable
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-2 italic">Snow Leopard</h3>
                <p className="text-tertiary-fixed-dim font-sans text-[10px] font-extrabold tracking-widest uppercase mb-3">Panthera uncia</p>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-sans">
                  Known as the "Ghost of the Mountains," these elusive cats roam the high-altitude ranges of Central Asia. Habitat loss remains their primary threat.
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-[#c2c8c0]/10">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-sm">location_on</span>
                  <span className="text-[11px] font-bold text-on-surface-variant font-sans">Spiti Valley, India</span>
                </div>
              </div>
            </div>

            {/* Card 4: Philippine Eagle */}
            <div className="flex-none w-[400px] snap-start">
              <div className="bg-surface-container-lowest p-5 group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                <div className="relative overflow-hidden aspect-[4/5] mb-6">
                  <img 
                    className="w-full h-full object-cover rounded-sm transition-transform duration-700 group-hover:scale-105" 
                    alt="Portrait of a Philippine Eagle with its iconic shaggy crest of feathers and intense blue-gray eyes against a deep jungle background" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCWiTgkuZpR9UlzxzMqHgb0XL4HpAGgS79TcM_TShLKJiIPYMs6E6TCNBcJ7QB0ekmG4QHp59avCUKUUyt6QyNBzEyAwPqWT2tUiQbb2ngSPiQli9TbPbggIvximfNHSc1_6c1OpXXkXqs-UF81lV7nwdEMN3fMhP1850C0NPUEt9XajLd5jM5NHaHdNTJ4XuQs0Kycs_U6cxX6XIehglqF-Ut2sHVbvHgGcfLtqh9kHMp_caZYAZGdXYdVVmBB9hu746vFiTfxhTy"
                  />
                  <div className="absolute top-4 right-4 bg-[#ba1a1a] text-white px-3 py-1 text-[10px] font-bold tracking-tighter uppercase rounded-sm">
                    Critically Endangered
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-2 italic">Philippine Eagle</h3>
                <p className="text-tertiary-fixed-dim font-sans text-[10px] font-extrabold tracking-widest uppercase mb-3">Pithecophaga jefferyi</p>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-sans">
                  One of the world's largest and most powerful forest raptors, it is found only in the Philippine archipelago. Deforestation is its greatest challenge.
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-[#c2c8c0]/10">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-sm">location_on</span>
                  <span className="text-[11px] font-bold text-on-surface-variant font-sans">Mount Apo, Philippines</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Bento Grid: Secondary Content */}
        <section className="max-w-screen-2xl mx-auto px-12 mt-24 mb-12">
          <h2 className="font-serif text-3xl italic text-primary mb-12">Research Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Large Feature */}
            <div className="md:col-span-2 md:row-span-2 bg-primary text-on-primary p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="z-10">
                <span className="text-tertiary-fixed-dim font-sans text-xs font-bold tracking-widest uppercase mb-6 block">Featured Journal</span>
                <h3 className="font-serif text-4xl italic mb-6">The Micro-Habitats of Alpine Moss</h3>
                <p className="text-on-primary-container leading-relaxed mb-8">
                  A deep dive into the hidden ecosystems thriving within the high-altitude flora of the Swiss Alps.
                </p>
                <button className="flex items-center gap-2 group text-tertiary-fixed hover:text-white transition-colors">
                  <span className="font-sans font-bold text-sm tracking-wider">READ ARTICLE</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-10 -right-10 opacity-10 scale-150 rotate-12">
                <span className="material-symbols-outlined text-[300px]">potted_plant</span>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-surface-container-low p-8 flex flex-col justify-center">
              <p className="text-primary font-serif text-5xl mb-2 italic">12,402</p>
              <p className="text-on-surface-variant font-sans text-[10px] font-bold tracking-widest uppercase">Verified Sightings</p>
            </div>

            {/* Contribution Card */}
            <div className="bg-tertiary-container text-tertiary-fixed p-8 flex flex-col justify-center">
              <p className="text-3xl font-serif italic mb-4">Support Conservation</p>
              <p className="text-xs font-sans leading-relaxed opacity-80">Join the collective effort to protect these fragile habitats through direct research funding.</p>
            </div>

            {/* Recent Activity Card */}
            <Link className="md:col-span-2 bg-[#e2e3e1] p-8 block hover:bg-[#eeeeec] transition-colors" to="#">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-serif text-xl italic text-primary">Recent Archive Updates</h4>
                <span className="text-[10px] font-bold text-tertiary-fixed-dim font-sans">LAST 24 HOURS</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-sm">
                  <span className="text-sm font-sans text-primary font-semibold">New DNA Sequence: Amur Leopard</span>
                  <span className="text-[10px] text-on-surface-variant font-sans">12:45 PM</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-surface-container-lowest rounded-sm">
                  <span className="text-sm font-sans text-primary font-semibold">Field Report: Spiti Valley Survey</span>
                  <span className="text-[10px] text-on-surface-variant font-sans">09:12 AM</span>
                </div>
              </div>
            </Link>
            
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f1f1ef] mt-24 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-screen-2xl mx-auto gap-8">
          <div className="font-serif text-lg italic text-primary">BioInvisia</div>
          <div className="flex gap-12 font-sans text-sm tracking-wide">
            <Link className="text-stone-500 hover:text-tertiary-fixed-dim transition-colors duration-200" to="#">Ethics</Link>
            <Link className="text-stone-500 hover:text-tertiary-fixed-dim transition-colors duration-200" to="#">Privacy</Link>
            <Link className="text-stone-500 hover:text-tertiary-fixed-dim transition-colors duration-200" to="#">Methodology</Link>
            <Link className="text-stone-500 hover:text-tertiary-fixed-dim transition-colors duration-200" to="#">Contact</Link>
          </div>
          <div className="font-sans text-sm tracking-wide text-stone-500 opacity-100 hover:opacity-80 transition-opacity">
            © 2024 BioInvisia Research Collective. All rights preserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ResearcherDashboard;