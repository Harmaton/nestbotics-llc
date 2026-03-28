import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Hero ── */}
      <section className="relative text-white py-12 sm:py-32 lg:py-48 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_welding.png"
            alt="Robotic Welding Automation"
            fill
            className="object-cover opacity-200 mix-blend-screen"
            priority
          />
          {/* deeper multiply layer → richer navy */}
          <div className="absolute inset-0 bg-[#0a192f]/80 mix-blend-multiply" />
          {/* tighter gradient so the image shows more in the mid-section */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#0d2240]/50 to-[#0a192f] opacity-90" />
        </div>

        {/* ── Dot-grid pattern overlay (matches CTA sections) ── */}
        <div
          className="absolute inset-0 z-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle, #93c5fd 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />

        {/* Diagonal rule lines for industrial texture */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              #60a5fa 0px,
              #60a5fa 1px,
              transparent 1px,
              transparent 24px
            )`,
          }}
        />

        {/* Tuned glow orbs — less aggressive, more balanced */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl z-0 pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col items-center sm:items-start animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Automation Without <br className="hidden sm:block" />
            <span className="text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.45)]">Complexity</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-blue-200 max-w-2xl leading-relaxed">
            Nestbotics provides robotic welding integration, programming, and automation support to manufacturers looking to improve productivity, consistency, and efficiency.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            <Link
              href="/services"
              className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white rounded-xl font-bold text-lg transition-all shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:shadow-[0_0_36px_rgba(59,130,246,0.5)] hover:-translate-y-1"
            >
              Explore Our Consulting Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/8 hover:bg-white/15 border border-blue-400/50 text-white rounded-xl font-bold text-lg transition-all backdrop-blur-sm hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-600/8 rounded-2xl mb-6 shadow-sm border border-blue-100">
            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-6">Bridging the Gap in Manufacturing</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            At Nestbotics, we bridge the gap between robotic technology and real-world manufacturing. We help
            companies implement robotic welding systems, optimize automation processes, and maintain peak
            production performance.
          </p>
        </div>
      </section>

      {/* ── Core Services ── */}
      <section className="py-24 bg-slate-100 relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f]">What We Offer</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Automation Consulting", desc: "We evaluate your current processes and identify opportunities for automation, efficiency gains, and cost reduction. From concept to execution, we guide you every step of the way." },
              { title: "System Sourcing & Integration", desc: "Looking to invest in a robotic system? We help you identify the right solution, connect with trusted providers, specify system requirements, and oversee integration from purchase to production." },
              { title: "Turnkey Project Support", desc: "We stay involved throughout the entire lifecycle including pre-sale consultation, system design collaboration, installation and commissioning support, and post-install optimization." },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-[0_4px_24px_-6px_rgba(10,25,47,0.10)] border border-slate-200 transition-all hover:-translate-y-2 hover:shadow-[0_16px_36px_-10px_rgba(37,99,235,0.18)] hover:border-blue-200 group relative overflow-hidden"
              >
                {/* decorative circle — slate so it reads on white */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-full translate-x-16 -translate-y-16 group-hover:bg-blue-600 transition-colors duration-500 z-0" />

                <div className="relative z-10">
                  {/* icon — navy tint default, blue-600 fill on hover */}
                  <div className="w-14 h-14 bg-[#0a192f]/8 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm border border-slate-200 group-hover:border-blue-600">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#0a192f] mb-4 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group text-lg">
              View detailed consulting services offered
              <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#0a192f] text-white relative overflow-hidden">
        {/* subtle blue glow — top right, matching services page */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full translate-x-32 -translate-y-32 pointer-events-none" />
        {/* dot-grid texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-balance">
          <h2 className="text-4xl font-bold mb-6 drop-shadow-sm">Let's Build Your System</h2>
          <p className="text-blue-200 text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Whether you're exploring automation for the first time or scaling an existing operation, Nestbotics is your partner in building smarter manufacturing systems.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-500 hover:bg-blue-400 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
          >
            Get in Touch Today
          </Link>
        </div>
      </section>
    </div>
  );
}