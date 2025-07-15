import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Rabbaniyah Educare',
  description: 'A website for Rabbaniyah Educare, focusing on their mission to provide education for all.',
  keywords: ['education', 'charity', 'non-profit', 'community', 'Rabbaniyah Educare']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
