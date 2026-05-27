import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

export type GalleryEvent = {
  ru: string;
  title: string;
  meta: string;
  images: string[];
};

type Props = { event: GalleryEvent; onClose: () => void };

export const Lightbox = ({ event, onClose }: Props) => {
  const [i, setI] = useState(0);
  const n = event.images.length;

  const prev = useCallback(() => setI((v) => (v - 1 + n) % n), [n]);
  const next = useCallback(() => setI((v) => (v + 1) % n), [n]);

  // keyboard nav + scroll lock
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next]);

  return (
    <motion.div
      className="lb-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClose}
    >
      <div className="lb-top" onClick={(e) => e.stopPropagation()}>
        <div>
          <span className="ru">{event.ru}</span>
          <div className="ttl">{event.title}</div>
          <div className="mt">{event.meta}</div>
        </div>
        <button type="button" className="lb-close" onClick={onClose}>
          Close <span className="x">✕</span>
        </button>
      </div>

      <div className="lb-stage" onClick={(e) => e.stopPropagation()}>
        {n > 1 && (
          <button type="button" className="lb-arrow prev" onClick={prev} aria-label="Previous">
            ←
          </button>
        )}
        <motion.img
          key={i}
          src={event.images[i]}
          alt={`${event.title} — ${i + 1}`}
          className="lb-img"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        />
        {n > 1 && (
          <button type="button" className="lb-arrow next" onClick={next} aria-label="Next">
            →
          </button>
        )}
      </div>

      <div className="lb-bottom" onClick={(e) => e.stopPropagation()}>
        <div className="lb-thumbs">
          {event.images.map((src, idx) => (
            <button
              type="button"
              key={idx}
              className={`lb-thumb${idx === i ? " active" : ""}`}
              onClick={() => setI(idx)}
              aria-label={`Image ${idx + 1}`}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
        <div className="lb-counter">
          <b>{String(i + 1).padStart(2, "0")}</b> / {String(n).padStart(2, "0")}
        </div>
      </div>
    </motion.div>
  );
};
