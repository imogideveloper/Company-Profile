'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronRight, ChevronDown } from 'lucide-react';

interface ProductLink {
  label: string;
  href: string;
}

interface ProductGroup {
  items: ProductLink[];
}

const productGroups: ProductGroup[] = [
  {
    items: [
      { label: 'ERPNext Konstruksi', href: '#konstruksi' },
      { label: 'ERPNext Fleet', href: '#fleet' },
      { label: 'ERPNext Workshop', href: '#bengkel' },
    ],
  },
  {
    items: [
      { label: 'IMOGI POS', href: '#pos' },
      { label: 'IMOGI Retail', href: '#retail' },
      { label: 'IMOGI Workshop', href: '#workshop' },
    ],
  },
];

const navLinks: { label: string; href: string; dropdown?: ProductGroup[] }[] = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Produk', href: '#layanan', dropdown: productGroups },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Klien', href: '#klien' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);

    const updateHash = () => setActiveHash(window.location.hash);
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
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
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative group">
                  <a
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-muted-foreground hover:text-foreground hover:bg-accent/10 inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </a>
                  <div className="absolute left-0 top-full pt-2 invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                    <div className="bg-white border border-border rounded-lg shadow-lg p-2 min-w-[220px] divide-y divide-border">
                      {link.dropdown.map((group, groupIdx) => (
                        <div key={groupIdx} className="py-1.5 first:pt-0 last:pb-0">
                          {/* <div className="px-3 pt-1.5 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                            {group.label}
                          </div> */}
                          <div className="divide-y divide-border/60">
                            {group.items.map((item) => (
                              <a
                                key={item.href}
                                href={item.href}
                                className={`block px-3 py-2 text-sm transition-colors ${
                                  activeHash === item.href
                                    ? 'text-imogi-secondary bg-imogi-secondary/5 font-medium'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
                                }`}
                              >
                                {item.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-muted-foreground hover:text-foreground hover:bg-accent/10"
                >
                  {link.label}
                </a>
              )
            )}
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
          <Sheet
            open={mobileOpen}
            onOpenChange={(open) => {
              setMobileOpen(open);
              if (!open) setOpenMobileDropdown(null);
            }}
          >
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-foreground">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
              <div className="flex flex-col gap-1 mt-8">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.dropdown ? (
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileDropdown((prev) => (prev === link.label ? null : link.label))
                        }
                        className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-accent/10 rounded-md transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openMobileDropdown === link.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3 text-base font-medium text-foreground hover:bg-accent/10 rounded-md transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                    {link.dropdown && openMobileDropdown === link.label && (
                      <div className="ml-4 pl-3 border-l border-border mb-1 divide-y divide-border/60">
                        {link.dropdown.map((group, groupIdx) => (
                          <div key={groupIdx} className="py-1.5 first:pt-0 last:pb-0">
                            <div className="flex flex-col gap-0.5">
                              {group.items.map((item) => (
                                <a
                                  key={item.href}
                                  href={item.href}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setOpenMobileDropdown(null);
                                  }}
                                  className={`px-4 py-2 text-sm rounded-md transition-colors ${
                                    activeHash === item.href
                                      ? 'text-imogi-secondary bg-imogi-secondary/5 font-medium'
                                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
                                  }`}
                                >
                                  {item.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
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
