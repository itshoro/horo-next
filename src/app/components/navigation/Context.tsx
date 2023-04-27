"use client";

import { createContext, useContext } from "react";
import { ReducerState } from "./Reducer";

type ContextState =
  | (ReducerState & {
      openMenu: () => any;
      closeMenu: () => any;
      focusItem: (item: number) => any;
    })
  | null;

const NavigationContext = createContext<ContextState>(null);

function useNavigationContext() {
  const context = useContext(NavigationContext);
  if (context === null) throw new Error("NavigationContext is uninitialized.");

  return context;
}

export { useNavigationContext, NavigationContext };
