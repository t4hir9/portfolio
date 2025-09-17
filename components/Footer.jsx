import { Github, Linkedin, Mail } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer({ homepage = true }) {
  return (
    <footer className="relative z-10 py-16 border-t border-neutral-200/80 dark:border-neutral-200/20 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          {homepage ? (
            <Logo />
          ) : (
            <Link href="/" className="group cursor-pointer relative">
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-thin text-neutral-500 dark:text-neutral-400 tracking-wide transition-all duration-300 group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
          Abdullahi
        </span>
        <span className="text-3xl font-extralight text-neutral-900 dark:text-neutral-100 tracking-tight transition-all duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">
          Tahir
        </span>
        <span className="text-xl font-thin text-neutral-500 dark:text-neutral-400 tracking-wide transition-all duration-300 group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
        Adamu
        </span>
              </div>
            </Link>
          )}
          <div className="text-sm text-gray-500 dark:text-neutral-300 font-light">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex items-center gap-8">
            <Link
              href="https://linkedin.com/in/iamt4hir9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 dark:text-neutral-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 relative group flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="https://github.com/t4hir9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 dark:text-neutral-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 relative group flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="mailto:abdultahir779@gmail.com.com"
              className="text-sm text-gray-500 dark:text-neutral-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 relative group flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>

          <div className="hidden md:block w-px h-6 bg-gray-200 dark:bg-neutral-700"></div>

          <div className="text-xs text-gray-400 dark:text-neutral-400 font-light tracking-wider">
            MADE WITH ❤️ BY T4HIR9
          </div>
        </div>
      </div>
    </footer>
  );
}
