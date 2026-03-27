import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

const blogPosts = {
  'future-of-robotic-welding': {
    title: "The Future of Robotic Welding",
    date: "March 15, 2026",
    category: "Technology",
    author: "javril M.",
    content: `
      <p>The manufacturing landscape is evolving at an unprecedented pace, driven largely by advancements in artificial intelligence and machine learning. In the realm of robotic welding, these technologies are no longer just buzzwords; they are actively reshaping how facilities operate.</p>
      <h2>Precision and Speed Unlocked</h2>
      <p>Traditionally, robotic welders required extensive programming for every minor deviation in part dimensions. Today, vision systems coupled with AI algorithms allow robots to adjust their paths in real-time. This means fewer defects, drastically reduced scrap rates, and an overall increase in throughput.</p>
      <h2>The Human-Robot Synergy</h2>
      <p>Contrary to the belief that robots will entirely replace human welders, the future points toward collaborative environments. Skilled human operators are essential for overseeing complex cells, maintaining equipment, and handling non-standard tasks that still require human intuition and adaptability.</p>
      <blockquote style="border-left: 4px solid #3b82f6; padding-left: 1rem; margin-top: 2rem; margin-bottom: 2rem; font-style: italic; color: #475569;">
        <p>At Nestbotics, we've seen first-hand how integrating smart welding solutions transforms a struggling production line into a highly efficient, predictable operation.</p>
      </blockquote>
      <p>As we move forward, the barrier to entry for intelligent welding automation will continue to lower, allowing even small-to-medium manufacturers to reap the benefits of this next-generation technology. Is your facility ready for the leap?</p>
    `
  },
  'maximizing-roi-with-automation': {
    title: "Maximizing ROI with Automation",
    date: "February 28, 2026",
    category: "Consulting",
    author: "javril M.",
    content: "<p>A comprehensive guide on evaluating manufacturing processes and finding the perfect automation balance. More content coming soon...</p>"
  },
  'top-5-safety-protocols-for-robot-cells': {
    title: "Top 5 Safety Protocols for Robot Cells",
    date: "February 10, 2026",
    category: "Safety",
    author: "javril M.",
    content: "<p>Ensure your production floor meets all compliance guidelines without sacrificing efficiency. Learn the best safety practices here...</p>"
  }
};

type Props = {
  params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];
  if (!post) return { title: 'Blog Not Found | Nestbotics' };
  return { title: `${post.title} | Nestbotics Blog` };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 pt-20">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Article Not Found</h1>
        <p className="text-slate-600 mb-8 text-lg">We couldn't find the blog post you were looking for.</p>
        <Link href="/" className="text-white bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 shadow-md transition-all font-semibold">
          &larr; Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Blog Article Hero */}
      <div className="bg-[#0a192f] text-white pt-36 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_welding.png"
            alt="Blog Background Context"
            fill
            className="object-cover opacity-20 mix-blend-screen"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] to-transparent opacity-90" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Link href="/" className="inline-flex items-center text-blue-300 hover:text-white mb-8 transition-colors text-sm font-bold tracking-wide uppercase">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-blue-600/30 text-blue-200 border border-blue-500/30 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase backdrop-blur-sm shadow-sm">
              {post.category}
            </span>
            <span className="text-blue-200/80 text-sm font-semibold">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-10 text-balance drop-shadow-lg">
            {post.title}
          </h1>
          
          <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl w-fit drop-shadow-sm">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-inner">
              JM
            </div>
            <div>
              <p className="text-white font-bold tracking-wide text-lg">Written by {post.author}</p>
              <p className="text-blue-300 text-sm font-medium tracking-wide uppercase mt-0.5">Robotics Expert @ Nestbotics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
         <div 
           className="space-y-8 leading-relaxed text-slate-700 text-xl font-medium prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-headings:mt-12 prose-headings:mb-6 prose-a:text-blue-600 hover:prose-a:text-blue-800 focus:outline-none"
           dangerouslySetInnerHTML={{ __html: post.content }} 
         />
      </article>

      {/* CTA Bottom */}
      <section className="bg-slate-50 py-24 border-t border-slate-100 mt-auto relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-32 translate-x-32 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-balance relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Ready to transform your production?</h2>
          <p className="text-slate-600 text-xl mb-10">Our experts like {post.author} are standing by to help design and implement the perfect robotic solution for you.</p>
          <Link href="/contact" className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-[0_10px_20px_-10px_rgba(37,99,235,0.6)] hover:shadow-xl hover:-translate-y-1">
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
