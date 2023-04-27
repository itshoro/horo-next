import { ComponentPropsWithoutRef, ReactNode } from "react";
import Label from "./label";
import Value from "./value";

interface CardProps extends ComponentPropsWithoutRef<"article"> {
  children: ReactNode;
}

const Card = ({ className, ...props }: CardProps) => {
  return (
    <article
      // className="rounded-lg bg-zinc-950 border border-zinc-800 border-dashed px-4 py-5"
      className={[
        "rounded-xl bg-white shadow-md transition-all dark:border dark:border-zinc-900 dark:bg-zinc-900",
        className,
      ]
        .filter((x) => x)
        .join(" ")}
      {...props}
    />
  );
};

type SpacingProps = ComponentPropsWithoutRef<"div">;

const Spacing = ({ className, ...props }: SpacingProps) => {
  return (
    <div
      className={["px-4 py-3", className].filter((x) => x).join(" ")}
      {...props}
    />
  );
};

Card.Spacing = Spacing;
Card.Label = Label;
Card.Value = Value;

export default Card;
