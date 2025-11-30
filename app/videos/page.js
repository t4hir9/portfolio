import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Video Samples | Abdullahi Tahir Adamu",
  description: "Professional video and cinematography samples showcasing creative work.",
};

const VideosPage = () => {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="mx-auto px-2 sm:px-3 lg:px-4 w-full pt-8 pb-20">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Projects</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-extralight text-neutral-900 dark:text-neutral-100 mb-8 tracking-tight">Video Samples</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-12 max-w-2xl">Professional video and cinematography work featuring creative storytelling and technical expertise.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 rounded-lg h-64 flex items-center justify-center">
              <p className="text-neutral-600 dark:text-neutral-400">Video portfolio coming soon</p>
            </div>
          </div>
        </div>
      </div>
      <Footer homepage={false} />
    </>
  );
};

export default VideosPage;
