import React from "react";
import { ArrowRight, Download, MapPin } from "lucide-react";

const HeroSection = ({ scrollToSection }) => (
  <section id="home" className="pt-16 pb-40 scroll-mt-16">
    <div className="max-w-5xl">
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-200/50 dark:border-green-800/50 rounded-full text-xs font-medium text-green-700 dark:text-green-400 mb-12 backdrop-blur-sm">
        <div className="w-2 h-2 bg-green-400 dark:bg-green-500 rounded-full animate-pulse" />
        Available for new projects
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-neutral-900 dark:text-neutral-100 leading-[0.9] mb-8 tracking-tight">
        Front-end Developer
        <br />
        <span className="text-neutral-500 dark:text-neutral-400 italic font-thin">
          &
        </span>{" "}
        UI Enthusiast
      </h1>

      <div className="max-w-2xl mb-16">
        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-light mb-8">
          I craft digital experiences that are both beautiful and functional, focusing on clean code and thoughtful design.
        </p>

        <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400 font-light">
          <MapPin className="w-4 h-4" />
          <span>Based in India, originally from Nigeria</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => scrollToSection("work")}
          className="group inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-light rounded-none hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-900/20 dark:hover:shadow-neutral-100/20 hover:-translate-y-0.5"
          aria-label="View my selected work portfolio"
        >
          <span>View Selected Work</span>
          <ArrowRight
            className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
            aria-hidden="true"
          />
        </button>

        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-3 px-10 py-5 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-light rounded-none hover:bg-white dark:hover:bg-neutral-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500"
          aria-label="Download my resume"
        >
          <Download className="w-4 h-4" />
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
