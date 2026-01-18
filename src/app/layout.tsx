import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rizwan Abdullah - Full Stack Developer",
  description: "Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies. Based in Islamabad, Pakistan.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Web Developer", "JavaScript", "TypeScript"],
  authors: [{ name: "Rizwan Abdullah" }],
  creator: "Rizwan Abdullah",
  openGraph: {
    title: "Rizwan Abdullah - Full Stack Developer",
    description: "Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    url: "https://rizwan-abdullah-portfolio.vercel.app/",
    siteName: "Rizwan Abdullah Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizwan Abdullah - Full Stack Developer",
    description: "Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
