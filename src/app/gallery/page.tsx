import GalleryClientPage from "@/components/gallery-client-page";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Community Gallery',
  description: 'View photos from our community events, student activities, and graduation ceremonies at Rabbaniyah Educare. See the moments that make our school special.',
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryPage() {
  return <GalleryClientPage />;
}
