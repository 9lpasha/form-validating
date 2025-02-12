import { ReactNode } from "react";

export const DefaultLink = ({ children }: { children: ReactNode }) => (
  <a
    href="https://ya.ru"
    className="text-secondary text-[13px] underline decoration-green-400 decoration-1 underline-offset-2 w-fit"
    target="_blank"
  >
    {children}
  </a>
);
