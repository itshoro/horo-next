"use client";

import { type ComponentPropsWithoutRef } from "react";
import { useTabContext } from "./Context";

interface ContentProps<TTabId extends string | number>
  extends ComponentPropsWithoutRef<"div"> {
  value: TTabId;
}

const Content = <TTabId extends string | number>({
  value,
  children,
  ...props
}: ContentProps<TTabId>) => {
  const { activeTabId } = useTabContext(`Content - ${value}`);

  return (
    <div aria-activedescendant={String(activeTabId === value)} {...props}>
      {children}
    </div>
  );
};

export { Content, type ContentProps };
