import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers";
import { Header, Footer } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Zidio Hackathon Platform | India's #1 Student-Friendly Hackathon Platform",
  description:
    "India's most student-friendly hackathon platform powered by real industry challenges and AI automation. Join 1M+ users building the future.",
  keywords: [
    "hackathon",
    "platform",
    "India",
    "students",
    "coding",
    "AI",
    "innovation",
    "zidio",
  ],
  authors: [{ name: "Zidio Development" }],
  openGraph: {
    title: "Zidio Hackathon Platform",
    description:
      "India's most student-friendly hackathon platform powered by real industry challenges",
    type: "website",
    locale: "en_IN",
    siteName: "Zidio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zidio Hackathon Platform",
    description:
      "India's most student-friendly hackathon platform powered by real industry challenges",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
