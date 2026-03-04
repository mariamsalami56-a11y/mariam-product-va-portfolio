import { Mail, Linkedin, Github, Calendar, FileText } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative md:sticky bottom-0 z-0 bg-[#008543] text-white py-16 md:py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-20"
        >
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight tracking-tight uppercase font-sans">
              Stop Juggling Tasks Alone.
            </h3>
            <div className="text-lg text-white/80 max-w-md mb-8 font-medium space-y-2">
              <p>Let's Make Your Projects Run Smoothly Together.</p>
              <p>Hire the right support who keeps your business running smoothly.</p>
            </div>
            <div className="flex gap-4">
              <a 
                href="mailto:mariamsalami56@gmail.com" 
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#008543] hover:bg-black hover:text-white transition-all"
                aria-label="Email Me"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mariamxlamii/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#008543] hover:bg-black hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/mariamsalami56-a11y" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#008543] hover:bg-black hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-sans font-bold text-xl mb-6 md:mb-8">Quick Actions</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://calendly.com/mariamsalami56/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-black transition-colors group text-lg font-medium"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Consultation</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://forms.gle/LucckVL77zfCh58YA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-black transition-colors group text-lg font-medium"
                >
                  <FileText className="w-5 h-5" />
                  <span>Request Service</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-sans font-bold text-xl mb-6 md:mb-8">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:mariamsalami56@gmail.com" className="hover:text-black transition-colors flex items-center gap-3 text-lg font-medium">
                  <Mail className="w-5 h-5" /> Get in Touch
                </a>
              </li>
              <li className="text-white/70 font-medium">
                Available for remote work worldwide.
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-sm font-medium tracking-wide">
            © 2026 Mariam Salami. Portfolio crafted with care by <a href="mailto:mariamsalami56@gmail.com" className="hover:text-black transition-colors underline decoration-white/50 hover:decoration-black">Mariam Salami</a>. 🤍
          </p>
          <div className="flex gap-8 text-sm font-medium tracking-wide">
            <span className="cursor-pointer hover:text-black transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-black transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
