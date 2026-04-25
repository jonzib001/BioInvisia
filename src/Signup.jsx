import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  // State to track which account type is selected
  const [accountType, setAccountType] = useState('researcher');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleRegistration = (e) => {
    e.preventDefault();
    // In the future, this is where you will send data to FastAPI/Postgres
    // For now, we simulate success and redirect based on the role
    if (accountType === 'researcher') {
      navigate('/researcher-dashboard');
    } else {
      navigate('/user-dashboard');
    }
  };

  return (
    <div className="bg-surface font-sans text-on-surface selection:bg-tertiary-fixed-dim selection:text-tertiary min-h-screen flex flex-col">
      {/* TopNavBar */}
      <header className="bg-surface fixed top-0 left-0 right-0 z-50">
        <nav className="flex justify-between items-center w-full px-12 py-6 max-w-screen-2xl mx-auto">
          <div className="text-2xl font-bold font-serif text-primary tracking-tight">
            BioInvisia
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link className="font-serif italic text-lg text-primary/60 hover:text-tertiary-fixed-dim transition-colors duration-300" to="/">Research</Link>
            <Link className="font-serif italic text-lg text-primary/60 hover:text-tertiary-fixed-dim transition-colors duration-300" to="/">Conservation</Link>
            <Link className="font-serif italic text-lg text-primary/60 hover:text-tertiary-fixed-dim transition-colors duration-300" to="/">Community</Link>
            <Link className="font-serif italic text-lg text-primary/60 hover:text-tertiary-fixed-dim transition-colors duration-300" to="/">Archive</Link>
          </div>
          <div className="flex items-center gap-6">
            <Link className="font-serif italic text-lg text-primary hover:text-tertiary-fixed-dim transition-colors duration-300" to="/login">
              Sign In
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Registration Canvas */}
      <main className="flex-grow relative flex items-center justify-center pt-32 pb-12 px-6 overflow-hidden">
        {/* Botanical Accents & Blur */}
        <div 
          className="absolute inset-0 pointer-events-none bg-cover bg-center blur-[80px] opacity-15 z-0"
          style={{ backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBqSoDDanBWt3mM7_mAJ94feD6WKVesLfXGJrTSPpiO3aPJ2vxWonri21tgpBcXcOksmKolAjM9KWOL_wjGAoEFTGslFeQhmmPV4cpMcr7I00QcvUdB-3xFps0ZxI9vjdjf1AOWOikhuIKecyJ0bdEpyz9igadG5TGlPYXL8rZUDkL4b0QnVBVi8i2jExbXLjT8x8pe0-ypM8n7l53nugev1MYd06EJZODgT4Gp5FMqq2aasKYDFwb1YlrzWq_M850pHswM28SHx5u1)' }}
        ></div>

        <div className="relative z-10 w-full max-w-xl">
          {/* Asymmetric Editorial Header */}
          <div className="mb-10 text-center md:text-left px-4">
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-tertiary-fixed-dim mb-4 block">Institutional Access</span>
            <h1 className="font-serif text-5xl md:text-6xl text-primary italic leading-tight">
              Begin your <br className="hidden md:block"/>field notes.
            </h1>
          </div>

          {/* Centralized Card */}
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-lg border-none shadow-[0px_12px_32px_rgba(26,28,27,0.06)] relative z-10">
            <form className="space-y-6" onSubmit={handleRegistration}>
              
              {/* Account Type Selector */}
              <div className="mb-8">
                <label className="block font-sans text-xs font-semibold tracking-wider text-tertiary-fixed-dim uppercase mb-3">I am joining as a:</label>
                <div className="flex gap-4 p-1 bg-surface-container-low rounded-md">
                  <button
                    type="button"
                    onClick={() => setAccountType('researcher')}
                    className={`flex-1 py-3 px-4 rounded-sm font-sans text-sm font-bold tracking-wide transition-all duration-300 ${accountType === 'researcher' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
                  >
                    Researcher
                  </button>
                  <button
                    type="button"
                    onClick={() => setAccountType('user')}
                    className={`flex-1 py-3 px-4 rounded-sm font-sans text-sm font-bold tracking-wide transition-all duration-300 ${accountType === 'user' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-primary'}`}
                  >
                    Community Member
                  </button>
                </div>
              </div>

              {/* Name Field */}
              <div className="group relative">
                <label className="block font-sans text-xs font-semibold tracking-wider text-tertiary-fixed-dim uppercase mb-2">Full Name</label>
                <input 
                  className="w-full bg-surface-container-highest border-none rounded-md px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-0 focus:bg-surface-container-high transition-colors outline-none" 
                  placeholder="Dr. Julian Vane" 
                  type="text"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Username Field */}
                <div className="group relative">
                  <label className="block font-sans text-xs font-semibold tracking-wider text-tertiary-fixed-dim uppercase mb-2">Username</label>
                  <input 
                    className="w-full bg-surface-container-highest border-none rounded-md px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-0 focus:bg-surface-container-high transition-colors outline-none" 
                    placeholder="jvane_field" 
                    type="text"
                    required
                  />
                </div>

                {/* Email Field - Label changes based on account type! */}
                <div className="group relative">
                  <label className="block font-sans text-xs font-semibold tracking-wider text-tertiary-fixed-dim uppercase mb-2">
                    {accountType === 'researcher' ? 'Institutional Email' : 'Email Address'}
                  </label>
                  <input 
                    className="w-full bg-surface-container-highest border-none rounded-md px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-0 focus:bg-surface-container-high transition-colors outline-none" 
                    placeholder={accountType === 'researcher' ? "research@bioinvisia.org" : "name@example.com"} 
                    type="email"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="group relative">
                <label className="block font-sans text-xs font-semibold tracking-wider text-tertiary-fixed-dim uppercase mb-2">Password</label>
                <input 
                  className="w-full bg-surface-container-highest border-none rounded-md px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-0 focus:bg-surface-container-high transition-colors outline-none" 
                  placeholder="••••••••••••" 
                  type="password"
                  required
                />
              </div>

              <div className="pt-6 flex flex-col items-center gap-6">
                {/* Primary Button */}
                <button 
                  className="w-full py-5 bg-primary text-on-primary font-sans font-bold text-sm tracking-widest uppercase rounded hover:bg-primary-container transition-all duration-300 scale-100 active:scale-95 shadow-lg shadow-primary/10 flex items-center justify-center outline-none" 
                  type="submit"
                >
                  Complete Registration
                </button>

                {/* Sign In Link */}
                <p className="font-sans text-sm text-on-surface-variant">
                  Already have an account?{' '}
                  <Link className="text-primary font-bold hover:text-tertiary-container underline-offset-4 underline transition-colors" to="/login">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>

          {/* Asymmetric Specimen Card Decor */}
          <div className="hidden lg:block absolute -right-24 top-1/2 -translate-y-1/2 w-48 z-20 pointer-events-none">
            <div className="bg-surface-container-lowest p-2 rounded-sm shadow-sm rotate-3">
              <img 
                alt="macro photograph of a specimen" 
                className="w-full aspect-[3/4] object-cover rounded-sm mb-2 opacity-90" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABNjFH8UJX947YxLKQ0O92LkKQOYJTlOECAIY6sdSpPXmkRPWu1snwqC2BrFSMd7IQly381PuO44L5D-vLYAz2QfQUGuiWrmmnQaNpim-7BSesQptQALZB-6b0vB0POm7KeD_SOizi82gHuIvFtbxmV65Zd4209uxo8dgG1uloIFpImsfqMpFVD5XSbRKiwK8UuAgdYR3MqU7D5rWtIYs_Q-DJoSfkFds0P3ljEm_ws__S00daOZtV9CahhvrQNSDy_gMF6JWVV6rI"
              />
              <span className="block font-sans text-[10px] text-tertiary-fixed-dim text-center uppercase tracking-tighter">Specimen No. 812</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low z-10">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-12 gap-8 max-w-screen-2xl mx-auto">
          <div className="text-xl font-serif italic text-primary">
            BioInvisia
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <Link className="font-sans text-sm tracking-wide uppercase text-primary/50 hover:text-tertiary-fixed-dim underline-offset-4 underline transition-opacity opacity-80" to="#">Ethics Statement</Link>
            <Link className="font-sans text-sm tracking-wide uppercase text-primary/50 hover:text-tertiary-fixed-dim underline-offset-4 underline transition-opacity opacity-80" to="#">Manuscript Guidelines</Link>
            <Link className="font-sans text-sm tracking-wide uppercase text-primary/50 hover:text-tertiary-fixed-dim underline-offset-4 underline transition-opacity opacity-80" to="#">Privacy</Link>
            <Link className="font-sans text-sm tracking-wide uppercase text-primary/50 hover:text-tertiary-fixed-dim underline-offset-4 underline transition-opacity opacity-80" to="#">Institutional Access</Link>
          </div>
          <p className="font-sans text-sm tracking-wide uppercase text-primary/50">
            © 2024 BioInvisia Botanical Research. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Signup;