'use client'
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/histoire", label: "Histoire & Patrimoine" },
  { href: "/visiter", label: "Visiter" },
  { href: "/events", label: "Événements & Activités" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
  { href: "/soutien", label: "Soutenir" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 text-xl leading-relaxed">
        <Link href="/" className="font-semibold text-2xl">La Forge au fil du temps</Link>

        {/* Hamburger (visible on mobile) */}
        <button
          className="md:hidden p-2"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-2">
          {navItems.map((it) => (
            <li key={it.href}>
              <Link className="px-3 py-1 hover:underline" href={it.href}>{it.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu (collapsible) */}
      {open && (
        <ul className="md:hidden container mx-auto px-4 pb-3 space-y-2">
          {navItems.map((it) => (
            <li key={it.href}>
              <Link className="block px-3 py-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800" href={it.href} onClick={() => setOpen(false)}>
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}