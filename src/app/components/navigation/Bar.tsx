"use client";
import { KeyboardEvent, ReactNode } from "react";
import { useNavigationContext } from "./Context";
import { MenuState } from ".";

type BarProps = { logo: ReactNode };

const Bar = ({ logo }: BarProps) => {
  const navState = useNavigationContext();

  const handleKeyDownButton = (event: KeyboardEvent) => {
    switch (event.key) {
      case "Escape":
        event.preventDefault();
        event.stopPropagation();
        navState.closeMenu();

        requestAnimationFrame(() => {
          navState.buttonRef.current?.focus();
        });
        break;

      case "Enter":
        // For some reason the Enter key seems to have some default behaviour.
        // I can handle it to some degree, e.g. do `console.log`, however updating state
        // doesn't work.
        event.preventDefault();
        event.stopPropagation();

        if (navState.menuState === MenuState.Open) {
          navState.closeMenu();
        } else {
          navState.openMenu();
        }
    }
  };

  return (
    <div className="flex items-center justify-between py-3">
      <div className="z-50 h-auto">{logo}</div>
      <button
        aria-label="Menu"
        ref={navState.buttonRef}
        className="group rounded p-1 transition-colors duration-150 hover:bg-zinc-800 focus:bg-zinc-800 active:bg-zinc-700 md:hidden "
        onClick={() => {
          if (navState.menuState === MenuState.Open) {
            navState.closeMenu();
          } else {
            navState.openMenu();
            navState.focusItem(0);
          }
        }}
        onKeyDown={handleKeyDownButton}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 16 24"
          stroke="currentColor"
        >
          <g strokeWidth={2}>
            <path
              d="M0 8h16"
              className={[
                "origin-center transform-gpu transition-transform duration-500",
                navState.menuState === MenuState.Open && "translate-y-[4px]",
              ]
                .filter((x) => x)
                .join(" ")}
            />
            <path
              d="M0 16h16"
              className={[
                "origin-left scale-x-50 transform-gpu transition-transform duration-500 group-hover:scale-x-100",
                navState.menuState === MenuState.Open &&
                  "translate-y-[-4px] !scale-100",
              ]
                .filter((x) => x)
                .join(" ")}
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Bar;
