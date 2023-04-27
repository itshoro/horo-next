"use client";
import { createContext, useContext } from "react";
import { TabsDispatch, TabsState } from "./reducer";

type ContextState<T extends string> = (TabsState<T> & TabsDispatch<T>) | null;

const Context = createContext<ContextState<any>>(null);

function useTabContext<T extends string>(name: string) {
  const context = useContext<ContextState<T>>(Context);
  if (context === null) {
    throw new Error(`${name} has to have a TabSwitcher parent.`);
  }

  return context;
}

export { useTabContext, Context, type ContextState };
