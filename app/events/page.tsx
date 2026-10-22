import Image from "next/image";
import { createClient } from "@/lib/supabase/server";
import Gallery, { type GalleryImage } from "../components/gallery";

export const metadata = {
  title: "Événements & Activités - La Forge au fil du temps",
  description:
    "Découvrez les événements culturels, expositions et activités organisés à la Forge de Bourzolles à Souillac. Restez informé des prochaines manifestations.",
};

export default async function EventsPage() {
  const supabase = await createClient();

  const { data: events } = await supabase
    .from("events")
    .select("*, event_images(id, url, alt, sort_order)")
    .eq("published", true)
    .order("event_date", { ascending: false, nullsFirst: false });

  return (
    <main className="min-h-screen">
      {/* Banner */}
      <div className="w-full relative h-[25vh] sm:h-[300px] md:h-[400px]">
        <Image
          src="/images/plafond.jpg"
          alt="Plafond de la maison du maître"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Page title */}
      <h1 className="text-5xl text-center p-6">Événements & Activités</h1>

      {!events?.length ? (
        <p className="text-center text-neutral-400 py-16">
          Aucun événement à venir pour le moment.
        </p>
      ) : (
        <div className="px-10 pb-16 space-y-14">
          {events.map((event) => {
            const images: GalleryImage[] = [...(event.event_images ?? [])]
              .sort(
                (a: { sort_order: number }, b: { sort_order: number }) =>
                  a.sort_order - b.sort_order
              )
              .map((img: { url: string; alt: string }) => ({
                src: img.url,
                width: 1600,
                height: 1000,
                alt: img.alt || event.title,
              }));

            const dateDisplay = event.event_date
              ? new Date(event.event_date + "T00:00:00").toLocaleDateString(
                  "fr-FR",
                  { day: "numeric", month: "long", year: "numeric" }
                ) + (event.event_time ? ` à ${event.event_time.slice(0, 5)}` : "")
              : null;

            return (
              <section
                key={event.id}
                className="border-b border-neutral-200 pb-14 last:border-b-0"
              >
                <h2 className="text-3xl font-semibold mb-1">{event.title}</h2>
                {dateDisplay && (
                  <p className="text-neutral-500 mb-4">{dateDisplay}</p>
                )}
                {event.description && (
                  <p className="text-xl mb-6 whitespace-pre-wrap">
                    {event.description}
                  </p>
                )}
                {images.length > 0 && <Gallery images={images} />}
              </section>
            );
          })}
        </div>
      )}
    </main>
  );
}
