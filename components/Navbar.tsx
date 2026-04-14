'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'What We Do', href: '/services' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0a192f]/80 border-b border-blue-500/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group relative">
              <img
                src="/logo/logo.png"
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
          <div className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-5 py-2 text-sm font-semibold transition-all duration-200 rounded-lg overflow-hidden ${
                    isActive
                      ? 'text-white bg-white/8 border border-white/10'
                      : 'text-blue-200/75 hover:text-white hover:bg-white/6 border border-transparent'
                  }`}
                >
                  {/* Left accent bar — active page indicator */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-blue-400 rounded-r-full shadow-[0_0_8px_rgba(96,165,250,0.9)]" />
                  )}
                  {link.name}
                </Link>
              );
            })}

            {/* Divider + CTA */}
            <div className="pl-4 ml-2 border-l border-white/10">
              <Link
                href="/contact"
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all block hover:-translate-y-0.5 border ${
                  pathname === '/contact'
                    ? 'bg-blue-500 text-white border-blue-400/60 shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                    : 'bg-blue-500/20 text-blue-100 hover:bg-blue-500 hover:text-white border-blue-400/30 hover:border-blue-400/60 shadow-[0_0_12px_rgba(37,99,235,0.2)] hover:shadow-[0_0_22px_rgba(37,99,235,0.5)]'
                }`}
              >
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full left-0 origin-top transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-[#0a192f]/95 backdrop-blur-2xl border-b border-blue-500/30 px-4 pt-6 pb-8 space-y-2 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative flex items-center px-5 py-3 rounded-xl text-base font-bold transition-all overflow-hidden ${
                  isActive
                    ? 'bg-white/8 text-white border border-white/10'
                    : 'text-blue-200/75 hover:text-white hover:bg-white/6 border border-transparent'
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-blue-400 rounded-r-full shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                )}
                {link.name}
              </Link>
            );
          })}
          <div className="pt-5 mt-4 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-4 rounded-xl text-base font-bold bg-blue-500/20 text-blue-100 hover:bg-blue-500 hover:text-white border border-blue-400/30 transition-all shadow-lg"
            >
              Get an Estimate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}