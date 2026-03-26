import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const hash = href.substring(1);
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(hash);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("#")) {
       if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/work" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md text-[#1a1a1a] py-6 md:py-8 border-b border-gray-100`}
    >
      <div className="container mx-auto px-6 flex items-start justify-between">
        <div className="flex flex-col">
          <Link to="/" className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#1a1a1a] leading-none hover:opacity-80 transition-opacity">
            Mariam Salami
          </Link>
          <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 border border-gray-200 rounded-lg bg-gray-50 w-fit">
            <div className="w-2 h-2 bg-[#008543] rounded-full animate-pulse shadow-[0_0_8px_#008543]" />
            <span className="text-xs md:text-sm font-medium tracking-wide text-gray-600">Available for Projects</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12 pt-2">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.href)}
              className="text-xl font-sans font-medium text-[#1a1a1a] hover:text-[#008543] transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              {link.name}
            </button>
          ))}
          <a 
            href="mailto:mariamsalami56@gmail.com"
            className="px-8 py-3 bg-[#1a1a1a] text-white text-lg font-sans font-bold rounded-full hover:bg-[#008543] transition-all cursor-pointer shadow-md hover:shadow-lg"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-[#1a1a1a] pt-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-white border-t border-gray-100 p-6 lg:hidden absolute top-full left-0 right-0 shadow-xl"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.href)}
                className="text-3xl font-sans font-bold text-[#1a1a1a] text-left hover:text-[#008543]"
              >
                {link.name}
              </button>
            ))}
            <a 
              href="mailto:mariamsalami56@gmail.com"
              className="text-2xl font-sans font-bold text-white bg-[#1a1a1a] text-center py-4 rounded-xl mt-4 shadow-lg active:scale-95 transition-transform hover:bg-[#008543]"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
