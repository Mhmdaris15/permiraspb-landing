import { useEffect, useRef } from "react";

type Stat = { count: string; sup?: string; label: React.ReactNode; d2?: boolean };

const STATS: Stat[] = [
  { count: "04", label: <>Departemen · PSDMK · M&amp;B · KMS · Kominfo</> },
  { count: "30", label: <>Peserta Summer Camp · 15 ID + 15 RU</>, d2: true },
  { count: "500", label: <>Audience target · AMARTI on Дворцовая Пл.</> },
  {
    count: "11",
    sup: ",000 km",
    label: <>From the equator · khatulistiwa to the Neva</>,
    d2: true,
  },
  { count: "—9", sup: "°C", label: <>Median January · last decade in SPb</> },
];

/**
 * Animated counter — cubic-eased count-up that preserves leading-zero padding
 * ("04" stays "04") and renders em-dash negatives as a minus ("—9" → "−9").
 * Direct port of the prototype's stat-counter IIFE.
 */
const StatCounter = ({ stat }: { stat: Stat }) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const span = root.querySelector<HTMLElement>(".count");
    if (!span) return;

    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(root);

          const raw = stat.count.replace("—", "-");
          const isNeg = raw.startsWith("-");
          const digits = raw.replace("-", "");
          const padLen =
            digits.length > 1 && digits.startsWith("0") ? digits.length : 0;
          const n = parseInt(digits, 10);
          const pad = (v: number) =>
            padLen ? String(v).padStart(padLen, "0") : String(v);

          const DUR = 1600;
          const t0 = performance.now();
          const step = (now: number) => {
            const k = Math.min(1, (now - t0) / DUR);
            const eased = 1 - Math.pow(1 - k, 3);
            const v = Math.round(n * eased);
            span.textContent = (isNeg ? "−" : "") + pad(v);
            if (k < 1) requestAnimationFrame(step);
            else span.textContent = (isNeg ? "−" : "") + pad(n);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.4 },
    );
    io.observe(root);
    return () => io.disconnect();
  }, [stat]);

  return (
    <div className={`stat reveal${stat.d2 ? " reveal-d2" : ""}`} ref={rootRef}>
      <div className="v">
        <span className="count">0</span>
        {stat.sup && <sup>{stat.sup}</sup>}
      </div>
      <div className="l">{stat.label}</div>
    </div>
  );
};

export const Stats = () => (
  <section id="stats">
    <div className="eyebrow reveal" style={{ color: "var(--paper)", opacity: 0.85 }}>
      <span className="num" style={{ color: "var(--paper)" }}>
        № 06 / 08
      </span>
      <span className="bar" style={{ background: "rgba(239,225,220,.3)" }} />
      <span>Census · Перепись</span>
    </div>

    <div className="stats-grid" style={{ marginTop: 48 }}>
      <div className="lead reveal">
        Nevaswara,
        <br />
        <em>measured in numbers</em>
        <br />
        we can still verify.
        <small>From the notulen · Apr–Mei 2026</small>
      </div>

      {STATS.map((s, i) => (
        <StatCounter key={i} stat={s} />
      ))}
    </div>
  </section>
);
