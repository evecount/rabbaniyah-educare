"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/contribute", label: "Contribute" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const NavLink = ({ href, label, className }: { href: string; label: string; className?: string; }) => (
    <Link
        href={href}
        onClick={() => setMobileMenuOpen(false)}
        className={cn(
          "font-medium transition-colors hover:text-primary",
          pathname === href ? "text-primary" : "text-foreground/60",
          className
        )}
      >
        {label}
    </Link>
  );

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow",
        isScrolled ? "shadow-sm" : ""
      )}>
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
          <Image src="/RabbaniyahEducareLogo.png" alt="Rabbaniyah Educare Logo" width={40} height={40} className="h-10 w-auto" />
          <span className="font-bold font-headline text-lg">Rabbaniyah Educare</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} className="text-sm" />
          ))}
        </nav>
        <div className="flex items-center gap-2">
            <Button asChild className="hidden md:flex">
                <Link href="/contribute">Donate Now</Link>
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6">
                    <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setMobileMenuOpen(false)}>
                        <Image src="/RabbaniyahEducareLogo.png" alt="Rabbaniyah Educare Logo" width={40} height={40} className="h-10 w-auto" />
                        <span className="font-bold font-headline text-lg">Rabbaniyah Educare</span>
                    </Link>
                    <nav className="flex flex-col gap-4">
                      {navLinks.map((link) => (
                          <NavLink key={link.href} {...link} className="text-lg" />
                      ))}
                    </nav>
                    <Button asChild className="mt-4">
                        <Link href="/contribute" onClick={() => setMobileMenuOpen(false)}>Donate Now</Link>
                    </Button>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
