import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";

const ebGaramond = EB_Garamond({ subsets: ["latin"], variable: "--font-garamond" });

export const viewport = { width: 'device-width', initialScale: 1 };

export const metadata: Metadata = {
  title: "La Forge au fil du temps",
  description: "La Forge au fil du temps est une association dont le but est de valoriser et d'animer l'ancienne forge de Bourzolles à Souillac.",
  keywords: ["forge", "Bourzolles", "Souillac", "patrimoine", "histoire", "association", "Lot", "France", "métallurgie", "château", "grottes"],
  authors: [{ name: "La Forge au fil du temps" }],
  creator: "La Forge au fil du temps",
  publisher: "La Forge au fil du temps",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://laforgeaufildutemps.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://laforgeaufildutemps.fr',
    title: 'La Forge au fil du temps',
    description: 'La Forge au fil du temps est une association dont le but est de valoriser et d\'animer l\'ancienne forge de Bourzolles à Souillac.',
    siteName: 'La Forge au fil du temps',
    images: [
      {
        url: '/images/forge-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'La Forge de Bourzolles à Souillac',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Forge au fil du temps',
    description: 'La Forge au fil du temps est une association dont le but est de valoriser et d\'animer l\'ancienne forge de Bourzolles à Souillac.',
    images: ['/images/forge-cover.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="La Forge" />
        <link rel="apple-touch-icon" href="/images/association/asso-la-forge.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristAttraction",
              "name": "La Forge au fil du temps",
              "description": "Association dont le but est de valoriser et d'animer l'ancienne forge de Bourzolles à Souillac",
              "url": "https://laforgeaufildutemps.fr",
              "telephone": "+33767616888",
              "email": "laforgeaufildutemps@orange.fr",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Lieu-dit La Forge, 151, route de Bourzolles",
                "addressLocality": "Souillac",
                "postalCode": "46200",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.8933,
                "longitude": 1.4758
              },
              "image": [
                "https://laforgeaufildutemps.fr/images/forge-cover.jpg",
                "https://laforgeaufildutemps.fr/images/chateau.jpg"
              ],
              "sameAs": [
                "https://www.facebook.com/laforgeaufildutemps"
              ],
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Accueil",
                    "item": "https://laforgeaufildutemps.fr"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Histoire & patrimoine",
                    "item": "https://laforgeaufildutemps.fr/histoire"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Les grottes",
                    "item": "https://laforgeaufildutemps.fr/histoire/grottes"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Visiter",
                    "item": "https://laforgeaufildutemps.fr/visiter"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Événements & Activités",
                    "item": "https://laforgeaufildutemps.fr/events"
                  },
                  {
                    "@type": "ListItem",
                    "position": 6,
                    "name": "Association",
                    "item": "https://laforgeaufildutemps.fr/soutien"
                  },
                  {
                    "@type": "ListItem",
                    "position": 7,
                    "name": "Contact & Infos pratiques",
                    "item": "https://laforgeaufildutemps.fr/contact"
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="min-h-[100svh] flex flex-col"> {/* svh = mobile-safe */}
        <Navbar />
        <main className="flex-1"> {/* grows to push footer down */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}