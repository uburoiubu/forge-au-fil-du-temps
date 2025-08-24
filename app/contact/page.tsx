export const metadata = {
  title: "Contact & Infos pratiques - La Forge au fil du temps",
  description: "Contactez l'association La Forge au fil du temps. Adresse complète, email et téléphone pour organiser votre visite de la Forge de Bourzolles à Souillac."
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <h1 className="text-5xl text-center pt-6 pb-4">
        Contact & Infos pratiques
      </h1>

      <div className="text-2xl leading-relaxed p-6 space-y-4">
        <p>
          Vous pouvez nous écrire pour toute question sur la Forge, les visites
          ou les événements.
        </p>

        {/* Adresse with Google Maps link */}
        <p>
          <b>Adresse</b> :{" "}
          <a
            href="https://maps.app.goo.gl/y967WVQYgkhEKHxG9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Lieu-dit La Forge, 151, route de Bourzolles, 46200 Souillac, France
          </a>
        </p>

        {/* Email with mailto */}
        <p>
          <b>Email</b> :{" "}
          <a
            href="mailto:laforgeaufildutemps@gmail.com"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            laforgeaufildutemps@gmail.com
          </a>
        </p>

        {/* Phone with tel */}
        <p>
          <b>Tél.</b> :{" "}
          <a
            href="tel:+33767616888"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            07 67 61 68 88
          </a>
        </p>
      </div>
    </main>
  );
}