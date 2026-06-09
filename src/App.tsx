import Navbar from "./components/Navbar";
import Subheader from "./components/Subheader";
import "./App.css";

export default function App() {
  return (
    <div className="frame" data-node-id="8595:12760" data-name="Edição do botão">
      <div className="frame__chrome">
        <Navbar />
        <Subheader />
      </div>

      <img
        className="frame__preview"
        src="/assets/preview.png"
        alt="Pré-visualização da landing page"
        data-node-id="8595:12761"
      />

      <aside className="frame__sidebar" data-node-id="8595:12809">
        <img
          className="frame__sidebar-img"
          src="/assets/component-list.png"
          alt="Editar Landing Page — lista de componentes"
        />
      </aside>
    </div>
  );
}
