/** Two opposing-direction marquees bridging tropics → tundra. */
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
    <div className="marquee rev" aria-hidden="true" style={{ marginTop: 18 }}>
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
