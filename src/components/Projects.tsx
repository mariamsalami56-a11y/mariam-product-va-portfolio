import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "AI Customer Support Agent",
    category: "Conversational AI",
    description: "Designed and led the development of a RAG-based support agent that reduced ticket volume by 45%.",
    tags: ["LLM", "Python", "React", "Pinecone"],
    image: "https://picsum.photos/seed/ai-agent/800/600",
    link: "#"
  },
  {
    title: "Generative Design Tool",
    category: "Product Design",
    description: "A web-based tool allowing interior designers to generate room concepts using stable diffusion models.",
    tags: ["GenAI", "Stable Diffusion", "Next.js", "Stripe"],
    image: "https://picsum.photos/seed/gen-design/800/600",
    link: "#"
  },
  {
    title: "Predictive Analytics Dashboard",
    category: "Data Visualization",
    description: "Enterprise dashboard for predicting supply chain disruptions using historical data and ML forecasting.",
    tags: ["ML", "D3.js", "FastAPI", "PostgreSQL"],
    image: "https://picsum.photos/seed/analytics/800/600",
    link: "#"
  }
];

interface ProjectsProps {
  limit?: number;
}

export default function Projects({ limit }: ProjectsProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Selected Work</h2>
            <p className="text-lg text-slate-600 max-w-xl">
              A collection of projects where I bridged the gap between technical possibility and user needs.
            </p>
          </div>
          <Link to="/work" className="hidden md:flex items-center gap-2 text-slate-900 font-medium hover:text-[#008543] transition-colors mt-6 md:mt-0 border-b-2 border-transparent hover:border-[#008543]">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3] mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Case Study
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[#008543]">{project.category}</span>
                <div className="flex gap-2">
                  {/* Icons could go here */}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#008543] transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-slate-50 border border-slate-100 rounded-md text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link to="/work" className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-[#008543] transition-colors">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
