import type { Role } from "@/content/experience";

export default function ExperienceCard({ role }: { role: Role }) {
  const headingId = `role-${role.id}`;
  return (
    <article aria-labelledby={headingId}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3
          id={headingId}
          className="font-display text-2xl font-bold text-forest"
        >
          {role.company}
        </h3>
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-forest">
          <time dateTime={role.startIso}>{role.startLabel}</time>
          {" – "}
          <time dateTime={role.endIso}>{role.endLabel}</time>
        </p>
      </div>
      <p className="mt-1 font-body text-lg font-semibold text-ink">
        {role.title}
      </p>
      <p className="mt-2 font-body text-base leading-relaxed text-ink/75">
        {role.context}
      </p>
      <ul className="mt-5 space-y-2.5">
        {role.bullets.map((bullet) => (
          <li
            key={bullet}
            className="relative pl-6 font-body text-base leading-relaxed text-ink before:absolute before:left-0 before:text-gold before:content-['—']"
          >
            {bullet}
          </li>
        ))}
      </ul>
      <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
        {role.tech.map((tag) => (
          <li
            key={tag}
            className="rounded-sm border border-forest/25 px-2 py-1 font-mono text-[11px] tracking-wide text-forest"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
