import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-white mt-auto border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <span className="text-3xl font-bold tracking-tight text-white">
              Nest<span className="text-blue-500">botics</span>
            </span>
            <p className="mt-6 text-slate-300 text-sm max-w-md leading-relaxed">
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
            <p className="text-sm text-slate-400 mb-6">Services available nationwide.</p>
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
