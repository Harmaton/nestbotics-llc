import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consulting & System Solutions | Nestbotics',
  description: 'Nestbotics provides automation consulting, system sourcing & integration, and turnkey project support.',
};

const services = [
  {
    title: "Automation Consulting",
    description: "We evaluate your current processes and identify opportunities for automation, efficiency gains, and cost reduction. From concept to execution, we guide you every step of the way.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "System Sourcing & Integration",
    description: "Looking to invest in a robotic system? We help you identify the right solution, connect with trusted providers, specify system requirements, and oversee integration from purchase to production.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Turnkey Project Support",
    description: "We stay involved throughout the entire lifecycle including pre-sale consultation, system design collaboration, installation and commissioning support, and post-install optimization.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

function ServiceCard({ service }: { service: any }) {
  return (
    <div className="bg-white rounded-2xl p-10 shadow-[0_4px_24px_-6px_rgba(10,25,47,0.10)] border border-slate-200 hover:shadow-[0_16px_36px_-10px_rgba(37,99,235,0.18)] hover:border-blue-200 transition-all group overflow-hidden relative h-full flex flex-col">
      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-full translate-x-16 -translate-y-16 group-hover:bg-blue-600 transition-colors duration-500 z-0" />

      <div className="relative z-10 flex flex-col flex-1">
        <div className="w-16 h-16 bg-[#0a192f]/[0.08] text-blue-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm border border-slate-200 group-hover:border-blue-600">
          {service.icon}
        </div>

        <h2 className="text-2xl font-bold text-[#0a192f] mb-5 group-hover:text-blue-700 transition-colors">
          {service.title}
        </h2>

        {service.description && (
          <p className="text-slate-600 text-lg leading-relaxed">{service.description}</p>
        )}

        {service.items && (
          <ul className="space-y-4">
            {service.items.map((item: string, i: number) => (
              <li key={i} className="flex items-start">
                <div className="bg-blue-600/10 p-1 rounded-md mr-3 shrink-0 mt-0.5 group-hover:bg-blue-600/20 transition-colors">
                  <svg className="w-4 h-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-600 text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">

      {/* ── Hero ── */}
      <div className="bg-[#0a192f] text-white py-24 md:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_welding.png"
            alt="Services Nestbotics Background"
            fill
            className="object-cover opacity-30 mix-blend-screen"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0d2240]/80 to-transparent opacity-90" />
        </div>

        {/* dot-grid pattern */}
        <div
          className="absolute inset-0 z-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle, #93c5fd 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        {/* diagonal industrial lines */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, #60a5fa 0px, #60a5fa 1px, transparent 1px, transparent 24px)`,
          }}
        />

        {/* glow orbs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl z-0 pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">Nestbotics Portfolio</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">Consulting & System Solutions</h1>
          <p className="mt-8 text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed font-medium border-l-4 border-blue-400 pl-6 py-2 text-left sm:text-center sm:border-l-0 sm:pl-0">
            We go beyond programming and support—we act as a strategic partner for manufacturers looking to implement, optimize, or expand their automation capabilities. 
            </p>
        </div>
      </div>

      {/* ── Section Header ── */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">What We Do</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full shadow-[0_0_10px_rgba(37,99,235,0.35)] mb-6" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our focus is simple: deliver production-ready solutions while empowering your team to run efficiently, reduce downtime, and continuously improve output.
          </p>
        </div>
      </div>

      {/* ── Cards ── */}
      <div className="relative">
        {/* subtle dot pattern on section background */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #1e3a5f 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Row 1 — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {services.slice(0, 3).map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>
          {/* Row 2 — 2 cards centred */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-3xl md:mx-auto">
            {services.slice(3).map((service, idx) => (
              <ServiceCard key={idx + 3} service={service} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center bg-[#0a192f] p-12 lg:p-16 rounded-3xl text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full translate-x-32 -translate-y-32 pointer-events-none" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let&apos;s Build Your System</h2>
            <p className="text-blue-200 text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Whether you&apos;re exploring automation for the first time or scaling an existing operation, Nestbotics is your partner in building smarter manufacturing systems.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl text-lg transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}