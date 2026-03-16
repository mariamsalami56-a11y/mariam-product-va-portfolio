import { motion, AnimatePresence } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "AI & Workflow Automation",
    description: "Leverage AI automation to Streamline Your Business Operations, Reduce Repetitive Tasks and Boost Efficiency by Automating your Workflows. Ways I Can Help You Grow:",
    items: [
      "Custom GPT & AI Agent Setup",
      "Automated Email & CRM Workflows",
      "Data Extraction & Processing Pipelines",
      "Chatbot Integration for Customer Support",
      "Zapier/Make.com Automation Scenarios"
    ]
  },
  {
    id: "02",
    title: "Project Management",
    description: "From Planning to Execution, Streamlining workflows for successful product and project management delivery. Ways I can help you grow:",
    items: [
      "Agile/Scrum Coordination",
      "Cross-functional Team Management",
      "End-to-End Product & Project Management",
      "Product Discovery (User Journey & Market Research)",
      "Process Optimization & Documentation",
      "Tool Setup (ClickUp, Notion, Asana) and more",
      "Web & Landing Page Development"
    ]
  },
  {
    id: "03",
    title: "Virtual Assistance & Social Media",
    subSections: [
      {
        title: "Virtual Assistance",
        description: "Get Reliable Support For Your Daily Operations & Comprehensive Support For Founders, Businesses and Startups. Ways I Can Help You Grow:",
        items: [
          "Executive Assistance and coordination",
          "Client / Partner / Vendor Management",
          "Project Support and Delivery",
          "Data Entry, Database Management & Market Research",
          "Travel Planning & Logistics"
        ]
      },
      {
        title: "Social Media Management",
        description: "Managing Your Brand Presence Across Platforms. Ways I Can Help You Grow:",
        items: [
          "Content Strategy, Scheduling & Campaign Management",
          "Meta Ads Campaign Setup",
          "Community Engagement & Growth",
          "Visual Asset Creation & Analytics Reporting"
        ]
      }
    ]
  }
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="pt-10 pb-16 md:pt-16 md:pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-20">
          <h2 className="text-4xl md:text-7xl font-sans font-bold text-[#1a1a1a] mb-4 md:mb-6 leading-tight">
            Services
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
            Explore tailored solutions designed to help your business run smarter, faster, and more efficiently.
          </p>
        </div>

        <div className="border-t border-slate-200">
          {services.map((service, index) => (
            <div key={index} className="border-b border-slate-200">
              <button
                onClick={() => toggleService(index)}
                className="w-full py-8 md:py-12 flex items-center justify-between group text-left hover:bg-slate-50 transition-colors px-2 md:px-4 -mx-2 md:-mx-4"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-16">
                  <span className="text-lg md:text-xl font-mono text-[#008543]">{service.id}</span>
                  <h3 className="text-2xl md:text-5xl font-sans font-bold text-[#1a1a1a] group-hover:text-[#008543] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <ArrowDown 
                  className={`w-6 h-6 md:w-8 md:h-8 text-[#1a1a1a] transition-transform duration-300 shrink-0 ml-4 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 md:pb-12">
                      <div className="max-w-3xl">
                        {service.subSections ? (
                          <div className="space-y-12">
                            {service.subSections.map((section, idx) => (
                              <div key={idx}>
                                <h4 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-3">{section.title}</h4>
                                <p className="text-lg md:text-xl text-slate-600 mb-6 font-medium">
                                  {section.description}
                                </p>
                                <ul className="space-y-3 md:space-y-4">
                                  {section.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-base md:text-lg text-slate-700">
                                      <span className="mt-2 w-1.5 h-1.5 bg-[#008543] rounded-full shrink-0" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <>
                            <p className="text-lg md:text-xl text-slate-600 mb-6 md:mb-8 font-medium">
                              {service.description}
                            </p>
                            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                              {service.items?.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-base md:text-lg text-slate-700">
                                  <span className="mt-2 w-1.5 h-1.5 bg-[#008543] rounded-full shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                        <div className="mt-8 md:mt-10">
                          <a 
                            href="https://forms.gle/LucckVL77zfCh58YA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full md:w-auto text-center px-8 py-3 bg-[#1a1a1a] text-white font-bold rounded-full hover:bg-[#008543] transition-colors"
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
