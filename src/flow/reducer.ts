import type { FlowAction, FlowState, Rule } from "./types";

function nowStamp(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${p(d.getDate())}-${p(d.getMonth() + 1)}-${d.getFullYear()} ${p(d.getHours())}:${p(d.getMinutes())}`;
}

let counter = 0;
function newRule(): Rule {
  counter += 1;
  return {
    id: `rule-${Date.now()}-${counter}`,
    name: `Regra ${nowStamp()}`,
    category: null,
    condition: { operator: "igual", value: "" },
    draft: true,
  };
}

export const initialState: FlowState = {
  drawerOpen: false,
  // Frame 1 starts with no custom rules: the subheader selector shows only the
  // "Criar regra" action. Rules are added as the user creates them.
  rules: [],
  draftRules: [],
  ruleDropdownOpen: false,
  activeRuleId: null,
  deleteTargetId: null,
  toast: null,
  selectedElement: null,
  elementDynamicOn: false,
};

export function reducer(state: FlowState, action: FlowAction): FlowState {
  switch (action.type) {
    case "OPEN_DRAWER":
      // Load already-saved rules into the drawer (shown collapsed) so they can
      // be reviewed/edited alongside any new rule created in this session.
      return {
        ...state,
        drawerOpen: true,
        ruleDropdownOpen: false,
        draftRules: state.rules.map((r) => ({ ...r, draft: false })),
      };
    case "CLOSE_DRAWER":
      return { ...state, drawerOpen: false, draftRules: [] };
    case "TOGGLE_RULE_DROPDOWN":
      return { ...state, ruleDropdownOpen: action.open ?? !state.ruleDropdownOpen };
    case "SET_ACTIVE_RULE":
      return { ...state, activeRuleId: action.id, ruleDropdownOpen: false };
    case "ADD_DRAFT_RULE":
      return { ...state, draftRules: [...state.draftRules, newRule()] };
    case "UPDATE_DRAFT_RULE":
      return {
        ...state,
        draftRules: state.draftRules.map((r) => (r.id === action.id ? { ...r, ...action.patch } : r)),
      };
    case "UPDATE_DRAFT_CONDITION":
      return {
        ...state,
        draftRules: state.draftRules.map((r) =>
          r.id === action.id ? { ...r, condition: { ...r.condition, ...action.patch } } : r
        ),
      };
    case "REQUEST_DELETE_RULE":
      return { ...state, deleteTargetId: action.id };
    case "CANCEL_DELETE_RULE":
      return { ...state, deleteTargetId: null };
    case "CONFIRM_DELETE_RULE":
      return {
        ...state,
        draftRules: state.draftRules.filter((r) => r.id !== state.deleteTargetId),
        deleteTargetId: null,
      };
    case "SAVE_DRAWER": {
      // draftRules already contains existing rules (loaded on open) plus any
      // newly created ones, so persist the edited list as-is.
      const persisted = state.draftRules.map((r) => ({ ...r, draft: false }));
      const newlyCreated = state.draftRules.filter((r) => r.draft);
      const lastNew = newlyCreated[newlyCreated.length - 1];
      return {
        ...state,
        rules: persisted,
        drawerOpen: false,
        draftRules: [],
        activeRuleId: lastNew ? lastNew.id : state.activeRuleId,
        toast: {
          title: "As alterações foram salvas!",
          description: "Use o conteúdo dinâmico nos componentes da Landing Page.",
        },
      };
    }
    case "DISMISS_TOAST":
      return { ...state, toast: null };
    case "SELECT_ELEMENT":
      return { ...state, selectedElement: action.element };
    case "CLOSE_ELEMENT_PANEL":
      return { ...state, selectedElement: null };
    case "SET_ELEMENT_DYNAMIC":
      return { ...state, elementDynamicOn: action.on };
    default:
      return state;
  }
}
