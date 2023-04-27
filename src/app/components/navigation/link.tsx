"use client";

import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { useNavigationContext } from "./Context";

type LinkProps = {
  title: string;
  icon: ReactNode;
} & NextLinkProps;

const Link = ({ href, title, icon }: LinkProps) => {
  const pathname = usePathname();
  const context = useNavigationContext();

  const isCurrentPage = pathname === href;

  return (
    <NextLink
      className={[
        "block rounded-lg p-3 text-sm font-semibold transition-colors ease-out dark:border",
        isCurrentPage
          ? "bg-zinc-300 text-zinc-800 transition dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700"
          : // ? "text-foxfire-100 bg-foxfire-200/10"
            "border-transparent text-zinc-600 hover:text-zinc-800 dark:text-zinc-500 dark:hover:border-zinc-700 dark:hover:text-zinc-300",
        // "block border-l-2 text-lg",
        // pathname === href
        //   ? "border-foxfire-200 bg-gradient-to-r from-foxfire-200/5 to-foxfire-200/0 to-20% text-foxfire-50"
        //   : "border-transparent",
        // "group block overflow-hidden rounded-xl border-y border-transparent font-medium transition-colors",
        // pathname === href
        // ? "border-b-zinc-950/50 border-t-zinc-700 bg-zinc-900 shadow-lg"
        // : "hover:border-zinc-700 hover:bg-zinc-800/50 hover:shadow",
        // "block border-l-2 pl-3 font-medium transition-colors ease-out hover:text-white",
        // pathname === href ? "text-white" : "border-transparent text-zinc-500",
        // "inline-block w-full rounded-md px-3 py-2 font-medium transition-colors ease-out hover:bg-zinc-800",
        // pathname === href ? "bg-zinc-800 text-zinc-200" : "text-zinc-500 ",
      ].join(" ")}
      href={href}
      onClick={(e) => {
        context.closeMenu();
      }}
    >
      <div
        className={[
          "flex items-center gap-2",
          // "flex items-center px-4 py-2 from-zinc-800 font-medium",
          // pathname === href
          //   ? "bg-gradient-radial-at-t"
          //   : "group-hover:bg-gradient-radial-at-t",
        ].join(" ")}
      >
        <span
          aria-hidden={true}
          className={isCurrentPage ? undefined : "text-zinc-600"}
        >
          {icon}
        </span>
        {isCurrentPage && <span className="sr-only">Current Page: </span>}
        <span>{title}</span>
      </div>
    </NextLink>
  );
};

export { Link, type LinkProps };
