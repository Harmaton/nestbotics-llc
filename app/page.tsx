import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative  text-white py-24 sm:py-32 lg:py-48 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_welding.png"
            alt="Robotic Welding Automation"
            fill
            className="object-cover opacity-200 mix-blend-screen"
            priority
          />
          <div className="absolute inset-0 bg-[#0a192f]/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-transparent to-[#0a192f] opacity-80" />
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-600/30 blur-3xl z-0" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl pointer-events-none z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col items-center sm:items-start animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Automation Without <br className="hidden sm:block" /><span className="text-blue-500 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">Complexity</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed">
            Nestbotics provides robotic welding integration, programming, and automation support to manufacturers looking to improve productivity, consistency, and efficiency.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-5">
            <Link href="/services" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-bold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1">
              Explore Our Services
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-blue-400/40 text-white rounded-md font-bold text-lg transition-all backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl mb-6 shadow-sm">
             <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
             </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Bridging the Gap in Manufacturing</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            At Nestbotics, we bridge the gap between robotic technology and real-world manufacturing. We help
            companies implement robotic welding systems, optimize automation processes, and maintain peak
            production performance.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 bg-slate-50 relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Core Services</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Robotic Welding Integration", desc: "End-to-end setup, from cell layout to production startup." },
              { title: "Robot Programming", desc: "Path programming and fine-tuning parameters for peak efficiency." },
              { title: "Automation Consulting", desc: "Feasibility studies, ROI analysis, and strategic planning." },
              { title: "On-Site Technical Support", desc: "Direct troubleshooting, operator training, and process improvement." },
              { title: "Process Improvement", desc: "Continuous enhancement to maintain max consistency and quality." },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)] border border-slate-100 transition-all hover:-translate-y-2 hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.15)] group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full translate-x-16 -translate-y-16 group-hover:bg-blue-600 transition-colors duration-500 z-0"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300 shadow-sm border border-blue-100">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
             <Link href="/services" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group text-lg">
                View detailed service offerings
                <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
             </Link>
          </div>
        </div>
      </section>
      
      {/* Latest Articles Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Latest Articles & Insights</h2>
              <div className="w-24 h-1.5 bg-blue-600 mt-6 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
            </div>
            <Link href="/blogs" className="mt-8 md:mt-0 inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors group text-lg bg-blue-50 px-6 py-3 rounded-xl">
              View all blogs
              <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of Robotic Welding",
                date: "March 15, 2026",
                category: "Technology",
                slug: "future-of-robotic-welding",
                excerpt: "Discover how AI and machine learning are transforming the accuracy and speed of automated welding."
              },
              {
                title: "Maximizing ROI with Automation",
                date: "February 28, 2026",
                category: "Consulting",
                slug: "maximizing-roi-with-automation",
                excerpt: "A comprehensive guide on evaluating manufacturing processes and finding the perfect automation balance."
              },
              {
                title: "Top 5 Safety Protocols for Robot Cells",
                date: "February 10, 2026",
                category: "Safety",
                slug: "top-5-safety-protocols-for-robot-cells",
                excerpt: "Ensure your production floor meets all compliance guidelines without sacrificing efficiency."
              }
            ].map((article, i) => (
              <Link href={`/blogs/${article.slug}`} key={i} className="group bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col h-full focus:outline-none focus:ring-4 focus:ring-blue-500/30 block">
                <div className="h-48 relative overflow-hidden bg-[#0a192f]">
                  <Image 
                    src="/images/hero_welding.png" 
                    alt={article.title}
                    fill
                    className="object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 mix-blend-screen" 
                  />
                  <div className="absolute inset-0 bg-blue-900 mix-blend-multiply opacity-40 group-hover:opacity-10 transition-opacity z-10 pointer-events-none"></div>
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-blue-600 text-sm font-bold tracking-wider uppercase">{article.category}</span>
                      <span className="text-slate-500 text-sm">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{article.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{article.excerpt}</p>
                  </div>
                  <div className="mt-8 inline-flex items-center text-slate-800 font-semibold group-hover:text-blue-600 transition-colors">
                    Read Article 
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-balance">
          <h2 className="text-4xl font-bold mb-6 drop-shadow-sm">Ready to Unlock the Full Potential of Your Automation?</h2>
          <p className="text-blue-100 text-xl md:text-2xl mb-12 max-w-3xl mx-auto">Whether you are exploring robotic automation or need support with an existing system, Nestbotics is ready to help nationwide.</p>
          <Link href="/contact" className="inline-block bg-white text-blue-900 hover:bg-slate-50 px-10 py-5 rounded-md font-bold text-xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Get in Touch Today
          </Link>
        </div>
      </section>
    </div>
  );
}
