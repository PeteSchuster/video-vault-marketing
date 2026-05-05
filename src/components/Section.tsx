import type { ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({ id, children, className = "", containerClassName = "" }: Props) {
  return (
    <section id={id} className={`py-20 md:py-28 px-6 ${className}`}>
      <div className={`mx-auto max-w-6xl ${containerClassName}`}>{children}</div>
    </section>
  );
}
