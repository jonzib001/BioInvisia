import React from 'react';
import { Link } from 'react-router-dom';

function UserDashboard() {
  // Placeholder data that will eventually be fetched via FastAPI
  const currentUsername = "Jango jz";

  return (
    <div className="bg-surface text-on-background font-sans selection:bg-tertiary-fixed-dim selection:text-primary min-h-screen flex flex-col">
      {/* TopNavBar */}
      <nav className="bg-surface sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-12 h-20 max-w-screen-2xl mx-auto">
          <Link className="text-2xl font-serif text-primary italic tracking-tight" to="/">
            BioInvisia
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link className="text-on-surface-variant font-normal hover:text-primary transition-colors duration-300" to="#">
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

      <main className="flex-grow">
        {/* Hero / Welcome Header */}
        <header className="max-w-screen-2xl mx-auto px-12 pt-16 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <span className="text-tertiary-fixed-dim font-sans font-bold tracking-widest text-xs uppercase mb-4 block">
                Community Access Terminal
              </span>
              <h1 className="font-serif text-5xl md:text-7xl italic text-primary leading-tight">
                Welcome back, <span className="text-primary font-bold non-italic">{currentUsername}</span>
              </h1>
              <p className="mt-6 text-lg text-on-surface-variant max-w-lg font-sans leading-relaxed">
                Accessing the BioInvisia community archives. Stay updated on the latest global conservation efforts, review field notes, and engage with our network of researchers.
              </p>
            </div>
            
            {/* Smooth Scroll Anchor Link */}
            <div className="flex gap-2">
              <a href="#trending-reports" className="bg-primary text-on-primary px-6 py-3 rounded font-sans font-semibold text-sm hover:opacity-90 transition-opacity outline-none inline-flex items-center gap-2 cursor-pointer">
                Join Discussions <span className="material-symbols-outlined text-sm">forum</span>
              </a>
            </div>
          </div>
        </header>

        {/* Community Dashboard Content */}
        <section className="max-w-screen-2xl mx-auto px-12 mt-12 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Column: Trending Forum Activity */}
            <div id="trending-reports" className="md:col-span-8 space-y-8 scroll-mt-28">
              <h2 className="font-serif text-3xl italic text-primary mb-6">Trending Field Reports</h2>
              
              {/* Article 1 */}
              <article className="bg-surface-container-lowest p-8 rounded shadow-[0px_12px_32px_rgba(26,28,27,0.04)] group transition-all duration-500 hover:shadow-[0px_12px_32px_rgba(26,28,27,0.08)]">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-tertiary-fixed-dim font-sans text-[10px] font-extrabold tracking-widest uppercase">
                    Methodology
                  </span>
                  <span className="text-on-surface-variant font-sans text-xs">Updated 2h ago</span>
                </div>
                <h3 className="font-serif text-2xl text-primary mb-3">Autonomous re-forestation drones: A field report</h3>
                <p className="font-sans text-on-surface-variant text-sm leading-relaxed mb-6">
                  We deployed the Mk-IV seed-dispersal drones over a 50-hectare burn scar. Seedling survival rates are currently tracking at 62%...
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-[#c2c8c0]/20 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
                      <span className="material-symbols-outlined text-on-surface-variant mt-1 ml-1 text-xl">person</span>
                    </div>
                    <span className="font-sans text-sm font-semibold text-primary">Julian Vane</span>
                  </div>
                  
                  <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="flex gap-4">
                      <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-sans text-xs font-bold uppercase tracking-widest outline-none">
                        <span className="material-symbols-outlined text-base">favorite</span> 142
                      </button>
                      <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-sans text-xs font-bold uppercase tracking-widest outline-none">
                        <span className="material-symbols-outlined text-base">chat_bubble</span> 42
                      </button>
                    </div>
                    <Link to="/ThreadDetail" className="text-primary font-sans font-bold text-xs tracking-widest uppercase hover:text-tertiary-container transition-colors">
                      Read & Reply
                    </Link>
                  </div>
                </div>
              </article>

              {/* Article 2 */}
               <article className="bg-surface-container-lowest p-8 rounded shadow-[0px_12px_32px_rgba(26,28,27,0.04)] group transition-all duration-500 hover:shadow-[0px_12px_32px_rgba(26,28,27,0.08)]">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-tertiary-fixed-dim font-sans text-[10px] font-extrabold tracking-widest uppercase">
                    Field Reports
                  </span>
                  <span className="text-on-surface-variant font-sans text-xs">Updated 5h ago</span>
                </div>
                <h3 className="font-serif text-2xl text-primary mb-3">Micro-plastic tracing in Amazonian tributaries</h3>
                <p className="font-sans text-on-surface-variant text-sm leading-relaxed mb-6">
                  Initial findings from the Q3 expedition show a 15% increase in micro-plastic saturation upstream from previously untouched tributaries...
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-[#c2c8c0]/20 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
                      <span className="material-symbols-outlined text-on-surface-variant mt-1 ml-1 text-xl">person</span>
                    </div>
                    <span className="font-sans text-sm font-semibold text-primary">Elena Rostova</span>
                  </div>

                  <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="flex gap-4">
                      <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-sans text-xs font-bold uppercase tracking-widest outline-none">
                        <span className="material-symbols-outlined text-base">favorite</span> 89
                      </button>
                      <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-sans text-xs font-bold uppercase tracking-widest outline-none">
                        <span className="material-symbols-outlined text-base">chat_bubble</span> 8
                      </button>
                    </div>
                    <Link to="/forum" className="text-primary font-sans font-bold text-xs tracking-widest uppercase hover:text-tertiary-container transition-colors">
                      Read & Reply
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* Right Column: Curated Discoveries */}
            <div className="md:col-span-4 space-y-6">
              <h2 className="font-serif text-3xl italic text-primary mb-6">Recent Catalog Additions</h2>
              
              <div className="bg-surface-container-lowest p-4 rounded group hover:shadow-lg transition-shadow cursor-pointer border-l-2 border-tertiary-fixed-dim">
                <div className="flex gap-4">
                  <div className="w-20 h-24 shrink-0 overflow-hidden rounded-sm">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      alt="Snow Leopard" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWpTNGAQD6wEm7-NoYgyP-dqj64TSzdJSyJKiUdokL6MGNciZ4qEinmeedlMJNYPT-Hx-a5_7J5jX7NodkViYdLMdm4P3Ik5hQEOiN3auLKAiXltR43Lmk1CKsZE3seN2LltASK2x1YAVOx-ttE-_13XOV0f9wIMoWLqdOBZU4eHOEco1oY11QEeuY9tuws695pE9jIa4PxlkYT3JRuKocdVKdfmFZY_9jPQQ2u7oxYgJ8vhleH5Qq_IvU4eEt3xVRns19AQQWDN_O" 
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-tertiary-fixed-dim font-sans text-[9px] font-extrabold tracking-widest uppercase mb-1">Vulnerable</span>
                    <h4 className="font-serif text-lg text-primary italic mb-1">Snow Leopard</h4>
                    <p className="font-sans text-xs text-on-surface-variant">Spiti Valley, India</p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-4 rounded group hover:shadow-lg transition-shadow cursor-pointer border-l-2 border-tertiary-fixed-dim">
                <div className="flex gap-4">
                  <div className="w-20 h-24 shrink-0 overflow-hidden rounded-sm">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      alt="Iberian Lynx" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvlMF8UmDNgBWRgb0L1FspYtp9EU1xlnJUz3w1Sw7w32akOtY9AkqYbkQR-1_PVx0xvK7ubMEI-1FGjOOGG-Z92aFGM4moN_IUv_AEU5WCU5IRrhfexRexRWaEXr9R-C0_3yZ1YPhHlHdNIwC-NPBO0AWfLQrA79Spb4_xMrcGXzVm5_BliPJqwH2sB7llJwDNAma9qetddXEvhO_Qb12g3srINB671cIm1mF3AZNN3CZYeexeUmIjRxmeswG5ZqezYMEzA_lUX7IP" 
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-tertiary-fixed-dim font-sans text-[9px] font-extrabold tracking-widest uppercase mb-1">Endangered</span>
                    <h4 className="font-serif text-lg text-primary italic mb-1">Iberian Lynx</h4>
                    <p className="font-sans text-xs text-on-surface-variant">Andalusia, Spain</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-[#e8e8e6] rounded">
                <p className="font-serif italic text-primary text-xl mb-2">Want to contribute data?</p>
                <p className="font-sans text-sm text-on-surface-variant mb-4">Users with verified academic credentials can upgrade their access tier.</p>
                <button className="text-primary font-sans text-xs font-bold uppercase tracking-widest border-b border-primary pb-0.5 hover:text-tertiary-container transition-colors outline-none">
                  Apply for Research Access
                </button>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f1f1ef] py-16">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-screen-2xl mx-auto gap-8">
          <div className="font-serif text-lg italic text-primary">BioInvisia</div>
          <div className="flex gap-12 font-sans text-sm tracking-wide">
            <Link className="text-stone-500 hover:text-tertiary-fixed-dim transition-colors duration-200" to="#">Community Guidelines</Link>
            <Link className="text-stone-500 hover:text-tertiary-fixed-dim transition-colors duration-200" to="#">Privacy</Link>
            <Link className="text-stone-500 hover:text-tertiary-fixed-dim transition-colors duration-200" to="#">Contact Support</Link>
          </div>
          <div className="font-sans text-sm tracking-wide text-stone-500 opacity-100 hover:opacity-80 transition-opacity">
            © 2024 BioInvisia Research Collective. All rights preserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default UserDashboard;