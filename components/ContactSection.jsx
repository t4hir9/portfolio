import React from "react";
import { Mail, Github, Instagram, Twitter } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection = () => (
  <section id="contact" className="pb-40 scroll-mt-[150px]">
    <div className="max-w-4xl">
      <h2 className="text-4xl md:text-5xl font-extralight text-neutral-900 dark:text-neutral-100 mb-12 tracking-tight">
        Let&apos;s Work Together
      </h2>
      <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-16 max-w-3xl font-light">
        I&apos;m always excited to hear about new projects and opportunities. Whether you&apos;re a startup or an established company, let&apos;s create something exceptional together.
      </p>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 mb-6">Send a Message</h3>
          <ContactForm />
        </div>

        {/* Quick Contact */}
        <div>
          <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 mb-6">Connect With Me</h3>
          <div className="space-y-4">
            <a
              href="mailto:abdultahir779@gmail.com"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 rounded-lg hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 group"
              aria-label="Send me an email"
            >
              <Mail className="w-5 h-5 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
              <div>
                <div className="font-medium text-neutral-900 dark:text-neutral-100">Email</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">abdultahir779@gmail.com</div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/iamt4hir9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 rounded-lg hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 group"
              aria-label="Connect on LinkedIn"
            >
              <svg className="w-5 h-5 text-cyan-500 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <div>
                <div className="font-medium text-neutral-900 dark:text-neutral-100">LinkedIn</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">iamt4hir9</div>
              </div>
            </a>

            <a
              href="https://github.com/t4hir9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 rounded-lg hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 group"
              aria-label="Visit GitHub"
            >
              <Github className="w-5 h-5 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
              <div>
                <div className="font-medium text-neutral-900 dark:text-neutral-100">GitHub</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">t4hir9</div>
              </div>
            </a>

            <a
              href="https://instagram.com/iamt4hir9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 rounded-lg hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 group"
              aria-label="Follow on Instagram"
            >
              <Instagram className="w-5 h-5 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
              <div>
                <div className="font-medium text-neutral-900 dark:text-neutral-100">Instagram</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">@iamt4hir9</div>
              </div>
            </a>

            <a
              href="https://twitter.com/iamt4hir9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 rounded-lg hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 group"
              aria-label="Follow on Twitter"
            >
              <Twitter className="w-5 h-5 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
              <div>
                <div className="font-medium text-neutral-900 dark:text-neutral-100">Twitter</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">@iamt4hir9</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="text-sm text-neutral-500 dark:text-neutral-400 font-light tracking-wide">
        Currently available for freelance projects and full-time opportunities
      </div>
    </div>
  </section>
);

export default ContactSection;
