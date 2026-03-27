import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Nestbotics',
  description: 'Our mission is to help manufacturers unlock the full potential of robotic automation.',
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <div className="bg-[#0a192f] text-white py-24 md:py-32 text-center relative overflow-hidden">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
            <Image 
              src="/images/hero_welding.png"
              alt="About Nestbotics Background"
              fill
              className="object-cover opacity-30 mix-blend-screen"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/70 to-transparent opacity-90" />
         </div>
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">About Nestbotics</h1>
            <p className="mt-6 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto drop-shadow-sm font-medium">Our Mission, Philosophy, and Expertise</p>
         </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 gap-y-24">
        
        {/* Mission and Philosophy */}
        <div className="space-y-20">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1.5 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Our Mission</h2>
            </div>
            <p className="text-xl text-slate-800 leading-relaxed font-semibold mb-6">
              Nestbotics exists to help manufacturers unlock the full potential of robotic automation.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Modern manufacturing demands precision, efficiency, and scalability. Our goal is to simplify automation and help businesses integrate robotic solutions that improve quality, reduce downtime, and increase production.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-1.5 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
               <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Our Philosophy</h2>
            </div>
            <p className="text-xl text-slate-800 leading-relaxed font-semibold mb-6">
              Automation should not be complicated.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Many manufacturers invest in robotic systems but struggle to fully utilize them. Nestbotics works directly with manufacturers to ensure their automation systems perform at their highest potential and deliver maximum ROI.
            </p>
          </section>
        </div>
        
        {/* Industries Served and Why Us */}
        <div className="space-y-12">
           <section className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.1)] transition-all">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Industries Served</h2>
            <ul className="space-y-5">
              {[
                "Automotive manufacturing",
                "Heavy equipment manufacturing",
                "Metal fabrication",
                "Structural steel fabrication",
                "Agricultural equipment manufacturing",
                "Industrial machinery production"
              ].map((industry, i) => (
                <li key={i} className="flex items-start">
                  <div className="bg-blue-50 p-1 rounded-md mr-4 shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700 text-lg">{industry}</span>
                </li>
              ))}
            </ul>
           </section>

           <section className="bg-blue-900 text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group hover:bg-blue-800 transition-colors">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-400/30 transition-colors duration-700"></div>
            <h2 className="text-2xl font-bold mb-8 relative z-10 border-b border-blue-800/50 pb-4">Why Choose Nestbotics?</h2>
            <ul className="space-y-6 relative z-10 text-blue-50">
              <li className="flex items-start">
                <span className="text-blue-400 mr-4 font-bold text-2xl leading-none mt-1">•</span>
                <span className="text-lg">Manufacturing expertise in robotic welding environments</span>
              </li>
              <li className="flex items-start">
                 <span className="text-blue-400 mr-4 font-bold text-2xl leading-none mt-1">•</span>
                <span className="text-lg">Practical automation solutions that work in real production settings</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-4 font-bold text-2xl leading-none mt-1">•</span>
                <span className="text-lg">Flexible support from single programming jobs to full consulting</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-4 font-bold text-2xl leading-none mt-1">•</span>
                <span className="text-lg">Long-term partnership focused on continuous automation improvement</span>
              </li>
            </ul>
           </section>
        </div>

      </div>
    </div>
  );
}
