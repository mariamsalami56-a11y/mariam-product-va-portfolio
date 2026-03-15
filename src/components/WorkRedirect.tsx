import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function WorkRedirect() {
  return (
    <section className="py-16 bg-[#f9f7f2] border-t border-[#e5e0d6]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-sans font-bold text-[#1a1a1a] mb-6 leading-tight">
              Ready to see what we can build together?
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Explore a curated selection of my past projects, where I've helped businesses streamline operations and launch successful AI products.
            </p>
          </div>
          
          <Link 
            to="/work"
            className="group flex items-center justify-center gap-4 px-10 py-5 bg-[#1a1a1a] text-white text-xl font-bold rounded-full hover:bg-[#008543] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 shrink-0 w-full md:w-auto"
          >
            View My Past Projects
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
