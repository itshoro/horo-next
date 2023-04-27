"use client";

import { useEffect, useState } from "react";
import Select from "../primitives/Select";
import { setPersistedColorScheme } from "./persistence";

const colorSchemes = ["light", "dark", "system"] as const;
type ColorScheme = (typeof colorSchemes)[number];

const ColorSchemeSelect = () => {
  const [theme, setTheme] = useState<ColorScheme>("system");
  useEffect(() => {
    const persistedTheme = localStorage.getItem("theme");
    if (colorSchemes.includes(persistedTheme)) {
      setTheme(persistedTheme);
    } else {
      localStorage.setItem("theme", "system");
    }
  }, []);

  return (
    <div className="inline-flex gap-2" style={{ flex: 1 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="my-auto h-5 w-5 text-zinc-500"
      >
        <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
      </svg>
      <Select
        className="capitalize"
        value={theme}
        onChange={(e) => {
          setTheme(e.target.value as ColorScheme);
          localStorage.setItem("theme", e.target.value);
          setPersistedColorScheme();
        }}
      >
        {colorSchemes.map((scheme) => (
          <option key={scheme} value={scheme}>
            {scheme}
          </option>
        ))}
      </Select>
    </div>
  );
};

export { ColorSchemeSelect };
