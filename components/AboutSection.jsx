
"use client"; // Added for potential client-side enhancements

import React from "react";

const AboutSection = () => (
  <section
    id="about"
    className="min-h-screen w-full relative scroll-mt-[100px]"
  >
    {/* Video Background */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 object-cover w-full h-full"
    >
      <source src="/about.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,0,0,0.5)] to-[rgba(50,50,50,0.7)] dark:from-[rgba(20,20,20,0.5)] dark:to-[rgba(30,30,30,0.7)]"></div>

    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-40 relative z-10">
      <div className="grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-6">
          <h2 className="text-4xl md:text-5xl font-extralight text-neutral-100 dark:text-neutral-100 mb-12 tracking-tight">
            About Me
          </h2>
          <div className="space-y-8 text-lg text-neutral-300 dark:text-neutral-300 leading-relaxed font-light">
            <p>
              I&apos;m Abdullahi Tahir Adamu, a Front-End Developer with 6+ years of experience building modern web applications using React, Next.js, TypeScript, and Tailwind CSS. Based in Kaduna, Nigeria, I craft digital experiences that are both beautiful and functional, focusing on clean code and thoughtful design.
            </p>
            <p>
              I specialize in creating digital experiences that are not just visually appealing, but also performant, accessible, and user-friendly. My expertise spans Web3 interfaces, wallet integrations, and decentralized dashboards. I&apos;ve built responsive web applications with real-time features and secure payment integrations, achieving a 40% performance improvement through optimization and lazy loading.
            </p>
            <p>
              Beyond development, I&apos;m also a skilled cinematographer and media expert producing cinematic ads and tech visuals using Adobe Premiere Pro and DaVinci Resolve. I&apos;ve boosted brand engagement by 25%+ through strategic content creation and delivered drone cinematography for campaigns and events.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-16">
          {/* Skills Section */}
          <h3 className="text-xl font-light text-neutral-100 dark:text-neutral-100 mb-10 tracking-wide">
            Skills & Technologies
          </h3>
          <div className="space-y-8">
            {[
              { category: "Technical", skills: ["JavaScript", "TypeScript", "React", "Next.js", "React Native", "Python", "C++", "Git"] },
              { category: "Web3", skills: ["Web3.js", "Ethereum", "Wallet Integration", "dApp Prototyping"] },
              { category: "Styling & Tools", skills: ["Tailwind CSS", "VS Code", "Vercel", "TypeScript"] },
              { category: "Creative", skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Photography", "Drone Cinematography"] }
            ].map((group) => (
              <div key={group.category} className="group/skill">
                <div className="grid grid-cols-12 gap-4 items-start">
                  <div className="col-span-3 text-sm font-medium text-neutral-400 dark:text-neutral-400 pt-1 tracking-wider">
                    {group.category.toUpperCase()}
                  </div>
                  <div className="col-span-9">
                    <div className="flex flex-wrap gap-3">
                      {group.skills.map((skill, index) => (
                        <span
                          key={skill}
                          className="text-sm text-neutral-300 dark:text-neutral-300 font-mono px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-300"
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
);

export default AboutSection;