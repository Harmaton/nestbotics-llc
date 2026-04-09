'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-white mt-auto border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/logo/logo.png"
                alt="Nestbotics"
                className="h-20 w-auto object-contain mix-blend-screen"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('footer-logo-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <span id="footer-logo-fallback" className="hidden text-3xl font-bold tracking-tight text-white">
                Nest<span className="text-blue-500">botics</span>
              </span>
            </Link>
            <p className="text-slate-300 text-sm max-w-md leading-relaxed">
              Automation Without Complexity. We provide robotic welding integration, programming, and automation support to manufacturers looking to improve productivity, consistency, and efficiency.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white tracking-wide">Company</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white tracking-wide">Connect</h3>
            <div className="space-y-4 text-sm text-slate-400 mb-6">
              <p>Services available nationwide.</p>
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:info@nestboticsllc.com" className="hover:text-blue-400 transition-colors">info@nestboticsllc.com</a>
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+18155828488" className="hover:text-blue-400 transition-colors">+1 (815) 582-8488</a>
              </p>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white rounded-md transition-all text-sm font-medium hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              Contact Us Today
            </Link>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Nestbotics LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
