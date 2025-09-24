
"use client";

import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

export default function VideosPage() {
  const router = useRouter();
  const videos = [
    { name: "Culverin", src: "/videos/culverin.MP4" },
    { name: "From This Side", src: "/videos/FTS.MP4" },
    { name: "VFX", src: "/videos/Reel.MP4" },
    { name: "Short film- Rubix art soiree", src: "/videos/Rubix.MP4" },
    { name: "scribble", src: "/videos/Scribble.MP4" },
    { name: "Titan Perfomance", src: "/videos/Titan.MP4" },
  ];

  // Initialize muted state array with true for each video
  const [mutedStates, setMutedStates] = useState(videos.map(() => true));

  const handleToggleMute = (index) => {
    setMutedStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  const handleBack = () => {
    const referrer = document.referrer;
    if (referrer.includes("/projects")) {
      router.push("/projects");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-20">
        {/* Header */}
        <header className="mb-16">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Previous Page</span>
          </button>
          <div>
            <h1 className="text-4xl md:text-5xl font-extralight text-neutral-900 dark:text-neutral-100 mb-12 tracking-tight">
              Video Samples
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-16 max-w-3xl font-light">
              A collection of my videography work showcasing creative storytelling and technical expertise.
            </p>
          </div>
        </header>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="relative group">
              <video
                src={video.src}
                autoPlay
                muted={mutedStates[index]}
                loop
                playsInline
                className="w-full object-cover rounded-lg"
              />
              <button
                onClick={() => handleToggleMute(index)}
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-200 font-medium"
              >
                {mutedStates[index] ? "Unmute" : "Mute"}
              </button>
              <div className="mt-2 text-sm text-neutral-900 dark:text-neutral-100 font-light">
                {video.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer homepage={false} />
    </div>
  );
}
