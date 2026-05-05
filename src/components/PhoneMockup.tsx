import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function PhoneMockup({ children, className = "" }: Props) {
  return (
    <div className={`relative mx-auto w-full max-w-[300px] md:max-w-[340px] ${className}`}>
      <div className="relative rounded-[2.75rem] bg-ink p-3 shadow-2xl ring-1 ring-black/10">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-cream">
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
          {children}
        </div>
      </div>
    </div>
  );
}
