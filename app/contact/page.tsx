export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <h1 className="text-5xl text-center pt-6 pb-4">
        Contact & Infos pratiques
      </h1>

      <div className="text-xl leading-relaxed p-6">
        <p className="pb-6">
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
            La Forge, 46200 Souillac
          </a>
        </p>

        {/* Email with mailto */}
        <p>
          <b>Email</b> :{" "}
          <a
            href="mailto:virginie.destrel@wanadoo.fr"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            virginie.destrel@wanadoo.fr
          </a>
        </p>

        {/* Phone with tel */}
        <p>
          <b>Tél.</b> :{" "}
          <a
            href="tel:+33680858085"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            06 80 85 80 85
          </a>
        </p>
      </div>
    </main>
  );
}