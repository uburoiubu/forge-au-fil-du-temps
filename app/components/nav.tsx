import Link from "next/link";

const navItems = {
  "/": { name: "Accueil" },
  "/histoire": { name: "Histoire & Patrimoine" },
  "/today": { name: "La Forge aujourd'hui" },
  "/visiter": { name: "Visiter la Forge" },
  "/events": { name: "Événements & Activités" },
  "/galerie": { name: "Galerie" },            // was gallerie
  "/contact": { name: "Contact & Infos pratiques" },
  "/soutien": { name: "Soutenir le projet" },
};

export function Navbar() {
  return (
    <nav
      id="nav"
      className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 shadow-sm"
    >
      <div className="container mx-auto flex items-center gap-1 px-4 py-2">
        {Object.entries(navItems).map(([path, { name }]) => (
          <Link
            key={path}
            href={path}
            className="px-3 py-1 m-1 text-center transition-colors hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}