import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: '%s | Khaleel Alhaji',
    default: 'Khaleel Alhaji'
  },
  description:
    "Khaleel Alhaji is a Front-End Developer based in India, specializing in React, Next.js, JavaScript, and building responsive web applications for global clients.",
  metadataBase: new URL("https://khaleelalhaji.info"),
  alternates: {
    canonical: "/",
  },
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
    title: "Khaleel Alhaji | Front-End Developer in India | React & Next.js",
    description:
      "Khaleel Alhaji is a skilled Front-End Developer from India, specializing in React, Next.js, JavaScript, and creating user-friendly, responsive web applications.",
    url: "https://khaleelalhaji.info",
    siteName: "Khaleel Alhaji Portfolio",
    images: [
      {
        url: "https://khaleelalhaji.info/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Khaleel Alhaji Portfolio - Front-End Developer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khaleel Alhaji | Front-End Developer in India",
    description:
      "Portfolio of Khaleel Alhaji, a Front-End Developer from India, specializing in React and Next.js.",
    images: ["https://khaleelalhaji.info/og-image.jpg"],
    creator: "@khaleelalhaji",
  },
  authors: [
    {
      name: "Khaleel Alhaji",
      url: "https://khaleelalhaji.info",
    },
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Khaleel Alhaji",
    jobTitle: "Frontend Developer in India",
    url: "https://khaleelalhaji.info",
    sameAs: [
      "https://www.linkedin.com/in/khaleelalhaji/",
      "https://github.com/khaleelibraheem",
    ],
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Web Development",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelancer",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "India",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-[80vh]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
