import { ReactNode } from "react";

interface TypographyLinkProps {
  children: ReactNode;
}

export function TypographyLink({ children }: TypographyLinkProps) {
  return (
    <a className="leading-7 text-blue-500 underline [&:not(:first-child)]:mt-6">
      {children}
    </a>
  );
}
