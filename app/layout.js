import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khaleel Alhaji | Front-End Developer",
  description:
    "Portfolio website of Khaleel Alhaji — Front-End Developer from Nigeria based in India. I build user-friendly, performant web experiences using React, Next.js, and modern web technologies.",
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
    title: "Khaleel Alhaji | Front-End Developer",
    description:
      "Portfolio website of Khaleel Alhaji — Front-End Developer from Nigeria based in India. I build user-friendly, performant web experiences using React, Next.js, and modern web technologies.",
    url: "https://khaleelalhaji.info",
    siteName: "Khaleel Alhaji",
    images: [
      {
        url: "https://khaleelalhaji.info/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Khaleel Alhaji Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khaleel Alhaji | Front-End Developer",
    description:
      "Portfolio website of Khaleel Alhaji — Front-End Developer from Nigeria based in India. I build user-friendly, performant web experiences using React, Next.js, and modern web technologies.",
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
    jobTitle: "Front-End Developer",
    url: "https://khaleelalhaji.info",
    sameAs: [
      "https://www.linkedin.com/in/khaleelalhaji/",
      "https://github.com/khaleelibraheem",
    ],
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
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
