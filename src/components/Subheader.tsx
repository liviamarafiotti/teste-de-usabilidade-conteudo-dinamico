import "./Subheader.css";

const STEPS = ["Modelo", "Editor", "Configurações", "Publicação"];

export default function Subheader() {
  return (
    <div className="subheader" data-node-id="8595:12762">
      <div className="subheader__container" data-node-id="8595:12771">
        <div className="subheader__left">
          <button type="button" className="btn btn--outline" data-node-id="8595:12774">
            <img className="btn__icon" src="/assets/arrow-left.svg" alt="" aria-hidden />
            <span>Voltar</span>
          </button>

          <nav className="steps" data-node-id="8595:12775" aria-label="Etapas">
            {STEPS.map((label, i) => (
              <div className="steps__item" key={label}>
                {i > 0 && (
                  <img
                    className="steps__chevron"
                    src="/assets/chevron-right.svg"
                    alt=""
                    aria-hidden
                  />
                )}
                <span className="steps__label">{label}</span>
              </div>
            ))}
          </nav>
        </div>

        <button type="button" className="btn btn--outline btn--dropdown" data-node-id="8595:12776">
          <img className="btn__icon btn__icon--24" src="/assets/code-merge.svg" alt="" aria-hidden />
          <span>Conteúdo dinâmico</span>
          <img className="btn__caret" src="/assets/caret-down.svg" alt="" aria-hidden />
        </button>

        <div className="subheader__actions" data-node-id="8595:12780">
          <button type="button" className="btn btn--outline" data-node-id="8595:12781">
            <span>Criar teste A/B</span>
          </button>
          <button type="button" className="btn btn--ghost btn--dm" data-node-id="8595:12782">
            <span>Edição avançada</span>
          </button>
          <button type="button" className="btn btn--ghost" data-node-id="8595:12783">
            <span>Pré-visualizar</span>
          </button>
          <div className="btn-group" data-node-id="8595:12784">
            <button type="button" className="btn btn--ghost">
              <span>Salvar</span>
            </button>
            <button type="button" className="btn btn--primary">
              <span>Salvar e avançar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
