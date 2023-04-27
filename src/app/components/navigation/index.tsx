"use client";

import { ReactNode, useEffect, useReducer, createRef } from "react";
import { useWindowEvent } from "@/hooks/useWindowEvent";
import { type ReducerState, reducer } from "./Reducer";

import { NavigationContext } from "./Context";

enum MenuState {
  Open,
  Closed,
}

enum ActionType {
  OpenMenu,
  CloseMenu,
  FocusItem,
}

const Navigation = ({ children, className }: NavigationArgs) => {
  const reducerBag = useReducer(reducer, {
    menuState: MenuState.Closed,
    focusedItem: null,
    buttonRef: createRef(),
    linksRef: createRef(),
  } as ReducerState);
  const [navState, dispatch] = reducerBag;

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      if (navState.focusedItem !== null) {
        navState.linksRef.current
          ?.querySelectorAll("a")
          [navState.focusedItem]?.focus();
      }
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [navState.focusedItem, navState.linksRef]);

  useWindowEvent("resize", () => {
    if (matchMedia("(min-width: 640px)").matches) {
      dispatch({ type: ActionType.CloseMenu });
    }
  });

  useWindowEvent("keypress", (event) => {
    if (event.key === "ESC") {
      dispatch({ type: ActionType.CloseMenu });
    }
  });

  return (
    <NavigationContext.Provider
      value={{
        ...navState,
        openMenu: () => dispatch({ type: ActionType.OpenMenu }),
        closeMenu: () => dispatch({ type: ActionType.CloseMenu }),
        focusItem: (item: number) =>
          dispatch({ type: ActionType.FocusItem, item }),
      }}
    >
      <nav
        className="sticky -top-10 z-10 mx-auto select-none rounded-lg border-white/10 md:saturate-150 md:backdrop-blur"
        aria-label="Main"
      >
        <div
          className={[
            "mx-auto max-w-5xl md:flex md:items-center md:justify-between",
            className,
          ]
            .filter((x) => x)
            .join(" ")}
        >
          {children}
        </div>
      </nav>
    </NavigationContext.Provider>
  );
};

type NavigationArgs = {
  children?: ReactNode;
  links: NavLinkArgs[];
  className?: string;
  position?: "fixed" | "sticky" | "relative" | "absolute" | "static";
  routeChangeCompleteCallback?: (
    url: string,
    { shallow }: { shallow: boolean }
  ) => void;
};

type NavLinkArgs = {
  title: string;
  href: string;
};

// Navigation.Menu = Menu;
// Navigation.MenuItems = MenuItems;
// Navigation.MenuItem = MenuItem;

export { Navigation, MenuState, ActionType };
