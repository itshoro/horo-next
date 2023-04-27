import { ComponentPropsWithoutRef, ReactNode } from "react";

type ValueProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
};

const Value = ({ className, ...props }: ValueProps) => {
  return (
    <div
      className={["text-base font-medium", className]
        .filter((x) => x)
        .join(" ")}
      {...props}
    />
  );
};

export default Value;
