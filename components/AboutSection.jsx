
"use client"; // Added for potential client-side enhancements

import React from "react";

const AboutSection = () => (
  <section
    id="about"
    className="min-h-screen w-full relative scroll-mt-[150px]"
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
              Hello! I&apos;m Tahir, a passionate Front-End Developer based in Nigeria. With a keen eye for design and a love for coding, I bring ideas to life on the web.
            </p>
            <p>
              I specialize in creating digital experiences that are not just visually appealing, but also performant, accessible, and user-friendly. Every line of code I write and every story or vision I bring to life is intentional.
            </p>
            <p>
              When I&apos;m not coding or creating magic with my camera, you&apos;ll find me exploring new design trends, making sure my ideas and vision are as sharp and sturdy as the world adapts.
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
              { category: "Frontend", skills: ["HTML", "JavaScript", "React", "Next.js"] },
              { category: "Styling", skills: ["Tailwind CSS", "CSS-in-JS"] },
              { category: "Tools", skills: ["Git", "WordPress", "VS Code", "Vercel"] },
              { category: "Media", skills: ["Photoshop", "DaVinci Resolve", "Premiere Pro"] }
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