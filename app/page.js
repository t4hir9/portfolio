"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Linkedin,
  Github,
  MapPin,
} from "lucide-react";
import WorkSection from "@/components/WorkSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Simulate content loading
    const timer = setTimeout(() => setIsLoaded(true), 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-neutral-50 dark:bg-black overflow-x-hidden">
        <main
          className={`relative z-10 px-6 pt-10 max-w-5xl mx-auto transition-opacity duration-1500 ease-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Enhanced Hero Section */}
          <section className="pt-16 pb-40">
            <div className="max-w-5xl">
              {/* Enhanced status badge */}
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
                  I craft digital experiences that are both beautiful and
                  functional, focusing on clean code and thoughtful design.
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

          {/* Enhanced Featured Work */}
          <WorkSection />

          {/* Enhanced About */}
          <section id="about" className="pb-40 scroll-mt-[84.67px]">
            <div className="grid lg:grid-cols-12 gap-20">
              <div className="lg:col-span-6">
                <h2 className="text-4xl md:text-5xl font-extralight text-neutral-900 dark:text-neutral-100 mb-12 tracking-tight">
                  About Me
                </h2>
                <div className="space-y-8 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
                  <p>
                    Originally from Nigeria and now based in India, I bring a
                    unique perspective to every project I work on. My journey in
                    web development started with a curiosity about how beautiful
                    interfaces come to life.
                  </p>
                  <p>
                    I specialize in creating digital experiences that are not
                    just visually appealing, but also performant, accessible,
                    and user-friendly. Every line of code I write and every
                    pixel I place is intentional.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new
                    design trends, contributing to open-source projects, or
                    mentoring upcoming developers in my community.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-16">
                <div>
                  <h3 className="text-xl font-light text-neutral-900 dark:text-neutral-100 mb-10 tracking-wide">
                    Skills & Technologies
                  </h3>
                  <div className="space-y-8">
                    {[
                      {
                        category: "Frontend",
                        skills: [
                          "JavaScript",
                          "React",
                          "Next.js",
                          "TypeScript",
                        ],
                      },
                      {
                        category: "Styling",
                        skills: [
                          "Tailwind CSS",
                          "CSS-in-JS",
                          "Responsive Design",
                        ],
                      },
                      {
                        category: "Tools",
                        skills: ["Git", "Figma", "VS Code", "Vercel"],
                      },
                      {
                        category: "Backend",
                        skills: ["Node.js", "Supabase", "API Integration"],
                      },
                    ].map((group) => (
                      <div key={group.category} className="group/skill">
                        <div className="grid grid-cols-12 gap-4 items-start">
                          <div className="col-span-3 text-sm font-medium text-neutral-500 dark:text-neutral-400 pt-1 tracking-wider">
                            {group.category.toUpperCase()}
                          </div>
                          <div className="col-span-9">
                            <div className="flex flex-wrap gap-3">
                              {group.skills.map((skill, index) => (
                                <span
                                  key={skill}
                                  className="text-sm text-neutral-700 dark:text-neutral-300 font-mono px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-300"
                                  style={{ animationDelay: `${index * 100}ms` }}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Contact */}
          <section id="contact" className="pb-40 scroll-mt-[84.67px]">
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-extralight text-neutral-900 dark:text-neutral-100 mb-12 tracking-tight">
                Let&apos;s Work Together
              </h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-16 max-w-3xl font-light">
                I&apos;m always excited to hear about new projects and
                opportunities. Whether you&apos;re a startup or an established
                company, let&apos;s create something exceptional together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a
                  href="mailto:your.email@example.com"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-light rounded-none hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-0.5"
                  aria-label="Send me an email"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send me an email</span>
                </a>

                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-light rounded-none hover:bg-white dark:hover:bg-neutral-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500"
                  aria-label="Connect with me on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>

              <div className="text-sm text-neutral-500 dark:text-neutral-400 font-light tracking-wide">
                Currently available for freelance projects and full-time
                opportunities
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
