import type { ReactNode } from "react";

export default function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-3xl font-bold text-forest sm:text-4xl">
        {children}
      </h2>
      <div className="mt-4 h-px w-16 bg-gold" aria-hidden="true" />
    </div>
  );
}
