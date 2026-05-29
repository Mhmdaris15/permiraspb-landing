import logoSmall from "../../assets/permira-logo-small.png";
import { useClock } from "../../hooks/useClock";

/** Fixed top bar + corner ticks + vertical coordinate rails. */
export const Chrome = () => {
  const clock = useClock();

  return (
    <>
      <div className="ticks">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="rail l">59.9343° N · 30.3351° E — Набережная Невы</div>
      <div className="rail r">Perhimpunan Mahasiswa Indonesia Rusia · СПб</div>

      <header className="chrome">
        <div className="brand">
          <span className="mark">
            <img src={logoSmall} alt="Permira" />
          </span>
          <span>Permira&nbsp;/&nbsp;Saint Petersburg</span>
        </div>
        <nav className="nav">
          <a href="#manifesto">Manifesto</a>
          <a href="#city">City</a>
          <a href="#chapters">Chapters</a>
          <a href="#dispatches">Dispatches</a>
          <a href="#documentation">Field</a>
          <a href="#archive">Archive</a>
          <a href="#structure">Cabinet</a>
          <a href="#join">Join</a>
        </nav>
        <div className="clock">{clock}</div>
      </header>
    </>
  );
};
