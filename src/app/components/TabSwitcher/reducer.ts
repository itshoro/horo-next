import { type MutableRefObject, type RefObject } from "react";
import { type TabProps } from "./Trigger";

type TabsState<T extends string> = {
  tabs: TabProps<T>[];
  tabRefs: MutableRefObject<Record<T, RefObject<HTMLButtonElement>>>;
  activeTabId: T;
};

type TabsDispatch<T extends string> = {
  setActiveTab: (tabRef: RefObject<HTMLButtonElement>) => void;
};

type Action<TId extends string> = {
  type: "SET_ACTIVE_TAB";
  payload: { tabRef: RefObject<HTMLButtonElement> };
};

function reducer<TId extends string>(
  state: TabsState<TId>,
  action: Action<TId>
) {
  switch (action.type) {
    case "SET_ACTIVE_TAB":
      return {
        ...state,
        activeTabId: action.payload.tabRef.current!.getAttribute(
          "data-value"
        ) as TId,
      } satisfies TabsState<TId>;

    default:
      throw new Error();
  }
}

export default reducer;
export { type Action, type TabsState, type TabsDispatch };
