import { ReactNode } from "react";

interface TypographyH2 {
  children: ReactNode;
  className?: string;
}

export function TypographyH2({ children, className }: TypographyH2) {
  return (
    <h2
      className={`${className} w-full scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0`}
    >
      {children}
    </h2>
  );
}
