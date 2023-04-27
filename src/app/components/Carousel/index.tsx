"use client";
import {
  FC,
  HTMLAttributes,
  MouseEvent,
  ReactNode,
  UIEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import style from "./index.module.css";
import { debounce } from "@/lib/debounce";

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  hideScrollbar?: boolean;
}

const Carousel: FC<CarouselProps> = ({
  children,
  className,
  hideScrollbar,
  ...props
}) => {
  const [previousDisabled, setPreviousDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  const carouselRef = useRef<HTMLDivElement>(null);
  const previousRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const assertButtonsState = (
    container: HTMLElement,
    targetPosition: number
  ) => {
    const hitStart = targetPosition === 0;
    const hitEnd = targetPosition + window.innerWidth >= container.scrollWidth;

    setPreviousDisabled(hitStart);
    setNextDisabled(hitEnd);
  };

  useLayoutEffect(() => {
    if (carouselRef.current) assertButtonsState(carouselRef.current, 0);
  }, [carouselRef.current]);

  const scroll = (left: number, e: MouseEvent) => {
    if (
      carouselRef.current === null ||
      previousRef.current === null ||
      nextRef.current === null
    )
      return;

    const carousel = carouselRef.current;

    let targetPosition = Math.min(
      Math.max(carousel.scrollLeft + left, 0),
      Math.max(carousel.scrollWidth - left, 0)
    );

    carousel.scroll({ left: targetPosition, behavior: "smooth" });
    assertButtonsState(carouselRef.current!, targetPosition);
  };

  const handleNext = (e: MouseEvent) => scroll(window.innerWidth, e);
  const handlePrevious = (e: MouseEvent) => scroll(-window.innerWidth, e);

  const debouncedAssertButtonChange = debounce((e: UIEvent<HTMLDivElement>) => {
    assertButtonsState(
      e.target as HTMLElement,
      (e.target as HTMLElement).scrollLeft
    );
  }, 100);

  return (
    <div className="relative">
      <button
        type="button"
        ref={previousRef}
        onClick={handlePrevious}
        className="absolute top-1/2 z-50 h-12 w-12 -translate-y-1/2 rounded-full bg-white font-medium text-black disabled:hidden"
        disabled={previousDisabled}
      >
        <span className="grid place-items-center">&larr;</span>
      </button>
      <div
        ref={carouselRef}
        className={[
          "grid auto-cols-max grid-flow-col overflow-x-auto",
          hideScrollbar && style.hideScrollbar,
          className,
        ]
          .filter((x) => x)
          .join(" ")}
        onScroll={(e) => debouncedAssertButtonChange(e)}
        {...props}
      >
        {children}
      </div>
      <button
        type="button"
        ref={nextRef}
        onClick={handleNext}
        className="absolute right-0 top-1/2 z-50 h-12 w-12 -translate-y-1/2 rounded-full bg-white font-medium text-black disabled:hidden"
        disabled={nextDisabled}
      >
        <span className="grid place-items-center">&rarr;</span>
      </button>
    </div>
  );
};

export default Carousel;
