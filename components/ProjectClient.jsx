"use client";

import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

const ProjectsClient = () => {
  const [imageErrors, setImageErrors] = useState({});
  const router = useRouter();

  const projects = [
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
    {
      title: "TaskFlow - Task Management Dashboard",
      description:
        "A project management tool designed for small to medium teams with focus on simplicity and productivity.",
      year: "2024",
      role: "Full Stack",
      duration: "8 weeks",
      tech: ["React", "Next.js", "Firebase", "Tailwind CSS", "Clerk"],
      image: "/taskflow.png",
      fallbackIcon: "📋",
      url: "https://taskkflow.vercel.app",
    },
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
      title: "Essential Musik - Music Label Website",
      description:
        "A modern website for a music label showcasing artists, albums, and events with a focus on user engagement.",
      year: "2025",
      role: "Frontend Developer",
      duration: "2 weeks",
      tech: ["Next.js", "Tailwind CSS"],
      image: "/essentialmusik.png",
      fallbackIcon: "🎵",
      url: "https://essential-musik.vercel.app",
    },
  ];

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto px-6 pt-8 pb-20">
          {/* Header */}
          <header className="mb-16">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Back to Home</span>
            </button>

            <div>
              <h1 className="text-4xl md:text-5xl font-extralight text-neutral-900 dark:text-neutral-100 mb-12 tracking-tight">
                All Projects
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-16 max-w-3xl font-light">
                A collection of projects that showcase my approach to solving
                complex problems through thoughtful design and clean
                implementation.
              </p>
            </div>
          </header>

          {/* Projects Grid */}
          <div className="space-y-20">
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

          <h2 className="mt-4 text-center text-xl md:text-2xl font-light text-neutral-900 dark:text-neutral-100 mb-4">
            More Projects Coming Soon...
          </h2>

          {/* Footer CTA */}
          <div className="pt-20 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-4">
                Interested in working together?
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-8">
                I&apos;m always open to discussing new opportunities and
                interesting projects.
              </p>
              <a
                href="mailto:alhajikhaleel@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200 font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer homepage={false} />
    </>
  );
};

export default ProjectsClient;
