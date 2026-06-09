import { createContext, useContext, useReducer, type Dispatch, type ReactNode } from "react";
import { initialState, reducer } from "./reducer";
import type { FlowAction, FlowState } from "./types";

const FlowStateContext = createContext<FlowState | null>(null);
const FlowDispatchContext = createContext<Dispatch<FlowAction> | null>(null);

export function FlowProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FlowStateContext.Provider value={state}>
      <FlowDispatchContext.Provider value={dispatch}>{children}</FlowDispatchContext.Provider>
    </FlowStateContext.Provider>
  );
}

export function useFlow(): FlowState {
  const ctx = useContext(FlowStateContext);
  if (!ctx) throw new Error("useFlow must be used within FlowProvider");
  return ctx;
}

export function useFlowDispatch(): Dispatch<FlowAction> {
  const ctx = useContext(FlowDispatchContext);
  if (!ctx) throw new Error("useFlowDispatch must be used within FlowProvider");
  return ctx;
}
