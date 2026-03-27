'use client'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0a192f]/80 border-b border-blue-500/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group relative">
              <img
                src="/logo/black-removebg-preview.png"
                alt="Nestbotics"
                className="h-32 w-auto object-contain transition-transform group-hover:scale-105 mix-blend-screen"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('logo-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <span id="logo-fallback" className="hidden text-3xl font-extrabold tracking-tight text-white transition-colors drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] ml-2">
                NEST<span className="text-blue-400">BOTICS</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'About Us', href: '/about' },
            ].map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`px-4 py-2 text-sm font-semibold transition-all rounded-full flex items-center gap-2 ${
                    isActive 
                      ? 'bg-blue-600/30 text-white border border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                      : 'text-blue-100 hover:text-white hover:bg-white/10 border border-transparent'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="flex h-2 w-2 relative ml-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                    </span>
                  )}
                </Link>
              );
            })}
            <div className="pl-4">
              <Link href="/contact" className={`px-6 py-2.5 rounded-md text-sm font-bold transition-all block hover:-translate-y-0.5 border ${
                pathname === '/contact'
                  ? 'bg-blue-500 text-white border-blue-300 shadow-[0_0_25px_rgba(59,130,246,0.8)]'
                  : 'bg-blue-600/90 backdrop-blur-sm text-white hover:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] border-blue-400/30'
              }`}>
                Get an Estimate
              </Link>
            </div>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-blue-300 focus:outline-none p-2 transition-colors relative z-50"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Snackbar */}
      <div 
        className={`md:hidden absolute w-full left-0 origin-top transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-[#0a192f]/95 backdrop-blur-2xl border-b border-blue-500/30 px-4 pt-6 pb-8 space-y-3 shadow-2xl">
          {[
            { name: 'Home', href: '/' },
            { name: 'Services', href: '/services' },
            { name: 'About Us', href: '/about' },
          ].map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-5 py-3 rounded-xl text-lg font-bold transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-blue-600/30 text-white border border-blue-400/40 shadow-sm'
                    : 'text-blue-100 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-400"></span>
                  </span>
                )}
              </Link>
            );
          })}
          <div className="pt-6 mt-6 border-t border-blue-500/20">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-4 rounded-xl text-lg font-bold bg-blue-600 text-white hover:bg-blue-500 shadow-lg border border-blue-400/30 transition-all hover:scale-[1.02]"
            >
              Get an Estimate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
