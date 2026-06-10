import { useFlow, useFlowDispatch } from "../../flow/FlowContext";
import { cn } from "../../lib/cn";
import Button from "../ui/Button";
import Dropdown, { DropdownItem } from "../ui/Dropdown";
import Icon from "../ui/Icon";

const STEPS = ["Modelo", "Editor", "Configurações", "Publicação"];

export default function Subheader() {
  const { rules, activeRuleId, ruleDropdownOpen } = useFlow();
  const dispatch = useFlowDispatch();

  const activeRule = rules.find((r) => r.id === activeRuleId);
  const buttonLabel = activeRule ? activeRule.name : "Conteúdo dinâmico";

  return (
    <div className="relative z-20 h-[65px] border-b border-neutral20 bg-surface">
      <div className="absolute inset-x-4 top-4 flex h-8 items-center gap-2">
        {/* Left: back + steps */}
        <div className="flex h-full min-w-0 flex-1 items-center gap-6">
          <Button variant="outline" size="sm" leftIcon={<Icon name="arrow-left" size={20} />}>
            Voltar
          </Button>
          <nav aria-label="Etapas" className="flex h-full items-center">
            {STEPS.map((label, i) => (
              <div key={label} className={cn("flex items-center", i > 0 && "pl-1")}>
                {i > 0 && <Icon name="chevron-right" size={24} className="mr-1 text-ink-mid" />}
                <span className="whitespace-nowrap font-dm text-[16px] font-bold leading-[1.5] tracking-[-0.16px] text-ink-mid">
                  {label}
                </span>
              </div>
            ))}
          </nav>
        </div>

        {/* Dynamic content / rule selector */}
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => dispatch({ type: "TOGGLE_RULE_DROPDOWN" })}
            className={cn(
              "flex h-8 items-center gap-[5px] rounded-sm border border-border-interactive px-3 py-1.5",
              "font-nunito ss02 text-[14px] font-bold tracking-[-0.14px] text-primary-70",
              "transition-colors duration-200 hover:bg-primary-70/5"
            )}
          >
            <Icon name="code-merge" size={24} />
            <span>{buttonLabel}</span>
            <Icon name="caret-down" size={20} className={cn("transition-transform duration-200", ruleDropdownOpen && "rotate-180")} />
          </button>

          <Dropdown
            open={ruleDropdownOpen}
            onClose={() => dispatch({ type: "TOGGLE_RULE_DROPDOWN", open: false })}
            className="w-[205px]"
            style={{ top: "calc(100% + 6px)", left: 0 }}
          >
            {/* Rule preview options appear once rules exist */}
            {rules.length > 0 && (
              <div className="pb-2">
                <DropdownItem bold active={activeRuleId === "padrao"} onClick={() => dispatch({ type: "SET_ACTIVE_RULE", id: "padrao" })}>
                  Padrão
                </DropdownItem>
                {rules.map((rule) => (
                  <DropdownItem
                    key={rule.id}
                    bold
                    active={rule.id === activeRuleId}
                    onClick={() => dispatch({ type: "SET_ACTIVE_RULE", id: rule.id })}
                  >
                    {rule.name}
                  </DropdownItem>
                ))}
                <div className="mt-2 h-px bg-border" />
              </div>
            )}

            {/* Footer action: Criar regra -> opens the Conteúdo dinâmico drawer */}
            <div className="px-4">
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                leftIcon={<Icon name="plus" size={20} />}
                onClick={() => dispatch({ type: "OPEN_DRAWER" })}
              >
                Criar regra
              </Button>
            </div>
          </Dropdown>
        </div>

        {/* Right: actions */}
        <div className="flex shrink-0 items-center gap-2">
          <Button variant="outline" size="sm">
            Criar teste A/B
          </Button>
          <Button variant="ghost" size="sm" className="font-dm">
            Edição avançada
          </Button>
          <Button variant="ghost" size="sm">
            Pré-visualizar
          </Button>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Salvar
            </Button>
            <Button variant="primary" size="sm">
              Salvar e avançar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
