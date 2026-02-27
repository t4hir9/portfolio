import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Abdullahi Tahir Adamu",
    default: "Abdullahi Tahir Adamu | Photographer & Cinematographer",
  },
  description:
    "Professional photographer and cinematographer in Nigeria with 6+ years of experience. Specializing in cinematic video production, high-end photography, and professional video editing.",
  keywords: ["Photographer Nigeria", "Cinematographer Nigeria", "Video editor Nigeria", "Professional photography", "Cinematic video production", "Drone pilot Nigeria"],
  metadataBase: new URL("https://tahiradamu.info"),
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
    title: "Abdullahi Tahir Adamu | Photographer & Cinematographer",
    description:
      "Abdullahi Tahir Adamu is a skilled photographer and cinematographer from Nigeria, specializing in cinematic storytelling and professional visual production.",
    url: "https://tahiradamu.info",
    siteName: "Abdullahi Tahir Adamu Portfolio",
    images: [
      {
        url: "https://tahiradamu.info/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdullahi Tahir Adamu Portfolio - Photographer & Cinematographer",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullahi Tahir Adamu | Photographer & Cinematographer in Nigeria",
    description:
      "Portfolio of Abdullahi Tahir Adamu, a photographer and cinematographer from Nigeria, specializing in professional visual storytelling.",
    images: ["https://tahiradamu.info/og-image.png"],
    creator: "@iamt4hir9",
  },
  authors: [
    {
      name: "Abdullahi Tahir Adamu",
      url: "https://tahiradamu.info",
    },
  ],
  icons: {
    icon: "/whitelogo.png",
    apple: "/whitelogo.png",
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
    name: "Abdullahi Tahir Adamu",
    jobTitle: "Photographer and Cinematographer",
    url: "https://tahiradamu.info",
    sameAs: [
      "https://www.linkedin.com/in/iamt4hir9/",
      "https://instagram.com/iamt4hir9",
      "https://twitter.com/iamt4hir9",
    ],
    skills: [
      "Photography",
      "Videography",
      "Cinematography",
      "Video Editing",
      "Drone Piloting",
      "Color Grading",
      "Lighting",
      "Visual Storytelling",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelancer",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nigeria",
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
          suppressHydrationWarning
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
