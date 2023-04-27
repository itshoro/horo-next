import type { ComponentPropsWithoutRef } from "react";

const Logo = (props: ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      viewBox="0 0 16 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 8C2.42373 9.21959 -1.60715 13.9794 3.35022 21.5419C4.22977 22.8837 4.53006 24.8793 4.46351 27"
        stroke="currentColor"
        strokeLinecap="square"
      />
      <path
        d="M15 15.1101C15 13.1862 13.6731 10.2355 10.6526 8.81696"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M12.5 10C12.3333 7.5 11.8 2.5 11 2.5C10.2 2.5 9.7 5.5 9.7 5.5"
        stroke="currentColor"
        strokeMiterlimit="16"
        strokeLinecap="round"
      />
      <path
        d="M11 11C10.6667 7.83333 8.6 1.4 7 1C5.5 1.5 5.66667 6.16667 5.5 9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.99999C8.87879 7.73332 8.08182 5.15999 7.5 4.99999C7.3496 4.95864 7.06061 7.06666 7 8.19999"
        stroke="currentColor"
        strokeLinecap="square"
      />
      <path
        d="M14 14C14 15.889 13.978 18.1271 13.5 19.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;
