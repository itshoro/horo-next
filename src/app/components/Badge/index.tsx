import { ReactNode } from "react";

interface BadgeProps {
  icon?: ReactNode;
  label: string;
}

const Badge = ({ label, icon }: BadgeProps) => {
  return (
    <article
      // className="rounded-xl bg-zinc-950 border border-zinc-800 border-dashed p-4 text-sm"
      className="inline-flex items-center gap-3 rounded-xl bg-white p-4 shadow-md transition-all dark:border dark:border-zinc-900 dark:bg-zinc-900"
    >
      <div className="flex items-center gap-2 ">
        {icon} {label}
      </div>
    </article>
  );
};

export default Badge;
