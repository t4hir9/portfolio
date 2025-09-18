"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const WorkSection = () => {
  const [imageErrors, setImageErrors] = useState({});

  const projects = [
    {
      title: "jaybash Customs - Car Customization & Drift School",
      description:
        "A state of the art website built for the one and only drift king. Users can customise their rides and book drift lessons.",
      year: "2025",
      role: "Frontend Developer",
      duration: "4 weeks",
      tech: ["Nextjs", "Tailwind CSS", "typescript"],
      image: "/jaybashcustoms.png",
      fallbackIcon: "💱",
      url: "https://jaybash-customs.vercel.app",
    },
    {
      title: "mindspace - Mental Health Platform",
      description:
        "A project created to help students with their mental health by providing resources and a safe space to talk.",
      year: "2024",
      role: "Full Stack",
      duration: "12 weeks",
      tech: ["React", "Next.js", "Supabase", "Tailwind CSS", "TypeScriptS"],
      image: "/mindspace.png",
      fallbackIcon: "📋",
      url: "https://mindspace.vercel.app",
    },
    {
      title: "Media samples",
      description:
        "A collection of media projects including photography and videography samples showcasing my skills and creativity.",
      year: "2020 - Present",
      role: "Media Expert",
      duration: "Ongoing",
      tech: ["Photoshop", "Premiere Pro", "After Effects", "DaVinci Resolve"],
      images: ["/background2.JPG", "/background3.JPG", "/background.JPG","/photos/17.jpg","/photos/27.jpg","/photos/29.jpg","/photos/52.jpg","/photos/54.jpg","/photos/65.jpg","/photos/61.jpg"],
      fallbackIcon: "🎥",
      pictureUrl: "/photos",
      videoUrl:"/videos",
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
