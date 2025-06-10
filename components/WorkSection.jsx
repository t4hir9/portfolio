import React from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const WorkSection = () => {
  const projects = [
    {
      title: "Accommodation Finder",
      description:
        "A comprehensive platform designed to help African students find suitable housing in India. Built with a focus on user experience and real-time data.",
      year: "2024",
      role: "Lead Frontend",
      duration: "12 weeks",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      image: "🏠",
    },
    {
      title: "FX Exchange App",
      description:
        "A real-time foreign exchange application that provides live currency rates and conversion tools with a focus on speed and reliability.",
      year: "2024",
      role: "Solo Project",
      duration: "8 weeks",
      tech: ["React", "Tailwind CSS", "Clerk", "Chart.js"],
      image: "💱",
    },
  ];

  return (
    <section id="work" className="pb-40 scroll-mt-[84.67px]">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-extralight text-neutral-900 dark:text-neutral-100 mb-12 tracking-tight">
          Selected Work
        </h2>

        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl">
          Recent projects that showcase thoughtful design and clean
          implementation.
        </p>
      </div>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <article key={index} className="group">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Project Image */}
              <div className="aspect-[4/3] bg-neutral-50 dark:bg-neutral-900 rounded-lg flex items-center justify-center group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800 transition-colors duration-300">
                <span className="text-4xl">{project.image}</span>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>{project.role}</span>
                    <span>•</span>
                    <span>{project.duration}</span>
                  </div>

                  <h3 className="text-2xl font-light text-neutral-900 dark:text-neutral-100 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm text-neutral-900 dark:text-neutral-100 hover:gap-3 transition-all duration-200"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="pt-16 text-center">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-neutral-900 dark:text-neutral-100 hover:gap-3 transition-all duration-200"
        >
          <span>View All Projects</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default WorkSection;
