import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imogi Indonesia - Custom Software Development & Digital Transformation",
  description:
    "Imogi Indonesia helps organizations transform their business processes through custom software development, ERP solutions, and innovative digital technologies.",
  keywords: [
    "Imogi Indonesia",
    "Software House",
    "Custom Software",
    "ERP Solutions",
    "Digital Transformation",
    "Business Process Automation",
    "Web Development",
    "Mobile App Development",
  ],
  authors: [{ name: "Imogi Indonesia" }],
  openGraph: {
    title: "Imogi Indonesia - Custom Software Development & Digital Transformation",
    description:
      "Building digital solutions that drive business growth. Custom software, ERP, and digital transformation services.",
    siteName: "Imogi Indonesia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imogi Indonesia - Custom Software Development & Digital Transformation",
    description:
      "Building digital solutions that drive business growth. Custom software, ERP, and digital transformation services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
