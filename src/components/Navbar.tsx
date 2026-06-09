import Switch from "./Switch";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar" data-node-id="8595:12787">
      <div className="navbar__logo" data-node-id="8595:12788">
        <span className="navbar__logo-lockup" aria-label="RD Station Marketing" role="img">
          <img className="navbar__logo-symbol" src="/assets/logo-symbol.svg" alt="" aria-hidden />
          <span className="navbar__logo-line" />
          <img className="navbar__logo-word" src="/assets/logo-marketing.svg" alt="" aria-hidden />
        </span>
      </div>

      <div className="navbar__content" data-node-id="8595:12791">
        <div className="navbar__left">
          <span className="navbar__divider" />
          <span className="navbar__text">Landing Pages</span>
          <span className="navbar__divider" />
          <span className="navbar__text navbar__text--bold">Teste liv 2025</span>
        </div>

        <div className="navbar__right">
          <span className="navbar__divider" />
          <span className="navbar__text">Salvamento automático</span>
          <Switch aria-label="Salvamento automático" defaultChecked />
          <span className="navbar__divider" />
          <span className="navbar__text">Automation tribe</span>
          <span className="navbar__divider" />
          <button type="button" className="navbar__exit">
            Sair do editor
          </button>
        </div>
      </div>
    </header>
  );
}
