type Voice = { q: string; initial: string; name: React.ReactNode; meta: string; d2?: boolean };

const VOICES: Voice[] = [
  {
    q: "The first time I saw the Neva freeze, I called my mother in Bandung and held the phone out the window. She listened to the silence for a long time and said: it sounds like the inside of a temple.",
    initial: "R",
    name: "Rifqi A.",
    meta: "ITMO · PSDMK",
  },
  {
    q: "Permira is not an organisation. It is the small lamp my senior left on the night I arrived from Surabaya, jet-lagged, in October, knowing zero Russian and one Russian person.",
    initial: "S",
    name: "Salsabila R.",
    meta: "SPbU · Kemahasiswaan",
    d2: true,
  },
  {
    q: "We argue in three languages and forgive each other in one. Most of the forgiving happens in the kitchen — usually over a portion of risol at 349 rubel.",
    initial: "D",
    name: "Dimas P.",
    meta: "Pavlov First · Kantin Permira",
  },
  {
    q: "Я никогда не думала, что буду готовить ренданг на седьмом этаже в Петроградском районе. Но вот мы здесь, и это удивительно хорошо.",
    initial: "A",
    name: "Аnnisa H.",
    meta: "SPbU · Kominfo",
    d2: true,
  },
];

export const Voices = () => (
  <section id="voices">
    <div className="eyebrow reveal">
      <span className="num">№ 07 / 08</span>
      <span className="bar" />
      <span>Voices · Голоса</span>
    </div>

    <h2 className="head reveal reveal-d2">
      The <em>warmth</em> we
      <br />
      brought <span className="stroke">with us.</span>
    </h2>

    <div className="voices-grid">
      {VOICES.map((v, i) => (
        <div key={i} className={`voice reveal${v.d2 ? " reveal-d2" : ""}`}>
          <p className="q">{v.q}</p>
          <div className="who">
            <div className="pic">{v.initial}</div>
            <div>
              <b>{v.name}</b>
              {v.meta}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
