'use client'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0a192f]/80 border-b border-blue-500/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group relative">
              <img
                src="/logo/black.jpeg"
                alt="Nestbotics"
                className="h-24 w-auto object-contain transition-transform group-hover:scale-105 mix-blend-screen"
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
                      ? 'bg-blue-600/20 text-white border border-blue-400/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]' 
                      : 'text-blue-100 hover:text-white hover:bg-white/5 border border-transparent'
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
        </div>
      </div>
    </nav>
  );
}
