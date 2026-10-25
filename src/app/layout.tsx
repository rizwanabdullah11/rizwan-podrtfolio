import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rizwan Abdullah | Software Engineer & Technical SEO Specialist",
  description: "Software Engineer with 2+ years of experience architecting high-performance Next.js portals, enterprise RBAC systems, Technical & Local SEO implementations, and React Native mobile applications.",
  keywords: ["Software Engineer", "Next.js", "RBAC Portals", "Technical SEO", "React Native", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "Rizwan Abdullah" }],
  creator: "Rizwan Abdullah",
  openGraph: {
    title: "Rizwan Abdullah | Software Engineer",
    description: "Software Engineer specializing in Next.js, Technical SEO, and Enterprise RBAC Portals with 2+ years of experience.",
    url: "https://rizwan-abdullah-portfolio.vercel.app/",
    siteName: "Rizwan Abdullah Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizwan Abdullah | Software Engineer",
    description: "Software Engineer specializing in Next.js, Technical SEO, and Enterprise RBAC Portals with 2+ years of experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${geistSans.variable} font-sans antialiased bg-white text-black`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
