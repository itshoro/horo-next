"use client";
import { ComponentPropsWithoutRef, KeyboardEvent } from "react";
import { useNavigationContext } from "./Context";
import { MenuState } from ".";

type MenuProps = {} & ComponentPropsWithoutRef<"div">;

const Menu = ({ children }: MenuProps) => {
  const navState = useNavigationContext();

  return (
    <div className="relative mx-3">
      <div
        className={[
          "absolute top-4 w-full origin-top duration-200 ease-out md:relative md:top-8 md:translate-y-0 md:scale-y-100 md:opacity-100",
          navState.menuState === MenuState.Closed &&
            "-translate-y-4 scale-y-0 opacity-0",
        ]
          .filter((x) => x)
          .join(" ")}
        data-state={navState.menuState}
      >
        {children}
      </div>
    </div>
  );
};

const MenuItems = ({ children }: MenuProps) => {
  const navState = useNavigationContext();

  const handleKeyDownItems = (event: KeyboardEvent) => {
    const handleDecrement = (rollover = true) => {
      if (navState.focusedItem === null) return 0;

      let targetItem = navState.focusedItem - 1;
      if (targetItem === -1) {
        if (!rollover) {
          return null;
        }
        targetItem += navState.linksRef.current!.children.length;
      }
      return targetItem;
    };

    const handleIncrement = (rollover = true) => {
      if (navState.focusedItem === null) return 0;

      let targetItem = navState.focusedItem + 1;
      if (targetItem === navState.linksRef.current!.children.length) {
        if (!rollover) {
          return null;
        }
        targetItem -= navState.linksRef.current!.children.length;
      }

      return targetItem;
    };

    switch (event.key) {
      case "Escape":
        event.preventDefault();
        event.stopPropagation();

        navState.closeMenu();

        requestAnimationFrame(() => {
          navState.buttonRef.current?.focus();
        });

      case "ArrowUp":
      case "ArrowDown": {
        event.preventDefault();
        event.stopPropagation();

        const possibleTarget =
          event.key === "ArrowUp" ? handleDecrement() : handleIncrement();

        if (possibleTarget !== null) {
          navState.focusItem(possibleTarget);
        } else {
          navState.closeMenu();
        }

        break;
      }

      case "Tab": {
        const possibleTarget = event.shiftKey
          ? handleDecrement(false)
          : handleIncrement(false);

        if (possibleTarget !== null) {
          navState.focusItem(possibleTarget);
        } else {
          navState.closeMenu();
        }

        break;
      }
    }
  };
  return (
    <>
      <ul
        ref={navState.linksRef}
        className="m-2 mb-8 flex origin-top flex-col items-start gap-2 border-b border-zinc-800 pb-6 transition duration-100 md:m-0 md:flex-row md:border-none"
        onKeyDown={handleKeyDownItems}
      >
        {children}
      </ul>
    </>
  );
};

export { Menu, MenuItems };
