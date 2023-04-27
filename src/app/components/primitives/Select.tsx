"use client";
import { ComponentPropsWithRef } from "react";

type SelectProps = ComponentPropsWithRef<"select">;

const Select = ({ className, ...props }: SelectProps) => {
  return (
    <div className="relative flex-1">
      <select
        className={[
          "w-full appearance-none rounded-lg border border-zinc-800 bg-zinc-900 p-3 pr-10 text-sm font-semibold shadow transition hover:border-zinc-700 hover:shadow-md",
          className,
        ]
          .filter((x) => x)
          .join(" ")}
        {...props}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="pointer-events-none absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Select;
