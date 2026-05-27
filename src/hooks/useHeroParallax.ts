import { useEffect, type RefObject } from "react";

/**
 * Subtle hero-title parallax — three rows translate at different scroll
 * multipliers (-0.02 / -0.06 / +0.04) for depth. Port of the prototype IIFE.
 */
export const useHeroParallax = (titleRef: RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const rows = el.querySelectorAll<HTMLElement>(".row");

    const onScroll = () => {
      const y = window.scrollY;
      rows.forEach((r, i) => {
        const offset = i === 1 ? -y * 0.06 : i === 2 ? y * 0.04 : -y * 0.02;
        r.style.translate = `${offset}px 0`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [titleRef]);
};
