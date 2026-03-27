"use client";

import Image from 'next/image';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <div className="bg-[#0a192f] text-white py-24 lg:py-32 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20"></div>
         <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">Let's Talk Automation</h1>
            <p className="mt-6 text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
              We're ready to help you unlock the full potential of your system. Reach out to our nationwide team of robotic specialists.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex-grow -mt-20 relative z-20">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          
          <div className="bg-blue-600 text-white p-12 lg:w-5/12 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/images/contact_manufacturing.png" 
                alt="Manufacturing engineering" 
                fill 
                className="object-cover opacity-20 mix-blend-overlay transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-blue-600/90 mix-blend-multiply" />
            </div>
            
            <div className="relative z-10 mb-16">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                Whether exploring new robotic automation or seeking support with existing cells, Nestbotics provides expert, practical solutions.
              </p>
            </div>
            
            <div className="relative z-10 space-y-10">
                <div className="flex items-start">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl mr-5 shrink-0 border border-white/20">
                    <svg className="w-7 h-7 text-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-blue-200 uppercase tracking-widest mb-1">Headquarters</h3>
                    <p className="text-xl font-bold">Nestbotics LLC.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl mr-5 shrink-0 border border-white/20">
                    <svg className="w-7 h-7 text-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-blue-200 uppercase tracking-widest mb-1">Coverage Area</h3>
                    <p className="text-xl font-bold">Available Nationwide</p>
                  </div>
                </div>
              </div>
          </div>
          
          <div className="p-12 lg:w-7/12 bg-white flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Send Us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('This is a demo contact form for Nestbotics.'); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">First Name</label>
                  <input type="text" id="firstName" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
                <input type="email" id="email" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="john@company.com" />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Company Name <span className="text-slate-400 font-normal normal-case">(Optional)</span></label>
                <input type="text" id="company" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="Acme Manufacturing" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">How can we help you?</label>
                <textarea id="message" rows={5} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all resize-none bg-slate-50 focus:bg-white text-slate-900" placeholder="Tell us about your automation goals..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-8 rounded-xl transition-all shadow-[0_10px_20px_-10px_rgba(37,99,235,0.6)] hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.8)] hover:-translate-y-1 mt-4 text-lg">
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}
