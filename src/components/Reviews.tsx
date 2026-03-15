import { motion } from "motion/react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

const reviews = [
  {
    name: "Tobby Aj***",
    role: "Product Designer",
    content: "Working with Mariam was nice; She encouraged design thinking and kept the team aligned. Her ability to turn vision into action made my designer role impactful. Mariam's leadership balanced creativity and execution, leading to successful projects.",
    rating: 5,
    image: "https://picsum.photos/seed/tobby/100/100",
    link: "https://www.linkedin.com/in/ajayi-toby-a90693185"
  },
  {
    name: "Afolabi O****",
    role: "Full Stack Dev",
    content: "I worked with Mariam at EarnIQ, where she excelled as Product Manager. She showed ownership, communication, and effectively translated business needs into actions for the technical team. She also handled challenges well.",
    rating: 5,
    image: "https://picsum.photos/seed/afolabi/100/100",
    link: "https://www.linkedin.com/in/afolabi-ogunbanwo-478038161/"
  },
  {
    name: "Chris D***",
    role: "Business Analyst",
    content: "Working with Mariam as PM made my role much easier. She consistently communicated the product vision in a way that helped me translate it into actionable requirements and milestones. Her foresight in identifying potential blockers and her proactive approach to resolving them ensured our delivery stayed on track.",
    rating: 5,
    image: "https://picsum.photos/seed/chris/100/100",
    link: "https://www.linkedin.com/in/chinedu-dim-389bb9270"
  }
];

export default function Reviews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="text-center md:text-left max-w-2xl mx-auto md:mx-0">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#1a1a1a] mb-4">What Clients Say</h2>
            <p className="text-lg text-slate-600 font-light">
              Trusted by founders and product leaders to deliver exceptional results.
            </p>
          </div>
          
          {/* Mobile Navigation Arrows */}
          <div className="flex gap-4 mt-8 lg:hidden justify-center w-full">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors"
              aria-label="Previous review"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors"
              aria-label="Next review"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-8 pb-8 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-hide"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[85vw] lg:min-w-0 snap-center bg-white p-8 md:p-10 border border-slate-200 relative hover:border-[#008543] transition-colors duration-300 flex flex-col justify-between h-full rounded-2xl shadow-sm hover:shadow-md"
            >
              <div>
                <Quote className="absolute top-6 right-6 md:top-8 md:right-8 w-8 h-8 md:w-10 md:h-10 text-slate-100" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#008543] text-[#008543]" />
                  ))}
                </div>

                <p className="text-[#1a1a1a] mb-8 leading-relaxed font-sans text-lg">
                  "{review.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <a 
                    href={review.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#1a1a1a] font-sans hover:text-[#008543] underline decoration-slate-300 hover:decoration-[#008543] underline-offset-4 transition-all"
                  >
                    {review.name}
                  </a>
                  <div className="text-sm text-slate-500 uppercase tracking-wider text-xs mt-1">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
