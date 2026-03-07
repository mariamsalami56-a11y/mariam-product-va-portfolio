import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ExternalLink, X } from "lucide-react";
import { Link } from "react-router-dom";
import Services from "../components/Services";

interface Project {
  title: string;
  category: string;
  role: string;
  description: string;
  overview: string;
  contributions: string[];
  tags: string[];
  image: string;
  link: string;
}

const allProjects: Project[] = [
  {
    title: "Raiz Digital App",
    category: "CRM Implementation",
    role: "CRM Implementation Specialist",
    description: "Digital banking platform enabling global commerce with US banking services and multi-currency management.",
    overview: "Raiz is a digital banking platform designed to be the backbone for global commerce. It allows businesses to access US banking services, manage multi-currency treasuries, and execute instant payments across Africa.",
    contributions: [
      "Implemented CRM systems to streamline customer support and sales processes.",
      "Ensured the platform could scale effectively to handle $20.5BN+ in global volume.",
      "Optimized workflows for better team efficiency."
    ],
    tags: ["Fintech", "CRM", "Banking", "Global Payments"],
    image: "https://lh3.googleusercontent.com/d/1wp0VvM-ROS9KENBJOaX4d8_h_z6y1aW-",
    link: "https://www.raiz.app"
  },
  {
    title: "Dashndrop App",
    category: "Project Management",
    role: "Project Manager (Web & Mobile)",
    description: "Logistics and delivery platform streamlining urban transportation and package handling.",
    overview: "Dashndrop is a comprehensive logistics solution streamlining urban transportation and package handling.",
    contributions: [
      "Managed the end-to-end development lifecycle for the web application, mobile app, and admin dashboard.",
      "Conducted user research to refine product features and improve user experience.",
      "Coordinated between design and engineering teams to ensure seamless execution.",
      "Oversaw the development of administrative tools for operational control."
    ],
    tags: ["Logistics", "Mobile App", "User Research", "Admin Panel"],
    image: "https://lh3.googleusercontent.com/d/1wp0VvM-ROS9KENBJOaX4d8_h_z6y1aW-",
    link: "https://www.dashndrop.ng"
  },
  {
    title: "Treasurebox",
    category: "Project Management",
    role: "Project Manager",
    description: "Ecommerce platform for handcrafted gifts, flowers, and magical event planning.",
    overview: "Treasurebox is a niche ecommerce platform dedicated to gifting and event planning.",
    contributions: [
      "Led a brief, intensive 6-week project, strictly managing the timeline to launch on schedule.",
      "Coordinated the development of features for browsing handcrafted gifts, ordering flowers, and booking event planning services.",
      "Facilitated communication between stakeholders and the development team."
    ],
    tags: ["Ecommerce", "Rapid Delivery", "Web Development", "Project Management"],
    image: "https://lh3.googleusercontent.com/d/1wp0VvM-ROS9KENBJOaX4d8_h_z6y1aW-",
    link: "https://www.treasurebox.ng"
  },
  {
    title: "Ovu.ng",
    category: "Project Management",
    role: "Project Manager",
    description: "Unified travel booking platform for flights and intercity bus trips in Nigeria.",
    overview: "OVU is a one-stop platform for travelers in Nigeria, allowing them to search, book, and pay for buses and flights.",
    contributions: [
      "Oversaw the development of the travel aggregator platform.",
      "Coordinated integrations with various bus operators and airline APIs.",
      "Focused on creating a seamless, secure, and reliable booking experience for users."
    ],
    tags: ["Travel Tech", "Aggregator", "Booking System"],
    image: "https://lh3.googleusercontent.com/d/1wp0VvM-ROS9KENBJOaX4d8_h_z6y1aW-",
    link: "https://ovu.ng"
  },
  {
    title: "RECNEPS GROUP",
    category: "End-to-End Development",
    role: "Developer & Designer",
    description: "Community platform for the Health Reset Challenge, fostering wellness and engagement.",
    overview: "Recneps Group's Health Reset Community needed a digital home to foster wellness and engagement.",
    contributions: [
      "Took on an end-to-end role, creating, designing, and developing the website from scratch.",
      "Designed the UI/UX to create an engaging user journey.",
      "Handled full frontend development to bring the health challenge platform to life."
    ],
    tags: ["Web Design", "Frontend Dev", "Health & Wellness"],
    image: "https://lh3.googleusercontent.com/d/1wp0VvM-ROS9KENBJOaX4d8_h_z6y1aW-",
    link: "https://thehealthresetchallenge.netlify.app/"
  }
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-white pt-40 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-20">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-[#008543] hover:text-[#1a1a1a] transition-colors mb-8 group font-bold text-lg">
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" /> Back to Home
            </Link>
            <h1 className="text-5xl md:text-8xl font-sans font-bold text-[#1a1a1a] mb-6">Selected Work</h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl font-medium leading-relaxed">
              A comprehensive look at my projects bridging operations, product management, and development.
            </p>
          </div>
          
          <a 
            href="https://calendly.com/mariamsalami56/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#008543] text-white font-bold rounded-full hover:bg-[#006b36] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Book a Consultation
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 mb-32">
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-slate-100 rounded-2xl shadow-sm group-hover:shadow-md transition-all">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#008543]/0 group-hover:bg-[#008543]/20 transition-colors duration-300" />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-[#008543] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  View Details
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-[#008543] uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-3xl font-sans font-bold text-[#1a1a1a] mb-3 group-hover:text-[#008543] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed text-lg line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-sm px-3 py-1 bg-slate-100 text-slate-600 font-medium rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      
      <Services />

      <div className="container mx-auto px-6">
        {/* About Me Redirect Section */}
        <div className="bg-[#f9f7f2] border border-[#e5e0d6] p-12 md:p-20 text-center mb-20 rounded-3xl">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#1a1a1a] mb-6">
            Want to know more about my skills?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Discover my journey, certifications, and the expertise I bring to every project.
          </p>
          <Link 
            to="/about"
            className="inline-flex items-center gap-3 text-xl font-bold text-[#008543] hover:text-[#1a1a1a] transition-colors border-b-2 border-[#008543] hover:border-[#1a1a1a] pb-1"
          >
            Learn More About Me <ArrowLeft className="w-6 h-6 rotate-180" />
          </Link>
        </div>

        {/* Back to Home Section */}
        <div className="text-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-[#008543] transition-colors text-lg font-medium group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
        </div>

      </div>

      {/* Project Detail Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
              >
                <div className="overflow-y-auto custom-scrollbar">
                  <div className="h-64 sm:h-80 md:h-96 w-full relative">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8 md:p-12">
                       <div className="text-white">
                          <span className="inline-block px-3 py-1 bg-[#008543] rounded-md text-sm font-bold uppercase tracking-wider mb-3">
                            {selectedProject.category}
                          </span>
                          <h2 className="text-4xl md:text-5xl font-bold font-sans leading-tight">
                            {selectedProject.title}
                          </h2>
                       </div>
                    </div>
                  </div>

                  <div className="p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                      <div className="md:col-span-2 space-y-8">
                        <div>
                          <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">Project Description</h3>
                          <p className="text-lg text-slate-600 leading-relaxed">
                            {selectedProject.overview}
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">What I Did</h3>
                          <ul className="list-disc pl-5 space-y-2 text-lg text-slate-600 leading-relaxed">
                            {selectedProject.contributions.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">My Role</h3>
                          <p className="text-lg text-slate-600 leading-relaxed">
                            {selectedProject.role}
                          </p>
                        </div>

                        <div className="pt-6">
                          <a 
                            href={selectedProject.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white font-bold rounded-full hover:bg-[#008543] transition-colors"
                          >
                            Visit Live Project <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Technologies & Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tags.map(tag => (
                              <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 font-medium rounded-md text-sm">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="p-6 bg-[#f9f7f2] rounded-xl border border-[#e5e0d6]">
                          <h4 className="text-lg font-bold text-[#1a1a1a] mb-2">Need similar results?</h4>
                          <p className="text-slate-600 mb-4 text-sm">
                            I can help you streamline your operations or manage your next big project.
                          </p>
                          <a 
                            href="https://calendly.com/mariamsalami56/30min" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#008543] font-bold hover:underline text-sm"
                          >
                            Book a Discovery Call →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-50 p-2 bg-white/90 backdrop-blur-md rounded-full hover:bg-white text-slate-800 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
