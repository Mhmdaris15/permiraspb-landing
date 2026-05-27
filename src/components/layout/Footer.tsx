import logoSmall from "../../assets/permira-logo-small.png";
import kbri from "../../assets/kbri-moskow.png";

export const Footer = () => (
  <footer>
    <div className="affil">
      <div className="logo permira">
        <img src={logoSmall} alt="Permira Saint Petersburg" />
      </div>
      <div className="between">
        <em>Perhimpunan Mahasiswa Indonesia · Rusia</em>
        <br />
        Cabang Saint Petersburg — <b>Kabinet Nevaswara · 2025—2026</b>
        Under the auspices of the Embassy of the Republic of Indonesia, Moscow
      </div>
      <div className="logo kbri">
        <img src={kbri} alt="KBRI Moskow" />
      </div>
    </div>

    <div className="foot-grid">
      <div className="col">
        <h5>Permira SPb</h5>
        <a href="#">About the union</a>
        <a href="#">AD/ART (Charter)</a>
        <a href="#">Notulen rapat</a>
        <a href="#">Blueprint 2025/26</a>
      </div>
      <div className="col">
        <h5>Departemen</h5>
        <a href="#chapters">PSDMK</a>
        <a href="#chapters">Minat &amp; Bakat</a>
        <a href="#chapters">Kemahasiswaan</a>
        <a href="#chapters">Kominfo</a>
      </div>
      <div className="col">
        <h5>Program</h5>
        <a href="#dispatches">Summer Camp</a>
        <a href="#dispatches">AMARTI</a>
        <a href="#dispatches">PERMUN</a>
        <a href="#dispatches">Kantin Permira</a>
      </div>
      <div className="col">
        <h5>Elsewhere</h5>
        <a href="https://www.instagram.com/permiraspb/" target="_blank" rel="noreferrer">
          Instagram · @permiraspb
        </a>
        <a href="https://t.me/permiraspb" target="_blank" rel="noreferrer">
          Telegram · @permiraspb
        </a>
        <a href="https://vk.com/permiraspb" target="_blank" rel="noreferrer">
          VKontakte · /permiraspb
        </a>
      </div>

      <div className="sig">
        <div className="big">
          Sampai <em>jumpa</em>
          <br />в Петербурге.
        </div>
        <div style={{ textAlign: "right" }}>
          <div>© Permira Saint Petersburg · 2025—2026</div>
          <div style={{ marginTop: 6, opacity: 0.6 }}>
            Kabinet Nevaswara · printed in two alphabets
          </div>
        </div>
      </div>

      <div className="credit">
        <span className="by">Designed &amp; built by</span>
        <a
          className="who"
          href="https://aris-septanugroho-portfolio.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Muhammad Aris Septanugroho
        </a>
        <a
          className="lk"
          href="https://www.linkedin.com/in/muhammad-aris-septanugroho/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a className="lk" href="https://github.com/Mhmdaris15" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a
          className="lk"
          href="https://aris-septanugroho-portfolio.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Portfolio
        </a>
      </div>
    </div>
  </footer>
);
