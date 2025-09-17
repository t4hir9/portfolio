"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({ project, index, imageErrors, handleImageError }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (project.title === "Media samples" && project.images) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
      }, 2000); // Change image every 2 seconds

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [project.title, project.images]);

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
      {/* Image/Slideshow */}
      <div className="flex-1">
        {project.title === "Media samples" && project.images ? (
          imageErrors[index] ? (
            <div className="w-full h-64 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-4xl">
              {project.fallbackIcon}
            </div>
          ) : (
            <div
              className="w-full h-64 bg-cover bg-center bg-no-repeat rounded-lg transition-all duration-500"
              style={{ backgroundImage: `url(${project.images[currentImageIndex]})` }}
              onError={() => handleImageError(index)}
            ></div>
          )
        ) : (
          imageErrors[index] ? (
            <div className="w-full h-64 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-4xl">
              {project.fallbackIcon}
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
              onError={() => handleImageError(index)}
            />
          )
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-2xl md:text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-2">
          {project.title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-4">
          <span>{project.year}</span>
          <span>•</span>
          <span>{project.role}</span>
          <span>•</span>
          <span>{project.duration}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-sm text-neutral-700 dark:text-neutral-300 font-mono px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.url && (
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 group"
            aria-label={`View ${project.title}`}
          >
            <span>View Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;