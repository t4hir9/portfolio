import React from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project, index, imageErrors, handleImageError }) => {
  return (
    <article key={index} className="group">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer block p-6 rounded-2xl transition-all duration-300 hover:bg-neutral-100/80 dark:hover:bg-neutral-800/50"
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Project Image */}
          <div className="w-full bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 rounded-xl overflow-hidden transition-all duration-300 shadow-sm">
            {!imageErrors[index] ? (
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                width={600}
                height={400}
                className="w-full h-auto transition-transform duration-300"
                onError={() => handleImageError(index)}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">{project.fallbackIcon}</div>
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                    {project.title}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                <span className="font-medium">{project.year}</span>
                <span>•</span>
                <span>{project.role}</span>
                <span>•</span>
                <span>{project.duration}</span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-2xl md:text-3xl font-light text-neutral-900 dark:text-neutral-100 leading-tight">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors duration-200" />
              </div>

              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </a>
    </article>
  );
};

export default ProjectCard;
