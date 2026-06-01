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
  title: "IMOGI - Implementor ERPNext Terpercaya di Indonesia | PT. Inovasi Terbaik Bangsa",
  description:
    "IMOGI adalah implementor ERPNext terpercaya untuk bisnis konstruksi, transportasi, dan otomotif Indonesia. Solusi ERP cerdas & otomatis untuk fleet management, bengkel, dan manajemen proyek.",
  keywords: [
    "IMOGI",
    "ERPNext",
    "ERP Indonesia",
    "Fleet Management",
    "Manajemen Proyek Konstruksi",
    "Bengkel Management",
    "PT Inovasi Terbaik Bangsa",
    "Implementor ERPNext",
    "Open Source ERP",
  ],
  authors: [{ name: "PT. Inovasi Terbaik Bangsa" }],
  openGraph: {
    title: "IMOGI - Implementor ERPNext Terpercaya di Indonesia",
    description:
      "Solusi ERPNext cerdas & otomatis untuk bisnis konstruksi, transportasi, dan otomotif Indonesia.",
    siteName: "IMOGI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IMOGI - Implementor ERPNext Terpercaya di Indonesia",
    description:
      "Solusi ERPNext cerdas & otomatis untuk bisnis konstruksi, transportasi, dan otomotif Indonesia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
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
