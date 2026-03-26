import { motion } from "motion/react";
import { CheckSquare } from "lucide-react";

const steps = ["Align", "Execute", "Deliver", "Scale"];

export default function ProcessSteps() {
  return (
    <section className="py-8 md:py-12 bg-[#1a1a1a] overflow-hidden">
      <div className="w-full px-2 sm:px-6">
        <div className="flex flex-row flex-nowrap justify-center items-center gap-3 sm:gap-8 md:gap-16 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-1.5 md:gap-3 group cursor-default shrink-0"
            >
              <CheckSquare className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-8 md:h-8 text-[#008543] group-hover:scale-110 transition-transform duration-300" />
              <span className="text-[11px] sm:text-sm md:text-2xl lg:text-3xl font-sans font-extrabold tracking-widest text-white group-hover:text-[#008543] uppercase transition-colors duration-300">
                {step}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
