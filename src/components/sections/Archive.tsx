type Item = {
  yr: string;
  title: React.ReactNode;
  body: string;
  loc: string;
  red?: boolean;
};

const ITEMS: Item[] = [
  {
    yr: "Okt '25",
    title: (
      <>
        Pelantikan
        <br />
        Nevaswara
      </>
    ),
    body: "The cabinet is sworn in. Four departments named, a year mapped on a single sheet of paper.",
    loc: "Cabinet · SPb",
    red: true,
  },
  {
    yr: "Jan–Apr",
    title: (
      <>
        Permira Camp
        <br />
        preparation
      </>
    ),
    body: "Basket, karaoke, bulu tangkis with PJ Aji HKP — four months of rehearsals for the year's first gathering.",
    loc: "Minat & Bakat",
  },
  {
    yr: "Apr '26",
    title: (
      <>
        Halal Bihalal
        <br />
        &amp; first rapat
      </>
    ),
    body: "The community gathers post-Ramadan. The first rapat permiter convenes — PSDMK, M&B, KMS, Kominfo all report in.",
    loc: "Permira Sepekan",
  },
  {
    yr: "Mei '26",
    title: (
      <>
        ITMO &amp; SPbGU
        <br />
        Culture Fest
      </>
    ),
    body: "Two culture festivals across two universities. The cabinet, in public, in costume, with sambal.",
    loc: "ITMO · SPbGU",
  },
  {
    yr: "Jun–Jul",
    title: (
      <>
        Ekologi day
        <br />
        &amp; Summer Camp
      </>
    ),
    body: "An ecology event closes June. Then thirty students — half Indonesian, half Russian — pitch tents for the cabinet's flagship.",
    loc: "Outdoor SPb",
    red: true,
  },
  {
    yr: "Agu '26",
    title: (
      <>
        17 Agustus,
        <br />
        diaspora edition
      </>
    ),
    body: "The whole Indonesian diaspora in Russia, on one field. Silat, kursi panas, tarik tambang. No sponsors.",
    loc: "All-Russia",
  },
  {
    yr: "Sep '26",
    title: (
      <>
        AMARTI
        <br />
        &amp; PERMUN
      </>
    ),
    body: "A-Cup tournament. AMB on Дворцовая. Model UN on a single economic theme. Three best papers, published.",
    loc: "Дворцовая Пл.",
    red: true,
  },
  {
    yr: "Okt '26",
    title: (
      <>
        LPJ &amp; serah
        <br />
        terima jabatan
      </>
    ),
    body: "Reports filed, awards given, the year handed gently to the next cabinet. Permira Award for the year's steadiest participation.",
    loc: "Closing · Nevaswara",
  },
];

export const Archive = () => (
  <section id="archive">
    <div className="eyebrow reveal">
      <span className="num">№ 05 / 08</span>
      <span className="bar" />
      <span>Kalender Nevaswara · Календарь · 2025—2026</span>
    </div>

    <h2 className="head reveal reveal-d2">
      A cabinet, <em>month by</em>
      <br />
      careful <span className="stroke">month.</span>
    </h2>

    <div className="tl-rail">
      {ITEMS.map((it, i) => (
        <div key={i} className={`tl-item reveal${it.red ? " red" : ""}`}>
          <span className="yr">{it.yr}</span>
          <h4>{it.title}</h4>
          <p>{it.body}</p>
          <div className="loc">{it.loc}</div>
        </div>
      ))}
    </div>
  </section>
);
