import ProjectsClient from "@/components/ProjectClient";

// Metadata for the Projects Page

export const metadata = {
  title: "All Projects",
  description:
    "Explore the portfolio of Abdullahi Tahir Adamu, a Front-End Developer and Media Expert in Nigeria specializing in React, Next.js, Tailwind CSS, and JavaScript. View modern web development projects built for global clients.",
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
    title: "Abdullahi Tahir Adamu | Front-End Developer & Media Expert",
    description:
      "Explore a collection of front-end and full-stack web development projects by Abdullahi Tahir Adamu, a Front-End Developer and Media Expert from Nigeria specializing in React, Next.js, and modern web technologies.",
    url: "https://tahiradamu.info/projects",
    siteName: "Abdullahi Tahir Adamu Portfolio",
    images: [
      {
        url: "https://tahiradamu.info/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abdullahi Tahir Adamu Portfolio - Front-End Developer Projects",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullahi Tahir Adamu | Front-End Developer & Media Expert in Nigeria - All Projects",
    description:
      "Explore the collection of front-end and full-stack web development projects by Abdullahi Tahir Adamu, showcasing React, Next.js, Tailwind CSS, and more.",
    images: ["https://tahiradamu.info/og-image.jpg"],
    creator: "@iamt4hir9",
  },
};

const ProjectsPage = () => {
  return <ProjectsClient />;
};

export default ProjectsPage;
