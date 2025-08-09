"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const WorkSection = () => {
  const [imageErrors, setImageErrors] = useState({});

  const projects = [
    {
      title: "Marginplus - Agricultural Investment Platform",
      description:
        "A platform connecting farmers with investors to fund agricultural projects, focusing on transparency and impact.",
      year: "2025",
      role: "Frontend Developer",
      duration: "12 weeks",
      tech: ["Next.js", "Tailwind CSS"],
      image: "/marginplus.png",
      fallbackIcon: "🌾",
      url: "https://marginplus.ng",
    },

    {
      title: "AbujaBureauDeChange - FX Exchange App",
      description:
        "A real-time foreign exchange application that provides live currency rates and conversion tools with a focus on speed and reliability.",
      year: "2024",
      role: "Frontend Developer",
      duration: "16 weeks",
      tech: ["React", "Tailwind CSS", "Clerk", "Chart.js"],
      image: "/fx.png",
      fallbackIcon: "💱",
      url: "https://abujabureaudechange.vercel.app",
    },
  ];

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section id="work" className="pb-40 scroll-mt-[150px]">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-extralight text-neutral-900 dark:text-neutral-100 mb-12 tracking-tight">
          Selected Projects
        </h2>

        <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-16 max-w-3xl font-light">
          Recent projects that showcase thoughtful design and clean
          implementation.
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
