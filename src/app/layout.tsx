import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL('http://rabbaniyaheducare.com/'),
  title: {
    default: 'Rabbaniyah Educare | Refugee Education Center, Malaysia',
    template: '%s | Rabbaniyah Educare',
  },
  description: 'Rabbaniyah Educare is a non-profit school providing education to Rohingya refugee children in Kuala Lumpur, Malaysia. Support our mission to create a brighter future.',
  keywords: ['Rohingya refugee education', 'non-profit school Malaysia', 'Rabbaniyah Educare', 'support refugee children', 'donate to education', 'volunteer teaching Malaysia', 'Ampang refugee school', 'charity school Kuala Lumpur'],
  openGraph: {
    title: 'Rabbaniyah Educare | Refugee Education Center, Malaysia',
    description: 'A non-profit school providing education and support to Rohingya refugee children in Kuala Lumpur.',
    url: 'http://rabbaniyaheducare.com/',
    siteName: 'Rabbaniyah Educare',
    images: [
      {
        url: '/Rabbaniyah_OG_Image.jpg', // Should be an absolute URL
        width: 1200,
        height: 630,
        alt: 'Rabbaniyah Educare students in a classroom',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rabbaniyah Educare | Refugee Education Center, Malaysia',
    description: 'Support Rabbaniyah Educare, a non-profit school providing education to Rohingya refugee children in Kuala Lumpur.',
    images: ['/Rabbaniyah_OG_Image.jpg'], // Should be an absolute URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path fill='green' d='M50 0 A50 50 0 1 0 50 100 A40 40 0 1 1 50 0 Z'></path><path fill='green' d='M75 40 L78.5 50 L89 50 L80 56 L83 66 L75 60 L67 66 L70 56 L61 50 L71.5 50 Z'></path></svg>" />
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
