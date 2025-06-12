import React from "react";

const AboutSection = () => (
  <section id="about" className="pb-40 scroll-mt-[150px]">
    <div className="grid lg:grid-cols-12 gap-20">
      <div className="lg:col-span-6">
        <h2 className="text-4xl md:text-5xl font-extralight text-neutral-900 dark:text-neutral-100 mb-12 tracking-tight">
          About Me
        </h2>
        <div className="space-y-8 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
          <p>
            Originally from Nigeria and now based in India, I bring a unique perspective to every project I work on. My journey in web development started with a curiosity about how beautiful interfaces come to life.
          </p>
          <p>
            I specialize in creating digital experiences that are not just visually appealing, but also performant, accessible, and user-friendly. Every line of code I write and every pixel I place is intentional.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new design trends, contributing to open-source projects, or mentoring upcoming developers in my community.
          </p>
        </div>
      </div>

      <div className="lg:col-span-6 space-y-16">
        {/* Skills Section */}
        <h3 className="text-xl font-light text-neutral-900 dark:text-neutral-100 mb-10 tracking-wide">
          Skills & Technologies
        </h3>
        <div className="space-y-8">
          {[
            { category: "Frontend", skills: ["JavaScript", "React", "Next.js", "TypeScript"] },
            { category: "Styling", skills: ["Tailwind CSS", "CSS-in-JS", "Responsive Design"] },
            { category: "Tools", skills: ["Git", "Figma", "VS Code", "Vercel"] },
            { category: "Backend", skills: ["Node.js", "Supabase", "API Integration"] }
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
  </section>
);

export default AboutSection;
