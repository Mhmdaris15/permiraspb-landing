import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Lightbox } from "./Lightbox";

// All Saint Petersburg postcards, optimised by scripts/generate-assets.cjs.
const modules = import.meta.glob(
  "../../assets/saint-petersburg/web/*.webp",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

const IMAGES: string[] = Object.keys(modules)
  .sort()
  .map((k) => modules[k]);

export const City = () => {
  const [hero, setHero] = useState(0);
  const [open, setOpen] = useState(false);
  const total = IMAGES.length;

  if (!total) return null;

  return (
    <>
      <section id="city">
        <div className="city-hero">
          <img src={IMAGES[hero]} alt="Saint Petersburg" />
          <div className="city-overlay">
            <div className="top">
              <div className="eyebrow reveal">
                <span className="num">— Interlude</span>
                <span className="bar" />
                <span>Postcards · Открытки · The city</span>
              </div>
              <div className="frame-counter">
                Frame{" "}
                <span style={{ color: "var(--paper)" }}>
                  {String(hero + 1).padStart(2, "0")}
                </span>{" "}
                / {String(total).padStart(2, "0")}
              </div>
            </div>

            <div className="bot">
              <div>
                <h2 className="reveal reveal-d2">
                  Санкт-<em>Петербург.</em>
                </h2>
                <p className="sub reveal reveal-d2">
                  The city that writes in two alphabets, that does not know our
                  country existed — and that we are, slowly, learning to call a
                  kind of home.
                </p>
              </div>
              <button
                type="button"
                className="cta"
                onClick={() => setOpen(true)}
              >
                View {String(total).padStart(2, "0")} postcards <span>→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="city-thumbs" role="list">
          {IMAGES.map((src, i) => (
            <button
              key={i}
              type="button"
              className={`city-thumb${i === hero ? " active" : ""}`}
              onMouseEnter={() => setHero(i)}
              onFocus={() => setHero(i)}
              onClick={() => {
                setHero(i);
                setOpen(true);
              }}
              aria-label={`Postcard ${i + 1}`}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <Lightbox
            event={{
              ru: "Санкт-Петербург",
              title: "Saint Petersburg",
              meta: "Postcards · gathered from the city",
              images: IMAGES,
            }}
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
