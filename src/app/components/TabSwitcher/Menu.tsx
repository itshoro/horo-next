"use client";
import { type ComponentPropsWithoutRef, type MouseEvent } from "react";
import { useTabContext } from "./Context";
import { type TriggerProps } from "./Trigger";

interface MenuProps<TId extends string>
  extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  children: (tab: TriggerProps<TId>, active: boolean) => JSX.Element;
}

const Menu = <TId extends string>({
  children: renderTab,
  ...props
}: MenuProps<TId>) => {
  const { tabs, tabRefs, activeTabId, setActiveTab } =
    useTabContext<TId>("TabMenu");

  const elements: JSX.Element[] = [];
  tabs.forEach((tab) => {
    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
      setActiveTab(tabRefs.current[tab.value]);
    };

    elements.push(
      renderTab(
        { ...tab, onClick, ref: tabRefs.current[tab.value] },
        tab.value === activeTabId
      )
    );
  });

  return (
    <div role="tablist" {...props}>
      {elements}
    </div>
  );
};

export { Menu, type MenuProps };
