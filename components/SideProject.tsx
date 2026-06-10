import SectionHeading from "@/components/SectionHeading";
import { sideProject } from "@/content/experience";

export default function SideProject() {
  return (
    <section id="side-project" className="scroll-mt-24 border-t border-gold/30">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <SectionHeading>Side Project</SectionHeading>
        <article aria-labelledby="side-project-heading" className="mt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3
              id="side-project-heading"
              className="font-display text-2xl font-bold text-forest"
            >
              {sideProject.name}
            </h3>
            <a
              href={sideProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-[0.15em] text-forest underline decoration-gold decoration-1 underline-offset-4 transition-colors duration-base hover:text-slate-lugh"
            >
              {sideProject.urlLabel}
            </a>
          </div>
          <p className="mt-3 font-body text-base leading-relaxed text-ink">
            {sideProject.description}
          </p>
          <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
            {sideProject.tech.map((tag) => (
              <li
                key={tag}
                className="rounded-sm border border-forest/25 px-2 py-1 font-mono text-[11px] tracking-wide text-forest"
              >
                {tag}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
