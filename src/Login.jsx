import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-surface text-on-surface">
      {/* Subtle Background Element */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] bg-no-repeat bg-center bg-contain" 
        style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuCVnhZL-PtushWekcEd5KxgxzF_4mYuQU1MIWDmbwW0yBrP9cmvGNWbiDdthBVhz1XwBUmCu5swsJrFxzylLfRZ45jGM-tZo_QicXH1-WAPQHI5qB-HGADMNvRnao-t6iunWDi9uP0kIbXggO92b2G4c7DfaaLzKih0F5l7J14p1GkKc1sTRwt3_O6zNaA2GVKvDcmb17yd-8LjlfQcRlh9uePUEQsmL6Z02J5VGx4HxUva5S9ZycdDEE-jb-i9BCVvieOVkd-YQLvj)' }}
      ></div>
      
      <div className="flex-grow flex items-center justify-center px-6 py-12 relative z-10">
        <div className="w-full max-w-md">
          
          {/* Brand Anchor */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif italic font-bold text-primary tracking-tight">BioInvisia</h1>
            <p className="mt-4 font-sans text-sm uppercase tracking-[0.2em] text-tertiary-container">Botanical Research Portal</p>
          </div>
          
          {/* Login Card */}
          <div className="bg-surface-container-lowest p-10 shadow-[0px_12px_32px_rgba(26,28,27,0.04)] rounded-lg">
            <h2 className="font-serif text-2xl text-primary mb-8 text-center italic">Welcome back to the field</h2>
            
            <form className="space-y-6">
              <div className="group">
                <label className="block font-sans text-[10px] uppercase tracking-widest text-tertiary-fixed-dim mb-1 ml-1" htmlFor="email">
                  Email Address
                </label>
                <input 
                  className="w-full bg-surface-container-high border-none rounded-md px-4 py-3 text-on-surface focus:ring-1 focus:ring-tertiary-fixed-dim transition-all outline-none" 
                  id="email" 
                  name="email" 
                  placeholder="name@institution.org" 
                  type="email"
                />
              </div>
              
              <div className="group">
                <div className="flex justify-between items-end mb-1 ml-1">
                  <label className="block font-sans text-[10px] uppercase tracking-widest text-tertiary-fixed-dim" htmlFor="password">
                    Security Key
                  </label>
                  <a className="text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors" href="#">
                    Forgot?
                  </a>
                </div>
                <input 
                  className="w-full bg-surface-container-high border-none rounded-md px-4 py-3 text-on-surface focus:ring-1 focus:ring-tertiary-fixed-dim transition-all outline-none" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  type="password"
                />
              </div>
              
              <div className="pt-4">
                <button className="w-full block text-center bg-primary text-on-primary py-4 font-sans uppercase tracking-widest text-sm font-bold rounded-lg hover:bg-primary-container transition-all active:scale-95 duration-200" type="button">
                  Sign In
                </button>
              </div>
            </form>
            
            <div className="mt-10 pt-8 border-t border-surface-variant/30 text-center">
              <p className="text-on-surface-variant text-sm mb-2">New contributor?</p>
              <Link className="font-serif italic text-lg text-primary hover:text-tertiary-container transition-colors" to="/signup">
                Create an account
              </Link>
            </div>
          </div>
          
          {/* Auxiliary Action */}
          <div className="mt-8 text-center">
            <Link className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors" to="/">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Return to Archive
            </Link>
          </div>
        </div>
      </div>

      {/* Login Specific Footer */}
      <footer className="bg-surface-container-low flex flex-col md:flex-row justify-between items-center w-full px-12 py-12 gap-8 z-10">
        <div className="text-xl font-serif italic text-primary">BioInvisia</div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="font-sans text-sm tracking-wide uppercase text-primary/50 hover:text-tertiary-fixed-dim underline-offset-4 underline opacity-80 transition-opacity" href="#">Ethics Statement</a>
          <a className="font-sans text-sm tracking-wide uppercase text-primary/50 hover:text-tertiary-fixed-dim underline-offset-4 underline opacity-80 transition-opacity" href="#">Manuscript Guidelines</a>
          <a className="font-sans text-sm tracking-wide uppercase text-primary/50 hover:text-tertiary-fixed-dim underline-offset-4 underline opacity-80 transition-opacity" href="#">Privacy</a>
          <a className="font-sans text-sm tracking-wide uppercase text-primary/50 hover:text-tertiary-fixed-dim underline-offset-4 underline opacity-80 transition-opacity" href="#">Institutional Access</a>
        </div>
        <div className="font-sans text-sm tracking-wide uppercase text-primary/50">
          © 2024 BioInvisia Botanical Research. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

export default Login;