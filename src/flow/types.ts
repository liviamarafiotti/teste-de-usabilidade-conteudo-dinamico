export type RuleCondition = {
  operator: string;
  value: string;
};

export type Rule = {
  id: string;
  name: string;
  category: string | null;
  condition: RuleCondition;
  /** A draft rule is still being created inside the drawer (not yet persisted). */
  draft?: boolean;
};

export type SelectedElement = "botao" | "texto" | null;

export type FlowState = {
  /** Right "Conteúdo dinâmico" drawer. */
  drawerOpen: boolean;
  /** Persisted rules available in the subheader dropdown. */
  rules: Rule[];
  /** Working copy of rules while the drawer is open. */
  draftRules: Rule[];
  /** Subheader rule dropdown. */
  ruleDropdownOpen: boolean;
  /** Currently previewed rule id (null => "Conteúdo dinâmico" default label). */
  activeRuleId: string | null;
  /** Delete-confirmation modal target (rule id). */
  deleteTargetId: string | null;
  /** Toast notification. */
  toast: { title: string; description?: string } | null;
  /** Element selected in the canvas (drives the left panel). */
  selectedElement: SelectedElement;
  /** Dynamic content switch state on the selected element. */
  elementDynamicOn: boolean;
};

export type FlowAction =
  | { type: "OPEN_DRAWER" }
  | { type: "CLOSE_DRAWER" }
  | { type: "TOGGLE_RULE_DROPDOWN"; open?: boolean }
  | { type: "SET_ACTIVE_RULE"; id: string | null }
  | { type: "ADD_DRAFT_RULE" }
  | { type: "UPDATE_DRAFT_RULE"; id: string; patch: Partial<Rule> }
  | { type: "UPDATE_DRAFT_CONDITION"; id: string; patch: Partial<RuleCondition> }
  | { type: "REQUEST_DELETE_RULE"; id: string }
  | { type: "CONFIRM_DELETE_RULE" }
  | { type: "CANCEL_DELETE_RULE" }
  | { type: "SAVE_DRAWER" }
  | { type: "DISMISS_TOAST" }
  | { type: "SELECT_ELEMENT"; element: SelectedElement }
  | { type: "CLOSE_ELEMENT_PANEL" }
  | { type: "SET_ELEMENT_DYNAMIC"; on: boolean };
