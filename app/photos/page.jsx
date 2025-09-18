"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import MediaCard from "@/components/MediaCard";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

// Client component wrapper for navigation and image filtering
const PhotosClientWrapper = ({ initialImages }) => {
  const router = useRouter();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const checkImages = initialImages.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = src;
      });
    });

    Promise.all(checkImages).then((results) => {
      setImages(initialImages.filter((_, i) => results[i]));
    });
  }, [initialImages]);

  const handleBack = () => {
    const referrer = document.referrer;
    if (referrer.includes("/projects")) {
      router.push("/projects");
    } else {
      router.push("/");
    }
  };

  return (
    <>
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
                Photos
              </h1>
                <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-16 max-w-3xl font-light">
                    A curated selection of my photography work, capturing moments and stories through the lens.
                </p>
            </div>
          </header>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <MediaCard
                key={index}
                media={{ src: image }}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer homepage={false} />
    </>
  );
};

// Server Component with hardcoded image paths
export default function PhotosClient() {
  const images = Array.from({ length: 65 }, (_, i) => `/photos/${i + 1}.jpg`);

  return <PhotosClientWrapper initialImages={images} />;
}