"use client";
import { useNavigationContext } from "./Context";
import { ComponentPropsWithoutRef } from "react";
import { MenuState } from ".";

type MenuItemProps = ComponentPropsWithoutRef<"li">;

const MenuItem = ({ children, style, className }: MenuItemProps) => {
  const navState = useNavigationContext();

  return (
    <li
      style={style}
      className={[
        className,
        "w-full transform transition ease-in-out md:visible md:translate-y-0 md:opacity-100",
        navState.menuState === MenuState.Closed
          ? "invisible -translate-y-8 opacity-0"
          : "visible translate-y-0 opacity-100",
      ]
        .filter((x) => x)
        .join(" ")}
    >
      {children}
    </li>
  );
};

export default MenuItem;
