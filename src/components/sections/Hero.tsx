import { useRef } from "react";
import { useHeroParallax } from "../../hooks/useHeroParallax";

export const Hero = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  useHeroParallax(titleRef);

  return (
    <section className="hero">
      <div className="super">
        <div>Perhimpunan Mahasiswa Indonesia · Rusia</div>
        <div className="mid">
          <em>The voice of an archipelago, carried across the Neva</em>
        </div>
        <div style={{ textAlign: "right" }}>Kabinet Nevaswara · 2025—2026</div>
      </div>

      <div className="title" ref={titleRef}>
        <span className="row reveal lines">
          <span className="line">
            <span>ПЕРМИРА</span>
          </span>
        </span>
        <span className="row outline shift reveal reveal-d2 lines">
          <span className="line">
            <span>permira</span>
          </span>
        </span>
        <span className="row reveal reveal-d3 lines">
          <span className="line">
            <span>
              <span className="accent">saint</span> petersburg{" "}
              <span className="small">— kabinet nevaswara · 2025/26</span>
            </span>
          </span>
        </span>
      </div>

      <div className="meta">
        <div className="lede reveal reveal-d4">
          <em>Perhimpunan Mahasiswa Indonesia</em> — a chapter on the Neva,{" "}
          <b>learning a city that never quite thaws.</b>
        </div>
        <div className="col reveal reveal-d4">
          Latitude<strong>59°56′ N</strong>
          Longitude<strong>30°20′ E</strong>
        </div>
        <div className="col reveal reveal-d4">
          Cabinet<strong>Nevaswara</strong>
          Departments<strong>04 · PSDMK · M&amp;B · Kemahasiswaan · Kominfo</strong>
        </div>
        <div className="col reveal reveal-d4">
          Affiliated<strong>KBRI Moskow</strong>
          Mandate<strong>2025—2026</strong>
        </div>
        <div className="scroll reveal reveal-d4">
          <span>Scroll</span>
          <span className="arrow" />
          <span>Прокрутить</span>
        </div>
      </div>
    </section>
  );
};
