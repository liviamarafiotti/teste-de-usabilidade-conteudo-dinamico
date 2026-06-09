import { useFlow, useFlowDispatch } from "../../flow/FlowContext";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Switch from "../ui/Switch";

function DeviceToggle() {
  return (
    <div className="flex items-center gap-1 rounded-md border border-border p-0.5">
      <span className="flex h-7 w-9 items-center justify-center rounded-[6px] bg-primary-surface text-white">
        <Icon name="monitor" size={18} />
      </span>
      <span className="flex h-7 w-9 items-center justify-center rounded-[6px] text-ink-low">
        <Icon name="smartphone" size={18} />
      </span>
    </div>
  );
}

function AccordionRow({ label, beta, expanded, children }: { label: string; beta?: boolean; expanded?: boolean; children?: React.ReactNode }) {
  return (
    <div className="border-b border-border/70">
      <button type="button" className="flex w-full items-center gap-2 py-3 text-left">
        <Icon name="folder" size={24} className="text-primary-70" />
        <span className="flex-1 font-dm text-[16px] font-bold tracking-[-0.16px] text-primary-70">{label}</span>
        {beta && (
          <span className="rounded bg-fieldbg px-1.5 py-0.5 font-nunito text-[11px] font-bold tracking-wide text-ink-low">
            BETA
          </span>
        )}
        <Icon name={expanded ? "chevron-up" : "chevron-down"} size={24} className="text-ink-low" />
      </button>
      {expanded && children}
    </div>
  );
}

export default function ElementPanel() {
  const { elementDynamicOn } = useFlow();
  const dispatch = useFlowDispatch();

  return (
    <aside className="absolute bottom-0 left-0 top-[109px] z-[25] flex w-[350px] animate-slide-in-left flex-col bg-surface shadow-lg">
      {/* header */}
      <div className="flex h-[88px] items-center gap-4 px-6">
        <button
          type="button"
          onClick={() => dispatch({ type: "CLOSE_ELEMENT_PANEL" })}
          className="flex items-center gap-2 font-dm text-[16px] font-bold tracking-[-0.16px] text-primary-70"
        >
          <Icon name="arrow-left" size={20} />
          Botão
        </button>
        <div className="ml-auto">
          <DeviceToggle />
        </div>
      </div>
      <div className="h-px bg-border" />

      {/* body */}
      <div className="flex-1 overflow-y-auto px-6">
        {/* Dynamic content switch */}
        <div className="flex flex-col gap-2 py-6">
          <div className="flex items-center gap-3">
            <Switch
              checked={elementDynamicOn}
              onChange={(on) => dispatch({ type: "SET_ELEMENT_DYNAMIC", on })}
              aria-label="Conteúdo dinâmico"
            />
            <span className="flex items-center gap-2">
              <Icon name="code-merge" size={24} className="text-ink-high" />
              <span className="font-nunito ss02 text-[16px] font-bold tracking-[-0.16px] text-ink-high">
                Conteúdo dinâmico
              </span>
            </span>
          </div>
          <p className="font-nunito ss02 text-[14px] tracking-[-0.14px] text-ink-low">
            A regra da visualização será aplicada no botão.
          </p>
        </div>
        <div className="h-px bg-border" />

        {/* Sections */}
        <AccordionRow label="Inteligência Artificial" beta expanded={elementDynamicOn}>
          <div className="mb-4 rounded-md border border-border p-4">
            <p className="flex items-center gap-2 font-dm text-[15px] font-bold text-ink-high">
              <Icon name="pen" size={18} className="text-ink-high" /> Botões
            </p>
            <p className="mt-1 font-nunito ss02 text-[13px] leading-snug text-ink-low">
              Sugestões de texto para incentivar ação.
            </p>
            <Button variant="outline" size="sm" className="mt-3 w-full" leftIcon={<Icon name="code-merge" size={16} />}>
              Gerar texto do botão
            </Button>
          </div>
        </AccordionRow>
        <AccordionRow label="Opções" expanded={elementDynamicOn}>
          <div className="mb-4 flex flex-col gap-3 pb-1">
            <label className="flex flex-col gap-1.5">
              <span className="font-nunito ss02 text-[13px] font-bold text-ink-high">Texto do botão</span>
              <input
                readOnly
                value="Agende uma reunião de diagnóstico"
                className="h-9 rounded-sm border border-border-interactive px-3 font-nunito text-[14px] text-ink-high"
              />
            </label>
          </div>
        </AccordionRow>
        <AccordionRow label="Estilos de texto" />
        {!elementDynamicOn && <AccordionRow label="Dados do elemento" />}
      </div>

      {/* footer */}
      <div className="flex justify-end border-t border-border px-6 py-4">
        <Button variant="outline" size="md" onClick={() => dispatch({ type: "CLOSE_ELEMENT_PANEL" })}>
          Fechar
        </Button>
      </div>
    </aside>
  );
}
