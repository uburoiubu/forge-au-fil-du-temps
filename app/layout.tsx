import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/nav";
import Footer from "./components/footer";

const ebGaramond = EB_Garamond({ subsets: ["latin"], variable: "--font-garamond" });


export const viewport = { width: 'device-width', initialScale: 1 };

export const metadata: Metadata = {
  title: "La Forge au fil du temps",
  description: "La Forge au fil du temps est une association dont le but est de valoriser et d'animer l’ancienne forge de Bourzolles à Souillac."
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${ebGaramond.className} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="container mx-auto px-4 mt-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}