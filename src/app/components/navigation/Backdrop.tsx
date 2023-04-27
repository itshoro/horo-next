"use client";

import { MenuState } from ".";
import { useNavigationContext } from "./Context";

const Backdrop = () => {
  const navState = useNavigationContext();

  return (
    <div
      onClick={navState.closeMenu}
      className={[
        "absolute inset-0 -z-10 h-screen w-full bg-zinc-300/40 backdrop-blur-xl transition-all dark:bg-black/70",
        navState.menuState === MenuState.Open
          ? "visible opacity-100"
          : "invisible opacity-0",
      ].join(" ")}
    />
  );
};

export default Backdrop;
