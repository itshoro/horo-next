import { ComponentPropsWithoutRef, ReactNode } from "react";

type LabelProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
};

const Label = ({ className, ...props }: LabelProps) => {
  return (
    <div
      className={["text-sm text-zinc-500", className]
        .filter((x) => x)
        .join(" ")}
      {...props}
    />
  );
};

export default Label;
