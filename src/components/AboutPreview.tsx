import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="py-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Side - Big Heading */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-sans font-bold text-[#1a1a1a] leading-tight mb-8">
              Your Partner in <br />
              <span className="text-[#008543]">Product, Projects & <br />Virtual Assistance</span>
            </h2>
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 text-xl font-bold text-[#1a1a1a] hover:text-[#008543] transition-colors border-b-2 border-black hover:border-[#008543] pb-1"
            >
              Read More About Me <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          {/* Right Side - List/Content */}
          <div className="lg:w-1/2 pt-4">
            <div className="grid grid-cols-1 gap-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 bg-[#008543] rounded-full" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Passionate about every detail</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    I don't just manage products; I obsess over the user journey, the technical constraints, and the business outcomes. Every pixel and every prompt matters.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 bg-[#008543] rounded-full" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Dedicated to creating impact</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    My goal is always to build products that solve real problems. Whether it's automating a workflow or creating a new revenue stream, impact is the metric.
                  </p>
                </div>
              </div>


            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
