"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

type GalleryProps = {
  images: GalleryImage[];
  className?: string;
  /** Tailwind grid cols on desktop; defaults to 2 */
  mdCols?: 2 | 3 | 4;
};

export default function Gallery({ images, className = "", mdCols = 2 }: GalleryProps) {
  const [index, setIndex] = useState<number>(-1);

  const slides = useMemo(
    () =>
      images.map((img) => ({
        src: img.src,
        width: img.width,
        height: img.height,
        alt: img.alt,
      })),
    [images]
  );

  const gridCols =
    mdCols === 4 ? "md:grid-cols-4" :
    mdCols === 3 ? "md:grid-cols-3" :
    "md:grid-cols-2";

  return (
    <>
      <div className={`grid grid-cols-1 ${gridCols} gap-6 ${className}`}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative block focus:outline-none"
            aria-label={`Ouvrir l’image ${i + 1} en plein écran`}
          >
            <Image
              src={img.src}
              alt={img.alt ?? ""}
              width={800}
              height={500}
              className="mx-auto rounded-lg transition-transform group-hover:scale-[1.01]"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
        plugins={[Thumbnails, Zoom]}
        thumbnails={{ position: "bottom", width: 100, height: 70 }}
        zoom={{ maxZoomPixelRatio: 2.5 }}
        animation={{ fade: 250, swipe: 250 }}
        carousel={{ finite: false, preload: 2 }}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
}