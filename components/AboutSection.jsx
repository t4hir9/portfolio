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
      preload="auto"
      className="absolute inset-0 object-cover w-full h-full"
      style={{
        WebkitPlaysinline: true,
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
      }}
    >
      <source src="/about.MP4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,0,0,0.5)] to-[rgba(50,50,50,0.7)] dark:from-[rgba(20,20,20,0.5)] dark:to-[rgba(30,30,30,0.7)]"></div>

    <div className="mx-auto px-2 sm:px-3 lg:px-4 pb-40 relative z-10 w-full">
      <div className="grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-6">
          <h2 className="text-4xl md:text-5xl font-extralight text-neutral-100 dark:text-neutral-100 mb-12 tracking-tight">
            About Me
          </h2>
          <div className="space-y-8 text-lg text-neutral-300 dark:text-neutral-300 leading-relaxed font-light">
            <p>
              I&apos;m Abdullahi Tahir Adamu, a professional cinematographer and
              photographer with over 6 years of experience in visual
              storytelling. Based in Nigeria, I specialize in creating cinematic
              visuals that bring brand stories to life.
            </p>
            <p>
              My expertise spans across professional video editing, drone
              cinematography, and high-end photography. I've worked with
              numerous brands to deliver high-quality visual content that
              resonates with audiences. From capturing raw emotions in
              photography to the technical precision of color grading in
              post-production, I am dedicated to the craft of visual excellence.
            </p>
            <p>
              When I&apos;m not behind the camera or in the editing suite,
              you&apos;ll find me exploring new visual trends, making sure my
              creative vision remains at the forefront of the industry.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-16">
          {/* Skills Section */}
          <h3 className="text-xl font-light text-neutral-100 dark:text-neutral-100 mb-10 tracking-wide">
            Creative Expertise
          </h3>
          <div className="space-y-8">
            {[
              {
                category: "Cinematography",
                skills: ["Director", "Script writer", "Drone Pilot"],
              },
              {
                category: "Photography",
                skills: [
                  "Portraiture",
                  "Event Coverage",
                  "Product Photography",
                  "Nature",
                ],
              },
              {
                category: "Post-Production",
                skills: [
                  "Premiere Pro",
                  "After Effects",
                  "DaVinci Resolve",
                  "Photoshop",
                  "Lightroom",
                ],
              },
              {
                category: "Equipment",
                skills: [
                  "Camera settings",
                  "DJI Drones",
                  "Gimbal Operation",
                  "Studio Lighting",
                ],
              },
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
