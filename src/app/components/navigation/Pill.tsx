"use client";
import { useEffect, useRef } from "react";
import { useNavigationContext } from "./Context";

const Pill = () => {
  const { focusedItem, linksRef } = useNavigationContext();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    debugger;

    if (focusedItem === null || ref.current === null) return;
    const targetTransform =
      linksRef.current!.children[focusedItem].getBoundingClientRect();

    ref.current!.style.width = `${targetTransform.width}px`;
    ref.current!.style.height = `${targetTransform.height}px`;
    ref.current!.style.left = `${targetTransform.left}px`;
    ref.current!.style.top = `${targetTransform.top}px`;
  }, [focusedItem, linksRef]);

  return <div ref={ref} className="absolute rounded-full bg-white" />;
};

export default Pill;
