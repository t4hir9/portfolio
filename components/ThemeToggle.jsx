"use client";

import { useState, useRef, useEffect } from "react";
import { Sun, Moon, Monitor, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";

const options = [
  {
    label: "Light",
    value: "light",
    icon: <Sun className="w-4 h-4 mr-2 text-yellow-500" />,
  },
  {
    label: "Dark",
    value: "dark",
    icon: <Moon className="w-4 h-4 mr-2 text-neutral-200" />,
  },
  {
    label: "System",
    value: "system",
    icon: <Monitor className="w-4 h-4 mr-2 text-blue-400" />,
  },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) {
    // Return a placeholder that matches the eventual rendered structure
    return (
      <div className="relative inline-block text-left" ref={dropdownRef}>
        <button
          className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Theme selector"
        >
          <div className="w-4 h-4 mr-2" /> {/* Placeholder for icon */}
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    );
  }

  const current = options.find((o) => o.value === theme) || options[2]; // Default to system if no theme

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
        aria-label="Theme selector"
      >
        {current?.icon}
        <ChevronDown className="w-4 h-4" />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-md shadow-lg z-50">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setTheme(option.value);
                setDropdownOpen(false);
              }}
              className={`flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors ${
                theme === option.value ? "font-semibold" : ""
              }`}
            >
              {option.icon}
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}