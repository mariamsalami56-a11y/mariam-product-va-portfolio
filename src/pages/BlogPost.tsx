import { motion } from "motion/react";
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  // In a real app, you'd fetch the post based on the ID. 
  // For now, we'll hardcode the content for the requested sample.
  
  return (
    <article className="min-h-screen bg-white pt-40 pb-20">
      {/* Header */}
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/case-studies" className="inline-flex items-center gap-2 text-[#008543] hover:text-[#1a1a1a] transition-colors mb-8 group font-bold text-lg">
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" /> Back to Case Studies
        </Link>
        
        <div className="mb-6 flex gap-3">
          <span className="px-3 py-1 bg-[#008543]/10 text-[#008543] rounded-full text-sm font-bold uppercase tracking-wider">
            Product Management
          </span>
          <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-bold uppercase tracking-wider">
            Case Study
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-sans font-bold text-[#1a1a1a] mb-8 leading-tight">
          How One Requirement Gathering Mistake Cost a FinTech Startup $5,000
        </h1>

        <div className="flex items-center justify-between border-b border-slate-200 pb-8 mb-12">
          <div className="flex items-center gap-4">
            <img 
              src="https://picsum.photos/seed/mariam/100/100" 
              alt="Mariam Salami" 
              className="w-12 h-12 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="font-bold text-[#1a1a1a]">Mariam Salami</div>
              <div className="text-sm text-slate-500 flex items-center gap-3">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Feb 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 5 min read</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-6 max-w-5xl mb-16">
        <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="https://picsum.photos/seed/fintech-mistake/1200/800" 
            alt="Team meeting discussing requirements" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="lead text-xl md:text-2xl font-medium text-slate-700 mb-8">
            When I joined the team, they were midway through a feature update for a payment processing dashboard. The timeline was aggressive, and the engineering team was confident. "It's just adding a new transaction filter," they told me during my onboarding.
          </p>

          <p>
            However, as I began to review the existing documentation and project status, I noticed a potential misalignment that had gone unchecked.
          </p>

          <p>
            The culprit? A single, ambiguous sentence in the PRD (Product Requirement Document) that hadn't been validated against real-world edge cases.
          </p>

          <h2 className="text-3xl font-bold text-[#1a1a1a] mt-12 mb-6">The "Simple" Request</h2>
          <p>
            The stakeholder request seemed straightforward: <em>"Allow enterprise users to filter transactions by 'Region'."</em>
          </p>
          <p>
            The team had interpreted this based on the user's profile location and had already spent about a week building a simple dropdown filter.
          </p>
          <p>
            My next step was to validate this assumption. I set up a quick sync with the Head of Operations to review the work-in-progress.
          </p>

          <h2 className="text-3xl font-bold text-[#1a1a1a] mt-12 mb-6">The Hidden Complexity</h2>
          <p>
            During the review, I presented the current implementation plan. She frowned.
          </p>
          <blockquote className="border-l-4 border-[#008543] pl-6 italic text-xl text-slate-700 my-8">
            "Wait, when you say 'Region', you mean the transaction origin, right? Not the user's location. Our enterprise clients have subsidiaries in multiple regions, but they view everything from a single HQ login."
          </blockquote>
          <p>
            This was the critical catch.
          </p>
          <p>
            Our current database architecture didn't tag individual transactions with a "Region" attribute. It only tagged the <em>Merchant ID</em> with a country code. To filter by region per transaction, we would need to:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mb-8">
            <li>Create a new mapping service to translate Country Codes to Regions.</li>
            <li>Update the ingestion pipeline to tag every incoming transaction.</li>
          </ol>

          <h2 className="text-3xl font-bold text-[#1a1a1a] mt-12 mb-6">The Impact of Early Detection</h2>
          <p>
            Because I caught this discrepancy early in my tenure, we were able to pivot before the feature went too far.
          </p>
          <p>
            The team had to scrap about a week's worth of frontend work, costing the company roughly <strong>$5,000</strong> in engineering hours.
          </p>
          <p>
            However, if this had gone to production as originally planned, it would have required a full architectural rewrite post-launch, potentially costing 10x that amount and damaging client trust.
          </p>

          <h2 className="text-3xl font-bold text-[#1a1a1a] mt-12 mb-6">The Lesson: "Show, Don't Just Tell"</h2>
          <p>
            This experience reinforced why I prioritize <strong>Low-Fidelity Data Mockups</strong> in my requirements gathering process.
          </p>
          <p>
            Instead of just writing "Filter by Region," I now always present a mock table to stakeholders:
          </p>
          <div className="bg-slate-100 p-6 rounded-lg my-8 font-mono text-sm">
            <p className="mb-2"><strong>Transaction ID | Amount | Region (Filter)</strong></p>
            <p>TXN_123 | $500.00 | [North America]</p>
            <p>TXN_124 | $20.00 | [EMEA]</p>
          </div>
          <p>
            Visualizing the data requirement bridges the gap between technical implementation and business intent, ensuring everyone is aligned before a single line of code is written.
          </p>

          <h2 className="text-3xl font-bold text-[#1a1a1a] mt-12 mb-6">Key Takeaway</h2>
          <p>
            Ambiguity is the most expensive bug you can have. As a Product Manager, my role is to question assumptions and validate understanding early.
          </p>
          <p className="font-bold text-[#008543]">
            It costs $0 to change a requirement in a Google Doc. It costs thousands to change it in code.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-20 p-10 bg-[#008543] rounded-2xl text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Need help defining clear requirements?</h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            I help companies avoid costly mistakes by building robust product specifications and validating assumptions early.
          </p>
          <a 
            href="mailto:mariamsalami56@gmail.com"
            className="inline-block px-8 py-4 bg-white text-[#008543] font-bold rounded-full hover:bg-black hover:text-white transition-all shadow-lg"
          >
            Hire Me as Your PM
          </a>
        </div>
      </div>
    </article>
  );
}
