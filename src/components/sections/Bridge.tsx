import flagID from "../../assets/Flag_of_Indonesia.png";
import flagSPB from "../../assets/Flag_of_St_Petersburg_(Russia).png";
import flagRU from "../../assets/Flag_of_Russia.png";

/** Tropics → tundra bridge: two opposing marquees with a flag strip between. */
export const Bridge = () => (
  <div className="bridge">
    <div className="marquee" aria-hidden="true">
      <div className="item">
        <span>khatulistiwa</span>
        <span className="arrow">→</span>
        <span>
          <i>север</i>
        </span>
        <span>·</span>
        <span>tropics</span>
        <span className="arrow">→</span>
        <span>
          <i>tundra</i>
        </span>
        <span>·</span>
      </div>
      <div className="item">
        <span>khatulistiwa</span>
        <span className="arrow">→</span>
        <span>
          <i>север</i>
        </span>
        <span>·</span>
        <span>tropics</span>
        <span className="arrow">→</span>
        <span>
          <i>tundra</i>
        </span>
        <span>·</span>
      </div>
    </div>

    <div className="bridge-flags" aria-label="Indonesia · Saint Petersburg · Russia">
      <span className="flag">
        <img src={flagID} alt="" />
        <b>Indonesia</b>
      </span>
      <span className="sep" />
      <span className="flag">
        <img src={flagSPB} alt="" />
        <b>Санкт-Петербург</b>
      </span>
      <span className="sep" />
      <span className="flag">
        <img src={flagRU} alt="" />
        <b>Россия</b>
      </span>
    </div>

    <div className="marquee rev" aria-hidden="true">
      <div className="item">
        <span>JAKARTA</span>
        <span>·</span>
        <span>СПб</span>
        <span>·</span>
        <span>YOGYAKARTA</span>
        <span>·</span>
        <span>МОСКВА</span>
        <span>·</span>
        <span>BANDUNG</span>
        <span>·</span>
        <span>КАЗАНЬ</span>
        <span>·</span>
      </div>
      <div className="item">
        <span>JAKARTA</span>
        <span>·</span>
        <span>СПб</span>
        <span>·</span>
        <span>YOGYAKARTA</span>
        <span>·</span>
        <span>МОСКВА</span>
        <span>·</span>
        <span>BANDUNG</span>
        <span>·</span>
        <span>КАЗАНЬ</span>
        <span>·</span>
      </div>
    </div>
  </div>
);
