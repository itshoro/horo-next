"use client";
import {
  type ReactNode,
  memo,
  useReducer,
  createRef,
  RefObject,
  useRef,
} from "react";
import { Context, ContextState } from "./Context";
import { type TabProps } from "./Trigger";

import { Highlight } from "./Highlight";
import { Menu } from "./Menu";
import { Trigger } from "./Trigger";
import { Content } from "./Content";
import reducer, { type TabsState } from "./reducer";

interface TabSwitcherProps<TId extends string> {
  children: ReactNode;
  tabs: TabProps<TId>[];
  options?: {
    initial?: TId;
  };
}

const Tabs = <TId extends string>({
  children,
  options,
  tabs,
}: TabSwitcherProps<TId>) => {
  const tabRefs = useRef<Record<TId, RefObject<HTMLButtonElement>>>(
    {} as Record<TId, RefObject<HTMLButtonElement>>
  );

  tabs.forEach((tab) => {
    const ref = createRef<HTMLButtonElement>();

    tabRefs.current[tab.value] = ref;
  });

  const [state, dispatch] = useReducer(reducer, {
    tabs,
    tabRefs,
    activeTabId: options?.initial ?? tabs[0].value,
  } satisfies TabsState<TId>);

  const value: ContextState<any> = {
    ...state,
    setActiveTab: (tabRef) =>
      dispatch({ type: "SET_ACTIVE_TAB", payload: { tabRef } }),
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const MemoizedHighlight = memo(Highlight);
const MemoizedTrigger = memo(Trigger);
const MemoizedMenu = memo(Menu);
const MemoizedContent = memo(Content);

Tabs.Highlight = MemoizedHighlight;
Tabs.Trigger = MemoizedTrigger;
Tabs.Menu = MemoizedMenu;
Tabs.Content = MemoizedContent;

export { Tabs };
