import { motion } from "motion/react";
import { CheckCircle2, Award, Briefcase, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: <Award className="w-8 h-8 text-[#008543]" />,
    title: "4+ Years",
    description: "Learning & Experience",
    detail: "Deep industry knowledge and continuous growth to bring you the best solutions."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-[#008543]" />,
    title: "10+",
    description: "Projects Delivered",
    detail: "A proven track record of successful project execution from start to finish."
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-[#008543]" />,
    title: "100%",
    description: "Commitment to Results",
    detail: "Dedicated to your success, ensuring every milestone is met."
  }
];

export default function WhyChooseMe() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#e5e0d6]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#1a1a1a] mb-4">
            Why Choose Me
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Partner with someone who brings experience, dedication, and a proven track record to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:border-[#008543] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-4xl font-bold text-[#1a1a1a] mb-2">{reason.title}</h3>
              <h4 className="text-xl font-bold text-[#008543] mb-4">{reason.description}</h4>
              <p className="text-slate-600 font-medium">
                {reason.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
