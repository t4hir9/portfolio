"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import MediaCard from "@/components/MediaCard";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export default function VideosClient({ videos }) {
  const router = useRouter();

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto px-6 pt-8 pb-20">
          {/* Header */}
          <header className="mb-16">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Back to Home</span>
            </button>

            <div>
              <h1 className="text-4xl md:text-5xl font-extralight text-neutral-900 dark:text-neutral-100 mb-12 tracking-tight">
                Videos
              </h1>
            </div>
          </header>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <MediaCard
                key={index}
                media={{
                  src: `/videos/${video.thumbnail}`,
                  videoSrc: `/videos/${video.video}`,
                  type: "video",
                }}
                index={index}
              />
            ))}
          </div>

          <h2 className="mt-16 text-center text-xl md:text-2xl font-light text-neutral-900 dark:text-neutral-100">
            More Videos Coming Soon...
          </h2>
        </div>
      </div>
      <Footer homepage={false} />
    </>
  );
}

export async function getServerSideProps() {
  const fs = require("fs");
  const path = require("path");
  const videosDir = path.join(process.cwd(), "public/videos");
  let videos = [];

  try {
    const files = fs.readdirSync(videosDir);
    const thumbnails = files.filter((file) =>
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );
    videos = thumbnails
      .map((thumbnail) => {
        const videoFile = thumbnail.replace(/(-thumbnail)?\.(jpg|jpeg|png|gif)$/i, ".mp4");
        if (fs.existsSync(path.join(videosDir, videoFile))) {
          return { thumbnail, video: videoFile };
        }
        return null;
      })
      .filter(Boolean);
  } catch (error) {
    console.error("Error reading videos directory:", error);
  }

  return {
    props: {
      videos,
    },
  };
}