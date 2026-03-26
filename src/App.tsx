/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tools from "./components/Tools";
import WhyChooseMe from "./components/WhyChooseMe";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Work from "./pages/Work";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import BlogPost from "./pages/BlogPost";
import AboutPreview from "./components/AboutPreview";
import ScrollToTop from "./components/ScrollToTop";
import WorkRedirect from "./components/WorkRedirect";
import ProcessSteps from "./components/ProcessSteps";

function HomePage() {
  return (
    <>
      <Hero />
      <Tools />
      <WhyChooseMe />
      <Services />
      <ProcessSteps />
      <WorkRedirect />
      {/* <AboutPreview /> */}
      <Reviews />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-[#1a1a1a] selection:bg-[#008543] selection:text-white">
        <Navbar />
        <main className="relative z-10 bg-white mb-0 md:mb-[500px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<CaseStudies />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
