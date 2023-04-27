"use client";
import { useEffect, useState } from "react";

function useLocalStorage(key: string, initialValue: string) {
  const [storedValue, setStoredValue] = useState<string>(initialValue);

  useEffect(() => {
    setStoredValue(localStorage.getItem(key) ?? initialValue);
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, storedValue ?? initialValue);
  }, [key, storedValue]);

  function persistValue(
    value: string | ((state: string | null | undefined) => string)
  ) {
    value = typeof value === "function" ? value(storedValue) : value;
    setStoredValue(value);
  }

  return [storedValue, persistValue] as const;
}

export { useLocalStorage };
