import { motion } from "motion/react";

const tools = [
  { name: "Jira", category: "Agile", icon: "https://cdn.simpleicons.org/jira/0052CC" },
  { name: "React", category: "Frontend", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Asana", category: "Projects", icon: "https://cdn.simpleicons.org/asana/273347" },
  { name: "Monday.com", category: "Automation", icon: "https://www.google.com/s2/favicons?domain=monday.com&sz=128" },
  { name: "ClickUp", category: "Projects", icon: "https://cdn.simpleicons.org/clickup/7B68EE" },
  { name: "Google Workspace", category: "Docs", icon: "https://cdn.simpleicons.org/google/4285F4" },
  { name: "Office 365", category: "Suite", icon: "https://www.google.com/s2/favicons?domain=office.com&sz=128" },
  { name: "Slack", category: "Collaboration", icon: "https://cdn.simpleicons.org/slack/4A154B" },
  { name: "Notion", category: "Docs", icon: "https://cdn.simpleicons.org/notion/000000" },
  { name: "Airtable", category: "Database", icon: "https://cdn.simpleicons.org/airtable/18BFFF" },
  { name: "Figma", category: "Design", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Zapier", category: "Automation", icon: "https://cdn.simpleicons.org/zapier/FF4A00" },
  { name: "Calendly", category: "Scheduling", icon: "https://cdn.simpleicons.org/calendly/006BFF" },
  { name: "Zendesk", category: "CRM", icon: "https://cdn.simpleicons.org/zendesk/03363D" },
];

export default function Tools() {
  return (
    <>
      <section className="pt-12 pb-16 bg-[#f9f7f2] overflow-hidden border-b border-[#e5e0d6]">
      <div className="container mx-auto px-6 mb-10 text-center">
        <h2 className="text-sm font-medium text-[#FF6B35] tracking-widest uppercase mb-3">My Stack</h2>
        <p className="text-3xl font-serif font-medium text-[#1a1a1a]">Tools & Technologies I Use Daily</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-8 py-4 pr-8">
          {[...tools, ...tools].map((tool, index) => (
            <div 
              key={`${tool.name}-${index}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#e5e0d6] rounded-full shadow-sm hover:border-[#FF6B35] transition-all duration-300"
            >
              <img src={tool.icon} alt={`${tool.name} logo`} className="w-5 h-5 mr-3 object-contain" referrerPolicy="no-referrer" />
              <span className="font-medium text-[#1a1a1a] font-serif">{tool.name}</span>
              <span className="ml-3 text-xs px-2 py-0.5 bg-[#f9f7f2] text-slate-500 rounded-full font-mono uppercase tracking-wide">{tool.category}</span>
            </div>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8 py-4 pr-8">
          {[...tools, ...tools].map((tool, index) => (
            <div 
              key={`${tool.name}-${index}-2`}
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#e5e0d6] rounded-full shadow-sm hover:border-[#FF6B35] transition-all duration-300"
            >
              <img src={tool.icon} alt={`${tool.name} logo`} className="w-5 h-5 mr-3 object-contain" referrerPolicy="no-referrer" />
              <span className="font-medium text-[#1a1a1a] font-serif">{tool.name}</span>
              <span className="ml-3 text-xs px-2 py-0.5 bg-[#f9f7f2] text-slate-500 rounded-full font-mono uppercase tracking-wide">{tool.category}</span>
            </div>
          ))}
        </div>
      </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-b border-[#e5e0d6]">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden border border-[#e5e0d6] shadow-sm bg-slate-50"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1dKw-N0Yh18OS7zgGVvdBdXSvyJUgBKG5" 
              alt="Tools I Use" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
