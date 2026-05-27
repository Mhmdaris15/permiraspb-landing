import { useEffect } from "react";

/**
 * Global scroll-reveal — faithful port of the prototype's IIFE.
 * Observes every `.reveal` / `.lines` element, adds `.in` once it
 * crosses 12% visibility, then unobserves. CSS owns the transition.
 */
export const useReveal = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    const els = document.querySelectorAll<HTMLElement>(".reveal, .lines");
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};
