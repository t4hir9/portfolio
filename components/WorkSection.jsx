"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const WorkSection = () => {
  const [imageErrors, setImageErrors] = useState({});

  const projects = [
    {
      title: "Photography",
      description:
        "A curated collection of professional photography, capturing moments across Nigeria. From portraits to event coverage and drone shots.",
      year: "2020 - Present",
      role: "Photographer",
      duration: "Ongoing",
      tech: ["Photoshop", "Lightroom", "Composition", "Lighting"],
      images: ["/photos/1.jpg", "/photos/2.jpg", "/photos/3.jpg", "/photos/4.jpg", "/photos/5.jpg"],
      fallbackIcon: "📸",
      pictureUrl: "/photos",
    },
    {
      title: "Cinematography",
      description:
        "Professional video production and editing. Cinematic storytelling for brands, events, and creative projects.",
      year: "2020 - Present",
      role: "Cinematographer",
      duration: "Ongoing",
      tech: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Drone Cinematography"],
      images: ["/background.JPG", "/background2.JPG", "/background3.JPG"],
      fallbackIcon: "🎥",
      videoUrl: "/videos",
    },
  ];

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section id="work" className="pb-40 scroll-mt-[150px]">
      <div className="mb-16">
        <h2 className="section-title-cinematic mb-4">
          Projects
        </h2>
        <div className="cinematic-divider mb-8"></div>

        <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-16 max-w-3xl font-light animate-fade-in-up">
          Recent projects that showcase thoughtful design and clean implementation. Each project represents a blend of creative problem-solving and technical excellence tailored to deliver results.
        </p>
      </div>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            imageErrors={imageErrors}
            handleImageError={handleImageError}
          />
        ))}
      </div>

      <div className="pt-16 text-center">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-neutral-900 dark:text-neutral-100 hover:gap-3 transition-all duration-200 font-medium"
        >
          <span>View All Projects</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default WorkSection;
