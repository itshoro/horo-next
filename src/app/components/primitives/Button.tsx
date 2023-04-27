import { ComponentPropsWithoutRef, forwardRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type ?? "button"}
        className="rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-sm font-semibold shadow transition hover:border-zinc-700 active:translate-y-1"
        {...props}
      ></button>
    );
  }
);

export default Button;
