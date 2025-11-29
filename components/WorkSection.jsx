"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const WorkSection = () => {
  const [imageErrors, setImageErrors] = useState({});

  const projects = [
    {
      title: "Jaybash Customs Website",
      description:
        "A state-of-the-art website for car customization and drift school. Users can customize their rides and book drift lessons with a modern, responsive interface.",
      year: "2025",
      role: "Frontend Developer",
      duration: "4 weeks",
      tech: ["TypeScript", "Tailwind CSS", "Next.js"],
      image: "/jaybashcustoms.png",
      fallbackIcon: "💱",
      url: "https://jaybash-customs.vercel.app",
    },
    {
      title: "Mindspace Platform",
      description:
        "A mental health platform created to help students with resources and a safe space to talk. Built with React and Supabase for secure, real-time data management.",
      year: "2024",
      role: "Full Stack Developer",
      duration: "12 weeks",
      tech: ["React", "Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
      image: "/mindspace.png",
      fallbackIcon: "📋",
      url: "https://mindspace.vercel.app",
    },
    {
      title: "Boride Ride-Hailing App",
      description:
        "A comprehensive ride-hailing application with real-time features and secure payment integration. Built with React Native backend and Node.js for a complete mobile experience.",
      year: "2023",
      role: "Frontend Developer",
      duration: "Ongoing",
      tech: ["React Native", "Node.js", "Real-time Features", "Payment Integration"],
      image: "/boride.png",
      fallbackIcon: "🚗",
    },
    {
      title: "Crypto Portfolio Tracker dApp",
      description:
        "A decentralized application for tracking cryptocurrency portfolios. Built with Web3.js integration for wallet connectivity and real-time blockchain data.",
      year: "2023",
      role: "Frontend Developer",
      duration: "8 weeks",
      tech: ["Web3.js", "React", "Ethereum", "Blockchain"],
      image: "/crypto-tracker.png",
      fallbackIcon: "₿",
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
          Projects
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
