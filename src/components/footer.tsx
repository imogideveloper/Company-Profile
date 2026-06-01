"use client";

import { Linkedin, Twitter, Instagram, Github } from "lucide-react";

const serviceLinks = [
  "ERP Solutions",
  "Custom Software",
  "Web Development",
  "Mobile Apps",
  "Cloud Solutions",
  "IT Consulting",
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Careers", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-imogi-primary text-white">
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-imogi-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Imogi</span>
                <span className="text-[10px] leading-tight text-slate-400 tracking-wider uppercase">
                  Indonesia
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A leading software house specializing in custom software development,
              ERP solutions, and digital transformation for businesses across
              Indonesia.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-imogi-secondary transition-colors duration-300"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#services");
                    }}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>info@imogi.co.id</li>
              <li>+62 21 1234 5678</li>
              <li>+62 812 3456 7890</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-sm text-slate-400">
            &copy; 2026 Imogi Indonesia. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
