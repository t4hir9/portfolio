import ProjectsClient from "@/components/ProjectClient";

// Metadata for the Projects Page
export const metadata = {
  title: "All Projects",
  description:
    "Explore the portfolio of Khaleel Alhaji, a Front-End Developer in India specializing in React, Next.js, Tailwind CSS, and JavaScript. View modern web development projects built for global clients.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: "Khaleel Alhaji | React & Next.js Front-End Developer - India Projects",
    description:
      "Explore a collection of front-end and full-stack web development projects by Khaleel Alhaji, a Front-End Developer from India specializing in React, Next.js, and modern web technologies.",
    url: "https://khaleelalhaji.info/projects",
    siteName: "Khaleel Alhaji Portfolio",
    images: [
      {
        url: "https://khaleelalhaji.info/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Khaleel Alhaji Portfolio - Front-End Developer Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khaleel Alhaji | Front-End Developer in India - All Projects",
    description:
      "Explore the collection of front-end and full-stack web development projects by Khaleel Alhaji, showcasing React, Next.js, Tailwind CSS, and more.",
    images: ["https://khaleelalhaji.info/og-image.jpg"],
    creator: "@khaleelalhaji",
  },
};

const ProjectsPage = () => {
  return <ProjectsClient />;
};

export default ProjectsPage;
