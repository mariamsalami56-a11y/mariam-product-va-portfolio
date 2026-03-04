import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Download, Mail, Linkedin, Check, CheckSquare, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const experience = [
    {
      role: "Product Manager (SaaS & AI)",
      company: "Alivation Tech",
      period: "2024–2026",
      description: "Led development of multiple products from discovery to launch, shaping roadmaps, coordinating cross‑functional teams, and delivering user‑centered solutions that improved efficiency and scalability."
    },
    {
      role: "Project Delivery Manager",
      company: "Interverse Project Partners",
      period: "2022–2024",
      description: "Directed cross‑functional teams to deliver products on time and aligned with business goals."
    },
    {
      role: "Customer Success Lead",
      company: "Raiz Digital",
      period: "2024–2025",
      description: "Implemented CRM systems, cutting support requests by 70%."
    },
    {
      role: "Virtual Assistant",
      company: "UseFusion AI",
      period: "2024–2025",
      description: "Supported product teams with documentation, research, and streamlined delivery."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-[#008543] transition-colors mb-12 group font-bold">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column - Image & Quick Info */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="sticky top-32"
            >
              <div className="aspect-[4/5] overflow-hidden mb-8 bg-slate-100 rounded-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/d/1eKnGmZJqjOani_E-3_dAhpq1SVuzfj16" 
                  alt="Mariam Salami" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-col gap-4">
                <a 
                  href="mailto:mariamsalami56@gmail.com"
                  className="w-full py-4 bg-[#008543] text-white font-bold text-xl text-center hover:bg-[#1a1a1a] transition-colors flex items-center justify-center gap-2 rounded-xl"
                >
                  <Mail className="w-5 h-5" /> Get in Touch
                </a>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://www.linkedin.com/in/mariamxlamii/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] font-bold text-center hover:bg-[#1a1a1a] hover:text-white transition-colors flex items-center justify-center gap-2 rounded-xl"
                  >
                    <Linkedin className="w-5 h-5" /> LinkedIn
                  </a>
                  <button 
                    onClick={() => setIsResumeOpen(true)}
                    className="py-4 border-2 border-[#1a1a1a] text-[#1a1a1a] font-bold text-center hover:bg-[#1a1a1a] hover:text-white transition-colors flex items-center justify-center gap-2 rounded-xl"
                  >
                    <Download className="w-5 h-5" /> Resume
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Bio & Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl font-sans font-bold text-[#1a1a1a] mb-12 leading-none">
                Hello, <br/> I'm <span className="font-cursive text-[#008543] italic px-2">Mariam</span>.
              </h1>
              
              <div className="prose prose-xl text-slate-600 mb-16 font-medium leading-relaxed">
                <p className="mb-6">
                  I help founders, executives, and growing teams deliver projects with clarity and momentum. My focus is on turning vision into structured plans, aligning stakeholders, and keeping execution on track so you can concentrate on growth and strategy.
                </p>
                <p className="mb-6 font-bold text-[#1a1a1a]">
                  Here’s the reality: I’ve lived both sides.
                </p>
                <p className="mb-6">
                  I’ve been the Product Manager balancing vision with execution, and I’ve been the operator driving delivery under pressure. That dual perspective gives me a unique strength—I bridge strategy and execution seamlessly, anticipating risks, aligning teams, and ensuring projects move forward with clarity and momentum.
                </p>
              </div>

              {/* What I do */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">What I do:</h3>
                <ul className="space-y-4">
                  {[
                    "Drive projects from conception to delivery with clear roadmaps.",
                    "Align cross‑functional teams and translate requirements into actionable tasks.",
                    "Streamline workflows and ensure milestones are met on time and budget.",
                    "Manage communication, documentation, and stakeholder updates.",
                    "Identify risks and bottlenecks early, providing proactive solutions.",
                    "Build scalable processes that support long‑term growth."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-lg text-slate-600">
                      <span className="w-2 h-2 bg-[#008543] rounded-full mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why hire me */}
              <div className="mb-16 bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Why hire me:</h3>
                <p className="text-lg text-slate-600 mb-8">
                  I’m not just managing tasks—I’m managing outcomes. My background spans virtual assistance, product management, SaaS optimization, and cross‑functional team leadership, which means I bring both structure and strategic insight.
                </p>
                <h4 className="text-xl font-bold text-[#008543] mb-6">Here’s What I Bring to the Table:</h4>
                <ul className="space-y-4">
                  {[
                    "Guided product roadmaps from discovery to launch",
                    "Delivered projects on time by coordinating diverse teams",
                    "Implemented systems that reduced inefficiencies and improved delivery",
                    "Translated customer and stakeholder needs into actionable project plans"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-lg text-slate-700 font-medium">
                      <Check className="w-6 h-6 text-[#008543] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who I work best with */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">Who I work best with:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Founders needing project structure to scale",
                    "Executives managing multiple priorities",
                    "Teams navigating rapid growth and change",
                    "Business owners ready to offload project oversight"
                  ].map((item, i) => (
                    <div key={i} className="p-6 border border-slate-200 rounded-xl hover:border-[#008543] transition-colors bg-white shadow-sm flex items-start gap-4">
                      <CheckSquare className="w-6 h-6 text-[#008543] shrink-0 mt-0.5" />
                      <p className="text-lg font-medium text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Closing */}
              <div className="mb-20 p-8 bg-[#1a1a1a] text-white rounded-2xl">
                <p className="text-xl text-slate-300 mb-6">
                  I take the project planning off your shoulders so you can focus on leading, scaling, and innovating.
                </p>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  Ready to move from vision to delivery? Let’s work together.
                </p>
              </div>

              <div className="border-t-4 border-[#008543] pt-12">
                <h2 className="text-4xl font-sans font-bold text-[#1a1a1a] mb-12">Skills & Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] text-xl mb-6 border-b-2 border-slate-200 pb-2 inline-block">Product</h3>
                    <ul className="space-y-3 text-slate-600 text-lg font-medium">
                      <li>Product Strategy & Roadmapping</li>
                      <li>User Research & Discovery</li>
                      <li>Data Analysis & KPIs</li>
                      <li>Agile/Scrum Methodologies</li>
                      <li>A/B Testing & Optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] text-xl mb-6 border-b-2 border-slate-200 pb-2 inline-block">Operations</h3>
                    <ul className="space-y-3 text-slate-600 text-lg font-medium">
                      <li>Cross-functional Leadership</li>
                      <li>Communication & Documentation</li>
                      <li>Stakeholder Management</li>
                      <li>CRM Implementation & Optimization</li>
                      <li>Process Optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a1a] text-xl mb-6 border-b-2 border-slate-200 pb-2 inline-block">Technical</h3>
                    <ul className="space-y-3 text-slate-600 text-lg font-medium">
                      <li>Project Management Tools (ClickUp, Notion, Asana, Trello)</li>
                      <li>AI Workflow Automation</li>
                      <li>Prompt engineering</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tools I Use Section */}
              <div className="border-t-4 border-[#008543] pt-12 mt-16">
                <h2 className="text-4xl font-sans font-bold text-[#1a1a1a] mb-12">Tools I Use</h2>
                <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1dKw-N0Yh18OS7zgGVvdBdXSvyJUgBKG5" 
                    alt="Tools I Use" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Certifications Section */}
              <div className="border-t-4 border-[#008543] pt-12 mt-16">
                <h2 className="text-4xl font-sans font-bold text-[#1a1a1a] mb-12">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "HIPAA Certificate",
                      issuer: "HIPAA",
                      year: "2026",
                      image: "https://lh3.googleusercontent.com/d/1AjJPYmfcru7nkZ2z5IjpqS7Tt3znL0rr",
                      link: "https://drive.google.com/file/d/1AjJPYmfcru7nkZ2z5IjpqS7Tt3znL0rr/view?usp=sharing"
                    },
                    {
                      title: "Virtual Assistant Certification",
                      issuer: "ALX",
                      year: "August 2024",
                      image: "https://lh3.googleusercontent.com/d/1v-49no9m0zhL0bCVbi7GBJVohKJTz1MR",
                      link: "https://drive.google.com/file/d/1v-49no9m0zhL0bCVbi7GBJVohKJTz1MR/view?usp=sharing"
                    },
                    {
                      title: "Product Management Certification",
                      issuer: "Apt Learn",
                      year: "March 2023",
                      image: "https://lh3.googleusercontent.com/d/1CLRoxWTcl58duS10RquFmM49eOiepJrh",
                      link: "https://drive.google.com/file/d/1CLRoxWTcl58duS10RquFmM49eOiepJrh/view?usp=sharing"
                    },
                    {
                      title: "Business Analysis Certificate",
                      issuer: "Business Analysis School Canada",
                      year: "2022",
                      image: "https://lh3.googleusercontent.com/d/11MYZpudNEbjcQ_nefRW0Ns0-Vhw_yK27",
                      link: "https://drive.google.com/file/d/11MYZpudNEbjcQ_nefRW0Ns0-Vhw_yK27/view?usp=sharing"
                    }
                  ].map((cert, index) => (
                    <motion.a
                      key={index}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group block bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#008543] hover:shadow-lg transition-all duration-300"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                          referrerPolicy="no-referrer" 
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2 group-hover:text-[#008543] transition-colors line-clamp-2">
                          {cert.title}
                        </h3>
                        <div className="flex items-center justify-between text-slate-500 text-sm font-medium">
                          <span>{cert.issuer}</span>
                          <span>{cert.year}</span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>


            </motion.div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {createPortal(
        <AnimatePresence>
          {isResumeOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsResumeOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                style={{ zIndex: 9998 }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="fixed inset-0 flex items-center justify-center p-4 pointer-events-none"
                style={{ zIndex: 9999 }}
              >
                <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden pointer-events-auto shadow-2xl flex flex-col">
                  <div className="bg-white border-b border-slate-100 p-4 flex items-center justify-between shrink-0">
                    <h2 className="text-xl font-bold text-[#1a1a1a]">Experience Overview</h2>
                    <button 
                      onClick={() => setIsResumeOpen(false)}
                      className="p-2 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                    >
                      <X className="w-6 h-6 text-slate-500" />
                    </button>
                  </div>
                  
                  <div className="p-6 overflow-y-auto flex-1">
                    <div className="space-y-8 mb-8">
                      {experience.map((job, index) => (
                        <div key={index} className="group">
                          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                            <h3 className="text-lg font-bold text-[#1a1a1a]">{job.role}</h3>
                            <span className="text-sm font-mono text-slate-500 whitespace-nowrap">{job.period}</span>
                          </div>
                          <div className="text-[#008543] font-bold text-base mb-2">{job.company}</div>
                          <p className="text-slate-600 text-sm leading-relaxed">{job.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center sticky bottom-0 mt-4">
                      <button 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#008543] text-white font-bold rounded-lg hover:bg-[#1a1a1a] transition-colors"
                      >
                        <Download className="w-4 h-4" /> Download Full Resume
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
