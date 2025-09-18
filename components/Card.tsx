import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white dark:bg-neutral-900">
      {children}
    </div>
  );
}
