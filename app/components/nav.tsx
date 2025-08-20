import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Accueil',
  },
  '/histoire': {
    name: 'Histoire & Patrimoine',
  },
  '/today': {
    name: 'La Forge aujourd\'hui',
  },
  '/visiter': {
    name: 'Visiter la Forge',
  },
  '/events': {
    name: 'Événements & Activités',
  },
  '/gallerie': {
    name: 'Gallerie',
  },
  '/contact': {
    name: 'Contact & Infos pratiques',
  },  
  '/soutien': {
    name: 'Soutenir le projet',
  },  
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="sticky top-0 z-50 bg-background">
        <nav
          className="sticky top-0 z-50 flex flex-row items-center bg-background px-4 py-2"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}