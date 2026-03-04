import { motion } from "motion/react";

export default function ImageBanner() {
  return (
    <section className="w-full relative bg-white">
      <motion.img 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        src="https://lh3.googleusercontent.com/d/1lzZN4krYMvegKcSWaJ4XV8gzULMk_gDe" 
        alt="Modern Workspace" 
        className="w-full h-auto block"
        referrerPolicy="no-referrer"
      />
    </section>
  );
}
