import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: "requirements-gathering-mistake",
    title: "How One Requirement Gathering Mistake Cost a FinTech Startup $5,000",
    excerpt: "When I joined the team, I noticed a critical ambiguity in a feature about to launch. Here's how a quick review saved the project from a much larger disaster.",
    category: "Product Management",
    date: "Feb 24, 2026",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/fintech-mistake/800/600",
    tags: ["Requirements", "Agile", "Case Study"]
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white pt-48 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <Link to="/" className="inline-flex items-center gap-2 text-[#008543] hover:text-[#1a1a1a] transition-colors mb-12 group font-bold text-lg">
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-8xl font-sans font-bold text-[#1a1a1a] mb-6">Case Studies</h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl font-medium leading-relaxed">
            Deep dives into product challenges, tool reviews, and lessons learned from the trenches of AI product management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col h-full"
            >
              <Link to={`/case-studies/${post.id}`} className="block h-full">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-6 bg-slate-100 border border-slate-200">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#008543] uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3 font-medium">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#1a1a1a] mb-3 group-hover:text-[#008543] transition-colors leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed text-lg line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center text-[#008543] font-bold group-hover:underline decoration-2 underline-offset-4">
                    Read Full Case Study <ArrowUpRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
