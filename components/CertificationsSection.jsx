"use client";

import React from "react";
import { Award } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Google UX Design Certificate",
      year: "2025",
      icon: "🎨",
    },
    {
      title: "Meta Front-End Developer Certificate",
      year: "2024",
      icon: "💻",
    },
    {
      title: "IBM Blockchain Essentials",
      year: "2025",
      icon: "⛓️",
    },
    {
      title: "Adobe Certified Expert – Premiere Pro",
      year: "2023",
      icon: "🎬",
    },
    {
      title: "AWS Cloud Practitioner",
      year: "2024",
      icon: "☁️",
    },
    {
      title: "Consensys Blockchain Developer",
      year: "2025",
      icon: "🔐",
    },
    {
      title: "Drone Pilot Certification – NCAA",
      year: "2022",
      icon: "🚁",
    },
  ];

  return (
    <section id="certifications" className="py-20 scroll-mt-[150px]">
      <div className="max-w-5xl">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-extralight text-neutral-900 dark:text-neutral-100 tracking-tight">
              Certifications
            </h2>
          </div>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl font-light">
            Professional certifications and achievements that validate my expertise across frontend development, Web3, design, and creative technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group p-6 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 rounded-lg hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{cert.icon}</span>
                <span className="text-xs font-mono text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">
                  {cert.year}
                </span>
              </div>
              <h3 className="text-sm md:text-base font-medium text-neutral-900 dark:text-neutral-100 leading-tight group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-200">
                {cert.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
