import { useState } from "react";
import { useFlowDispatch } from "../../flow/FlowContext";
import type { Rule } from "../../flow/types";
import Icon from "../ui/Icon";
import Select from "../ui/Select";

const CATEGORY_OPTIONS = [
  { value: "fonte", label: "Fonte de referência" },
  { value: "trafego", label: "Origem do tráfego" },
  { value: "dispositivo", label: "Dispositivo" },
  { value: "localizacao", label: "Localização" },
];

const OPERATOR_OPTIONS = [
  { value: "igual", label: "É igual a" },
  { value: "contem", label: "Contém" },
  { value: "comeca", label: "Começa com" },
  { value: "termina", label: "Termina com" },
];

export default function RuleAccordion({ rule }: { rule: Rule }) {
  const dispatch = useFlowDispatch();
  const [expanded, setExpanded] = useState(true);
  const [editingName, setEditingName] = useState(false);

  const placeholder = rule.condition.operator === "igual" ? "http://www.meusite.com.br/" : "palavra-chave ou domínio";

  return (
    <div className="flex flex-col gap-3 border-b border-border pb-3">
      {/* title */}
      <div className="flex items-center gap-2 py-3">
        {editingName ? (
          <input
            autoFocus
            value={rule.name}
            onChange={(e) => dispatch({ type: "UPDATE_DRAFT_RULE", id: rule.id, patch: { name: e.target.value } })}
            onBlur={() => setEditingName(false)}
            onKeyDown={(e) => e.key === "Enter" && setEditingName(false)}
            className="flex-1 rounded-sm border border-primary-link px-2 py-1 font-nunito ss02 text-[16px] font-bold tracking-[-0.16px] text-ink-high focus:outline-none"
          />
        ) : (
          <p className="flex-1 font-nunito ss02 text-[16px] font-bold leading-[1.5] tracking-[-0.16px] text-ink-high">
            {rule.name}
          </p>
        )}
        <button
          type="button"
          aria-label="Editar nome da regra"
          onClick={() => setEditingName((v) => !v)}
          className="text-primary-link transition-colors hover:text-primary-70"
        >
          <Icon name="pen" size={24} />
        </button>
        <button
          type="button"
          aria-label={expanded ? "Recolher" : "Expandir"}
          onClick={() => setExpanded((v) => !v)}
          className="text-ink-low transition-transform duration-200"
        >
          <Icon name={expanded ? "chevron-up" : "chevron-down"} size={24} />
        </button>
      </div>

      {/* details */}
      {expanded && (
        <div className="flex flex-col items-end gap-4 rounded-sm bg-fieldbg px-3 py-4 animate-fade-in">
          <Select
            label="Personalizar o conteúdo por"
            placeholder="Selecione uma categoria"
            value={rule.category}
            options={CATEGORY_OPTIONS}
            onChange={(value) => dispatch({ type: "UPDATE_DRAFT_RULE", id: rule.id, patch: { category: value } })}
          />

          {rule.category && (
            <div className="flex w-full gap-2 animate-fade-in">
              <div className="w-[120px] shrink-0">
                <Select
                  value={rule.condition.operator}
                  options={OPERATOR_OPTIONS}
                  onChange={(value) => dispatch({ type: "UPDATE_DRAFT_CONDITION", id: rule.id, patch: { operator: value } })}
                />
              </div>
              <input
                value={rule.condition.value}
                placeholder={placeholder}
                onChange={(e) => dispatch({ type: "UPDATE_DRAFT_CONDITION", id: rule.id, patch: { value: e.target.value } })}
                className="h-10 min-w-0 flex-1 rounded-sm border border-border-interactive bg-white px-3 font-nunito ss02 text-[16px] tracking-[-0.16px] text-ink-high placeholder:text-ink-low transition-colors duration-200 focus:border-primary-link focus:outline-none"
              />
            </div>
          )}

          {rule.category && (
            <button
              type="button"
              aria-label="Excluir regra"
              onClick={() => dispatch({ type: "REQUEST_DELETE_RULE", id: rule.id })}
              className="rounded-sm p-1.5 text-primary-link transition-colors hover:bg-primary-link/10"
            >
              <Icon name="trash" size={20} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
