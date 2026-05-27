import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Lightbox, type GalleryEvent } from "./Lightbox";

// Pull every optimised WebP, grouped by event folder, sorted by filename (01,02,…).
const modules = import.meta.glob(
  "../../assets/permira-programs/web/*/*.webp",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

const imagesByDir: Record<string, string[]> = {};
for (const path of Object.keys(modules).sort()) {
  const dir = path.split("/").slice(-2)[0];
  (imagesByDir[dir] ||= []).push(modules[path]);
}

type Event = {
  dir: string;
  ru: string;
  title: string;
  meta: string;
  tag: "Organised" | "Joined" | "Hosted";
  span?: "lg" | "md" | "wide";
};

const EVENTS: Event[] = [
  { dir: "wintercamp-3.0", ru: "Зимний лагерь 3.0", title: "Winter Camp 3.0", meta: "2026 · Outdoor SPb · flagship", tag: "Organised", span: "lg" },
  { dir: "spbgu-cultural-event", ru: "СПбГУ · Culture", title: "SPbGU Culture Fest", meta: "Saint Petersburg State Univ.", tag: "Joined", span: "md" },
  { dir: "kunjungan-dubes", ru: "Визит посла РИ", title: "Kunjungan Dubes", meta: "KBRI Moskow · the Ambassador", tag: "Hosted" },
  { dir: "baskets", ru: "Баскетбол", title: "Basket Permira", meta: "Minat & Bakat · weekly", tag: "Organised" },
  { dir: "karaoke-17an", ru: "Караоке · 17-an", title: "Karaoke 17-an", meta: "Independence night", tag: "Organised" },
  { dir: "christmas-eve", ru: "Сочельник", title: "Christmas Eve", meta: "Community · winter gathering", tag: "Joined", span: "wide" },
  { dir: "gorniy", ru: "Горный университет", title: "Universitas Gorniy", meta: "Mining University · visit", tag: "Joined", span: "lg" },
  { dir: "audiensi-vostocnaya", ru: "Восточный факультет", title: "Audiensi Vostochnaya", meta: "SPbGU Eastern Faculty", tag: "Joined", span: "wide" },
  { dir: "pertemuan-parlemen-muda", ru: "Молодёжный парламент", title: "Pertemuan Parlemen Muda", meta: "Youth Parliament · delegation", tag: "Joined", span: "wide" },
];

export const Documentation = () => {
  const [active, setActive] = useState<GalleryEvent | null>(null);

  return (
    <section id="documentation">
      <div className="eyebrow reveal">
        <span className="num">№ 04 / 08</span>
        <span className="bar" />
        <span>Dokumentasi · Хроника · Field</span>
      </div>

      <h2 className="head reveal reveal-d2">
        A year, <em>on the</em>
        <br />
        <span className="stroke">record.</span>
      </h2>

      <div className="doc-grid">
        {EVENTS.map((e, idx) => {
          const images = imagesByDir[e.dir] ?? [];
          if (!images.length) return null;
          return (
            <button
              type="button"
              key={e.dir}
              className={`doc reveal${e.span ? ` ${e.span}` : ""}${idx % 2 ? " reveal-d2" : ""}`}
              onClick={() =>
                setActive({ ru: e.ru, title: e.title, meta: e.meta, images })
              }
            >
              <img src={images[0]} alt={e.title} loading="lazy" />
              <span className={`tag${e.tag === "Joined" ? " join" : ""}`}>{e.tag}</span>
              <span className="nshot">
                ▦ {String(images.length).padStart(2, "0")}
              </span>
              <div className="cap">
                <span className="ru">{e.ru}</span>
                <h3>{e.title}</h3>
                <div className="mt">{e.meta} · view gallery →</div>
              </div>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {active && <Lightbox event={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
};
