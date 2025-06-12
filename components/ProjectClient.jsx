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
    // {
    //   title: "Accommodation Finder",
    //   description:
    //     "A comprehensive platform designed to help African students find suitable housing in India. Built with a focus on user experience and real-time data integration.",
    //   year: "2024",
    //   role: "Lead Frontend",
    //   duration: "12 weeks",
    //   tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    //   image: "/accommodation.png",
    //   fallbackIcon: "🏠",
    // },
    {
      title: "FX Exchange App",
      description:
        "A real-time foreign exchange application that provides live currency rates and conversion tools with a focus on speed and reliability.",
      year: "2024",
      role: "Solo Project",
      duration: "8 weeks",
      tech: ["React", "Tailwind CSS", "Clerk", "Chart.js"],
      image: "/fx.png",
      fallbackIcon: "💱",
    },
    {
      title: "Task Management Dashboard",
      description:
        "A collaborative project management tool designed for small to medium teams with focus on simplicity and productivity.",
      year: "2023",
      role: "Full Stack",
      duration: "16 weeks",
      tech: ["React", "Node.js", "PostgreSQL", "Express"],
      image: "/taskflow.png",
      fallbackIcon: "📋",
    },
    // {
    //   title: "E-commerce Analytics",
    //   description:
    //     "Advanced analytics platform for e-commerce businesses to track performance, customer behavior, and sales trends.",
    //   year: "2023",
    //   role: "Frontend Lead",
    //   duration: "20 weeks",
    //   tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
    //   image: "/analytics.png",
    //   fallbackIcon: "📊",
    // },
    // {
    //   title: "Learning Management System",
    //   description:
    //     "Educational platform with course management, progress tracking, and interactive learning modules for online education.",
    //   year: "2023",
    //   role: "Full Stack",
    //   duration: "24 weeks",
    //   tech: ["React", "Django", "PostgreSQL", "Redis"],
    //   image: "/lms.png",
    //   fallbackIcon: "🎓",
    // },
    // {
    //   title: "Social Media Dashboard",
    //   description:
    //     "Unified dashboard for managing multiple social media accounts with scheduling, analytics, and engagement tracking.",
    //   year: "2022",
    //   role: "Frontend Developer",
    //   duration: "14 weeks",
    //   tech: ["Angular", "TypeScript", "Node.js", "MongoDB"],
    //   image: "/social.png",
    //   fallbackIcon: "📱",
    // },
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
                href="mailto:contact@example.com"
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
