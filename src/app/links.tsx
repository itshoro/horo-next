"use client";
import { ReactNode } from "react";
import { Tabs } from "./components/TabSwitcher";
import { Link } from "./components/navigation/link";

const NavLinks = ({
  links,
}: {
  links: { title: string; href: string; icon: ReactNode }[];
}) => {
  return (
    <Tabs
      tabs={links.map(({ title, href, icon }) => {
        return {
          value: title,
          children: <Link href={href} title={title} icon={icon} />,
        };
      })}
      options={{
        initial: links[0].title,
      }}
    >
      <Tabs.Menu>
        {(tab, active) => <Tabs.Trigger key={tab.name} {...tab}></Tabs.Trigger>}
      </Tabs.Menu>
      <Tabs.Highlight className="absolute rounded-md bg-gray-100 transition-all" />
    </Tabs>
  );
};

export default NavLinks;
