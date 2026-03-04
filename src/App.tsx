/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tools from "./components/Tools";
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
import ImageBanner from "./components/ImageBanner";

function HomePage() {
  return (
    <>
      <Hero />
      <Tools />
      <AboutPreview />
      <ImageBanner />
      <Services />
      <WorkRedirect />
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
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
