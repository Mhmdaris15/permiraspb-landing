import { useEffect, useRef } from "react";

/**
 * Composited atmosphere layers, faithful to the prototype z-stack:
 *   .snow (z5) · .vignette (z80) · .grain (z90) · .cur (z100)
 * Cursor: RAF interpolation @0.22 easing, grows into a 64px red disc over
 * interactive elements. Snow: 70 randomised flakes. Both disabled on touch.
 */
export const Atmosphere = () => {
  const curRef = useRef<HTMLDivElement>(null);
  const snowRef = useRef<HTMLDivElement>(null);

  // ── custom cursor ──
  useEffect(() => {
    const cur = curRef.current;
    if (!cur) return;
    if (matchMedia("(hover:none)").matches) {
      cur.style.display = "none";
      return;
    }

    let x = innerWidth / 2,
      y = innerHeight / 2,
      tx = x,
      ty = y,
      raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      cur.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    // grow over interactive elements (delegated so it survives re-renders)
    const grow = (e: Event) => {
      if ((e.target as HTMLElement).closest("a,button,.chapter,.card,.btn,.doc"))
        cur.classList.add("lg");
    };
    const shrink = (e: Event) => {
      if ((e.target as HTMLElement).closest("a,button,.chapter,.card,.btn,.doc"))
        cur.classList.remove("lg");
    };
    document.addEventListener("mouseover", grow);
    document.addEventListener("mouseout", shrink);

    return () => {
      removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.removeEventListener("mouseover", grow);
      document.removeEventListener("mouseout", shrink);
    };
  }, []);

  // ── snow ──
  useEffect(() => {
    const root = snowRef.current;
    if (!root) return;
    const N = 70;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < N; i++) {
      const f = document.createElement("div");
      f.className = "flake";
      const size = Math.random() * 3 + 1.2;
      f.style.left = Math.random() * 100 + "vw";
      f.style.width = size + "px";
      f.style.height = size + "px";
      f.style.opacity = String(0.25 + Math.random() * 0.55);
      f.style.animationDuration = 8 + Math.random() * 14 + "s";
      f.style.animationDelay = -Math.random() * 20 + "s";
      f.style.setProperty("--drift", Math.random() * 120 - 60 + "px");
      if (size < 1.8) f.style.filter = "blur(.4px)";
      frag.appendChild(f);
    }
    root.appendChild(frag);
    return () => {
      root.innerHTML = "";
    };
  }, []);

  return (
    <>
      <div className="grain" />
      <div className="vignette" />
      <div className="cur" ref={curRef} />
      <div className="snow" ref={snowRef} />
    </>
  );
};
