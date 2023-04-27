import { type MutableRefObject } from "react";
import { ActionType, MenuState } from ".";

type ReducerAction =
  | { type: ActionType.OpenMenu }
  | { type: ActionType.CloseMenu }
  | { type: ActionType.FocusItem; item: number };

interface ReducerState {
  menuState: MenuState;
  focusedItem: number | null;
  buttonRef: MutableRefObject<HTMLButtonElement | null>;
  linksRef: MutableRefObject<HTMLUListElement | null>;
}

const reducer = (state: ReducerState, action: ReducerAction) => {
  switch (action.type) {
    case ActionType.OpenMenu:
      if (state.menuState === MenuState.Open) return state;

      requestAnimationFrame(() => {
        document.body.style.overflow = "hidden";
        state.linksRef.current?.querySelector("a")?.focus();
      });

      return {
        ...state,
        menuState: MenuState.Open,
        focusedItem: 0,
      };

    case ActionType.CloseMenu:
      if (state.menuState === MenuState.Closed) return state;

      requestAnimationFrame(() => {
        document.body.style.overflow = "initial";
      });

      return {
        ...state,
        menuState: MenuState.Closed,
        focusedItem: null,
      };

    case ActionType.FocusItem:
      if (state.menuState === MenuState.Closed) return state;

      return {
        ...state,
        menuState: MenuState.Open,
        focusedItem: action.item,
      };

    default:
      return state;
  }
};

export { reducer, type ReducerState, type ReducerAction };
