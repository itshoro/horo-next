"use client";
import { RefObject, useEffect, useRef } from "react";
import { useTabContext } from "./Context";

interface HighlightProps {
  className?: string;
}

function evalTransform(
  ref: RefObject<HTMLDivElement>,
  targetTransform: DOMRect
) {
  if (ref.current === null) return;

  ref.current.style.width = `${targetTransform.width}px`;
  ref.current.style.height = `${targetTransform.height}px`;
  ref.current.style.left = `${targetTransform.left}px`;
  ref.current.style.top = `${targetTransform.top}px`;
}

const Highlight = <TTabId extends string>({ className }: HighlightProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { activeTabId } = useTabContext<TTabId>("Highlight");

  useEffect(() => {
    if (ref.current === null) return;

    const currentTab = document.querySelector(`[data-value="${activeTabId}"]`)!;
    if (currentTab === null) throw Error("Unknown tab target");

    evalTransform(ref, currentTab.getBoundingClientRect());
  }, [activeTabId]);

  return <div ref={ref} className={className} />;
};

export { Highlight, type HighlightProps };
