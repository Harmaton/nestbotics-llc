import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Nestbotics',
  description: 'Robotic welding integration, robot programming, automation consulting, and on-site support by Nestbotics.',
};

const services = [
  {
    title: "Robotic Welding Integration",
    items: ["Automation planning", "Cell layout design", "System setup", "Safety integration", "Production startup"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Robot Programming",
    items: ["Robot path programming", "Weld parameter optimization", "Cycle time improvements", "Fixture adjustments", "Production tuning"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Automation Consulting",
    items: ["Automation feasibility studies", "ROI analysis", "Process optimization", "Production workflow improvements"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "On-Site Support",
    items: ["Troubleshooting", "Process improvement", "Robot adjustments", "Operator training", "Maintenance guidance"],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <div className="bg-[#0a192f] text-white py-24 md:py-32 text-center relative overflow-hidden">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
            <Image 
              src="/images/hero_welding.png"
              alt="Services Nestbotics Background"
              fill
              className="object-cover opacity-30 mix-blend-screen"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/70 to-transparent opacity-90" />
         </div>
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">Our Services</h1>
            <p className="mt-8 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow-sm font-medium border-l-4 border-blue-500 pl-6 py-2 text-left sm:text-center sm:border-l-0 sm:pl-0">
              Comprehensive robotic welding and automation solutions tailored to maximize your facility's potential.
            </p>
         </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-10 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.15)] transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full translate-x-16 -translate-y-16 group-hover:bg-blue-600 transition-colors duration-500 z-0"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300 shadow-sm border border-blue-100">
                  {service.icon}
                </div>
                
                <h2 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-blue-900 transition-colors">{service.title}</h2>
                <ul className="space-y-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-md mr-3 shrink-0 mt-0.5 group-hover:bg-blue-200 transition-colors">
                        <svg className="w-4 h-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-600 text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center bg-blue-600 p-12 lg:p-16 rounded-3xl text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/hero_welding.png"
              alt="Background"
              fill
              className="object-cover opacity-10 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply pointer-events-none" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Need a custom approach?</h2>
            <p className="text-blue-100 text-xl lg:text-2xl max-w-3xl mx-auto mb-10 text-balance leading-relaxed">
              Nestbotics offers flexible support from single programming jobs to full-scale consulting engagements. Let's discuss your facility's unique challenges.
            </p>
            <Link href="/contact" className="inline-block px-10 py-5 bg-white text-blue-900 font-bold rounded-xl text-lg hover:bg-slate-50 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1">
              Contact Our Experts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
