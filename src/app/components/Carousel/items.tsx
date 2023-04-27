import type { HTMLProps, FC, ReactNode } from "react";

import style from "./items.module.css";

interface ItemsProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  hideScrollbar?: boolean;
}

const Items: FC<ItemsProps> = ({
  children,
  className,
  hideScrollbar,
  ...props
}) => {
  return (
    <div
      className={[
        "grid grid-flow-col gap-64 px-80 py-12",
        hideScrollbar && style.hideScrollbar,
        className,
      ]
        .filter((x) => x)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
};

export default Items;
export type { ItemsProps };
