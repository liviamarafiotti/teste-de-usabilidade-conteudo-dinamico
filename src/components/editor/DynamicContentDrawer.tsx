import { useFlow, useFlowDispatch } from "../../flow/FlowContext";
import Button from "../ui/Button";
import Drawer from "../ui/Drawer";
import Icon from "../ui/Icon";
import Message from "../ui/Message";
import Tooltip from "../ui/Tooltip";
import RuleAccordion from "./RuleAccordion";

/** Business rule: at most 5 rules can be created. */
const RULE_LIMIT = 5;

export default function DynamicContentDrawer() {
  const { draftRules } = useFlow();
  const dispatch = useFlowDispatch();
  const limitReached = draftRules.length >= RULE_LIMIT;

  return (
    <Drawer
      title="Conteúdo dinâmico"
      onClose={() => dispatch({ type: "CLOSE_DRAWER" })}
      footer={
        <div className="flex items-center gap-3">
          <Button variant="soft" onClick={() => dispatch({ type: "CLOSE_DRAWER" })}>
            Cancelar
          </Button>
          <Button variant="inverse" onClick={() => dispatch({ type: "SAVE_DRAWER" })}>
            Salvar
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-4 pb-6">
        <p className="font-dm text-[16px] font-medium leading-[1.5] tracking-[-0.16px] text-ink-high">
          Crie regras para personalizar os componentes da Landing Page de acordo com o perfil do visitante. Saiba mais{" "}
          <a href="#" className="font-bold text-primary-link hover:underline">
            neste artigo
          </a>
          .
        </p>

        <Message>
          Os elementos personalizáveis são <strong className="font-bold">botão, imagem e texto</strong>. O restante da
          Landing Page será a mesma em todas as versões.
        </Message>

        <Tooltip
          className="self-start"
          text="Você atingiu o limite de regras criadas."
          enabled={limitReached}
        >
          <Button
            variant="link"
            className="px-3"
            leftIcon={<Icon name="plus" size={24} />}
            disabled={limitReached}
            onClick={() => dispatch({ type: "ADD_DRAFT_RULE" })}
          >
            Criar regra
          </Button>
        </Tooltip>

        {draftRules.length > 0 && (
          <div className="flex flex-col">
            <div className="py-1">
              <div className="h-px w-full bg-border" />
            </div>
            {draftRules.map((rule) => (
              // Saved rules load collapsed; a freshly created rule opens expanded.
              <RuleAccordion key={rule.id} rule={rule} defaultExpanded={!!rule.draft} />
            ))}
          </div>
        )}
      </div>
    </Drawer>
  );
}
