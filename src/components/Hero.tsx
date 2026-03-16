import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Hero() {
  const words = ["Growth", "Product", "Vision"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white pt-32 md:pt-40 pb-0">
      <div className="container mx-auto px-6 pb-8 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-sans font-bold text-[#1a1a1a] leading-tight mb-6 md:mb-8">
            Operations shouldn’t slow your{" "}
            <span className="inline-flex min-w-[4ch]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="font-cursive italic text-[#008543]"
                >
                  {words[index]}.
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          <div className="text-lg md:text-2xl text-gray-600 max-w-2xl font-light leading-relaxed mb-10 space-y-2">
            <p className="font-bold text-[#1a1a1a]">
              Still Juggling Projects, Tasks, and Operations alone?
            </p>
            <p>
             Hi, I’m Mariam! I help businesses stay organized, manage projects efficiently, and build simple systems that eliminate bottlenecks and save valuable time.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/about" 
              className="px-8 py-4 bg-[#1a1a1a] text-white font-bold rounded-full hover:bg-[#008543] transition-all duration-300 text-center text-lg shadow-lg hover:shadow-xl"
            >
              Read More About Me
            </Link>
            <a 
              href="https://calendly.com/mariamsalami56/30min"
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 border border-gray-300 text-[#1a1a1a] font-bold rounded-full hover:border-[#008543] hover:text-[#008543] transition-all duration-300 text-center text-lg"
            >
              Book a Discovery Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
