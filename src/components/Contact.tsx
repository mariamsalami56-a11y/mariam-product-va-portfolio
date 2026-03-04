import { motion } from "motion/react";
import { Send, Mail, Linkedin, Twitter, Copy } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-sans text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to build the future?
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            I'm currently available for freelance projects and open to full-time opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={copyEmail}
              className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors flex items-center gap-2 group"
            >
              hello@example.com
              {copied ? <span className="text-green-600 text-sm ml-1">Copied!</span> : <Copy className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />}
            </button>
            <a 
              href="https://www.linkedin.com/in/mariamxlamii/" 
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-slate-800 text-white rounded-full font-bold text-lg hover:bg-slate-700 transition-colors border border-slate-700"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
