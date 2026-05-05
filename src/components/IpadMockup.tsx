import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function IpadMockup({ children, className = "" }: Props) {
  return (
    <div className={`relative mx-auto w-full max-w-[440px] ${className}`}>
      <div className="relative rounded-[2rem] bg-ink p-3 shadow-2xl ring-1 ring-black/10">
        <div className="overflow-hidden rounded-[1.5rem] bg-cream">
          {children}
        </div>
      </div>
    </div>
  );
}
