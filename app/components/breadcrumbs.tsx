'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  
  // Only show breadcrumbs on history subdirectory pages (not on /histoire root)
  if (segments.length === 0 || segments[0] !== 'histoire' || segments.length === 1) return null;
  
  // Map URL segments to human-readable names
  const breadcrumbMap: Record<string, string> = {
    'histoire': 'Histoire & patrimoine',
    'forges': 'Les forges',
    'maison': 'Maison du maître',
    'grottes': 'Les grottes',
    'historique': 'Historique par l\'Abbé Coldefy',
    'chapelle': 'Grotte-Chapelle Notre Dame',
    'vache': 'Grotte du Pis de la Vache',
    'usine': 'L\'usine électrique Sainte Thérèse',
    'roquefort': 'Tour Roquefort de Bourzolles'
  };

  return (
    <nav className="hidden md:block text-base text-foreground/80 mt-2 mb-2 px-6 py-2 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70" aria-label="Breadcrumb">
      <div className="flex items-center space-x-2">
        <Link 
          href="/histoire" 
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          aria-label="Histoire & patrimoine"
        >
          <HomeIcon className="w-5 h-5 mr-2" />
          Histoire & patrimoine
        </Link>
        
        {segments.slice(1).map((segment, index) => {
          const isLast = index === segments.slice(1).length - 1;
          const path = `/${segments.slice(0, index + 2).join('/')}`;
          const label = breadcrumbMap[segment] || segment;
          
          return (
            <div key={segment} className="flex items-center">
              <ChevronRightIcon className="w-5 h-5 text-foreground/40 mx-2" />
              {isLast ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link 
                  href={path}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors hover:underline"
                >
                  {label}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
