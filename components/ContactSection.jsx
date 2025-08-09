import React from "react";
import { Mail, Linkedin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="pb-40 scroll-mt-[150px]">
    <div className="max-w-4xl">
      <h2 className="text-4xl md:text-5xl font-extralight text-neutral-900 dark:text-neutral-100 mb-12 tracking-tight">
        Let&apos;s Work Together
      </h2>
      <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-16 max-w-3xl font-light">
        I&apos;m always excited to hear about new projects and opportunities. Whether you&apos;re a startup or an established company, let&apos;s create something exceptional together.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <a
          href="mailto:alhajikhaleel@gmail.com"
          className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-light rounded-none hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-0.5"
          aria-label="Send me an email"
        >
          <Mail className="w-4 h-4" />
          <span>Send me an email</span>
        </a>

        <a
          href="https://linkedin.com/in/khaleelalhaji"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm font-light rounded-none hover:bg-white dark:hover:bg-neutral-800 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500"
          aria-label="Connect with me on LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
          <span>Connect on LinkedIn</span>
        </a>
      </div>

      <div className="text-sm text-neutral-500 dark:text-neutral-400 font-light tracking-wide">
        Currently available for freelance projects and full-time opportunities
      </div>
    </div>
  </section>
);

export default ContactSection;
