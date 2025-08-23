import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="not-prose mb-8 flex flex-col items-center text-center">
      <ul className="font-sm mt-8 flex flex-col items-center space-y-2 text-neutral-600 md:flex-row md:space-x-6 md:space-y-0 dark:text-neutral-300">
        {/* Facebook */}
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/LaForgeSouillac/"
          >
            <ArrowIcon />
            <span className="ml-2 h-7">facebook</span>
          </a>
        </li>

        {/* Instagram */}
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/your_instagram_here" // <-- replace with your real handle
          >
            <ArrowIcon />
            <span className="ml-2 h-7">instagram</span>
          </a>
        </li>

        {/* Contact (internal link) */}
        <li>
          <Link
            href="/contact"
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          >
            <ArrowIcon />
            <span className="ml-2 h-7">contact</span>
          </Link>
        </li>
      </ul>

      <p className="mt-4 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} <b>La Forge au fil du temps</b>, tous
        droits réservés
      </p>

      <p className="text-neutral-600 dark:text-neutral-300">
        46200 Souillac, France
      </p>

      <p className="text-neutral-600 dark:text-neutral-300">
        Tél. : 07 67 61 68 88
      </p>

      <img
        src="images/association/asso-la-forge.png"
        alt="Site logo"
        className="mx-auto mt-4 w-32"
      />
    </footer>
  );
}
