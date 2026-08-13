"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

type GalleryItem = {
  src: string;
  label: string;
};

export function LightboxGallery({
  items,
  layout = "grid",
  galleryId,
}: {
  items: GalleryItem[];
  layout?: "grid" | "masonry";
  galleryId: string;
}) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const close = React.useCallback(() => setActiveIndex(null), []);
  const next = React.useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length]
  );
  const prev = React.useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + items.length) % items.length
      ),
    [items.length]
  );

  React.useEffect(() => {
    if (activeIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, next, prev]);

  return (
    <>
      <div
        className={cn(
          layout === "grid"
            ? "grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4"
            : "columns-2 gap-4 sm:columns-3 md:columns-4 [&>*]:mb-4"
        )}
      >
        {items.map((item, i) => (
          <motion.button
            key={`${galleryId}-${i}`}
            layoutId={`${galleryId}-${i}`}
            onClick={() => setActiveIndex(i)}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className={cn(
              "group relative block w-full overflow-hidden rounded-lg border border-walnut/10 bg-walnut/5 text-start shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass",
              layout === "grid" ? "aspect-square" : "mb-4 break-inside-avoid"
            )}
          >
            <Image
              src={item.src}
              alt={item.label}
              width={640}
              height={640}
              className={cn(
                "w-full transition-transform duration-500 group-hover:scale-105",
                layout === "grid" ? "h-full object-cover" : "h-[260px] w-full object-cover sm:h-[280px] md:h-[320px]"
              )}
              unoptimized
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-walnut/80 to-transparent p-3 text-xs font-semibold text-sand opacity-0 transition-opacity group-hover:opacity-100">
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-walnut/95 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              layoutId={`${galleryId}-${activeIndex}`}
              className="relative max-h-[85vh] w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={items[activeIndex].src}
                alt={items[activeIndex].label}
                width={1000}
                height={1000}
                className="max-h-[85vh] w-full rounded-lg object-contain"
                unoptimized
              />
              <p className="mt-3 text-center text-sm font-semibold text-sand/90">
                {items[activeIndex].label}
              </p>
            </motion.div>

            <button
              onClick={close}
              aria-label="إغلاق"
              className="absolute end-5 top-5 rounded-full p-2 text-sand/80 hover:text-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
            >
              <X className="h-7 w-7" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="السابق"
              className="absolute start-3 top-1/2 -translate-y-1/2 rounded-full bg-sand/10 p-2 text-sand hover:bg-sand/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass sm:start-6"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="التالي"
              className="absolute end-3 top-1/2 -translate-y-1/2 rounded-full bg-sand/10 p-2 text-sand hover:bg-sand/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass sm:end-6"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
