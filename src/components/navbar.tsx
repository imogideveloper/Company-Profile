'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Klien', href: '#klien' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-border/50 transition-all duration-500 ease-out ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="IMOGI Logo"
              className="h-9 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-foreground group-hover:text-imogi-secondary transition-colors">
                IMOGI
              </span>
              <span className="text-[10px] leading-tight hidden sm:block text-muted-foreground">
                PT. Inovasi Terbaik Bangsa
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-muted-foreground hover:text-foreground hover:bg-accent/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              className="bg-imogi-secondary hover:bg-imogi-secondary/90 text-white gap-1"
            >
              <a href="#kontak">
                Hubungi Kami
                <ChevronRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-foreground">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-1 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-base font-medium text-foreground hover:bg-accent/10 rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-4 px-4">
                  <Button
                    asChild
                    className="w-full bg-imogi-secondary hover:bg-imogi-secondary/90 text-white"
                  >
                    <a href="#kontak" onClick={() => setMobileOpen(false)}>
                      Hubungi Kami
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}