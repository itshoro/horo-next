"use client";
import {
  forwardRef,
  type ReactNode,
  type LegacyRef,
  type ComponentPropsWithRef,
} from "react";

type TabProps<TId extends string> = {
  value: TId;
  children: ReactNode;
};
type TriggerProps<TId extends string> = TabProps<TId> &
  Omit<ComponentPropsWithRef<"button">, "value">;

const Trigger = forwardRef(
  <TId extends string>(
    { value, ...props }: TriggerProps<TId>,
    ref: LegacyRef<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        role="tab"
        type="button"
        data-value={value}
        {...props}
      />
    );
  }
);

export { Trigger, type TriggerProps, type TabProps };
