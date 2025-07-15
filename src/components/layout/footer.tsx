import Link from "next/link";
import { HeartHandshake, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white text-secondary-foreground border-t">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2">
                <HeartHandshake className="h-8 w-8 text-primary" />
                <span className="font-bold font-headline text-xl">Rabbaniyah Educare</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Empowering communities through accessible and quality education for all.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><span className="sr-only">Facebook</span><Facebook className="h-6 w-6" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><span className="sr-only">Twitter</span><Twitter className="h-6 w-6" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><span className="sr-only">Instagram</span><Instagram className="h-6 w-6" /></Link>
            </div>
          </div>
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-headline text-md font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">Projects</Link></li>
                <li><Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary">Gallery</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-md font-semibold">Get Involved</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/contribute" className="text-sm text-muted-foreground hover:text-primary">Contribute</Link></li>
                <li><Link href="/contribute" className="text-sm text-muted-foreground hover:text-primary">Volunteer</Link></li>
                <li><Link href="/contribute" className="text-sm text-muted-foreground hover:text-primary">Sponsor</Link></li>
              </ul>
            </div>
             <div>
               <h3 className="font-headline text-md font-semibold">Contact Us</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                      <MapPin className="h-4 w-4 mt-1 shrink-0 text-muted-foreground"/> 
                      <span className="text-muted-foreground">Lot 12421, Jalan Bunga Melati 15A, Taman Seraya, 56100 Ampang, Selangor Du, Malaysia</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                      <Mail className="h-4 w-4 shrink-0"/> 
                      <a href="mailto:rabbaniyaheducare@gmail.com">rabbaniyaheducare@gmail.com</a>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                      <Phone className="h-4 w-4 shrink-0"/> 
                      <a href="tel:+601164099760">+60 11-6409 9760</a>
                  </li>
                </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Rabbaniyah Educare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
