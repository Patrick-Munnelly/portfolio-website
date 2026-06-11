import TrackedLink from "@/components/TrackedLink";
import { site } from "@/content/site";
import { GA_EVENTS } from "@/lib/analytics";

export default function Hero() {
  return (
    <section id="top" className="border-b border-gold/40">
      <div className="mx-auto max-w-3xl px-6 pb-20 pt-24 text-center sm:pb-24 sm:pt-32">
        <h1 className="font-display text-5xl font-bold tracking-tight text-forest sm:text-6xl">
          {site.name}
        </h1>
        <div className="mx-auto mt-8 h-px w-24 bg-gold" aria-hidden="true" />
        <div className="mx-auto mt-1.5 h-px w-12 bg-gold" aria-hidden="true" />
        <p className="mt-8 font-body text-xl leading-relaxed text-ink sm:text-2xl">
          {site.taglineParts.map((part, index) => (
            <span key={part} className="block sm:inline-block">
              {index > 0 && (
                <span
                  className="hidden h-4 w-px bg-gold align-middle sm:mx-4 sm:inline-block"
                  aria-hidden="true"
                />
              )}
              {part}
            </span>
          ))}
        </p>
        <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-forest sm:text-sm">
          {site.subline}
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#experience"
            className="rounded-sm bg-forest px-7 py-3 font-mono text-xs uppercase tracking-[0.18em] text-cream transition-colors duration-base hover:bg-ink"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-forest px-7 py-3 font-mono text-xs uppercase tracking-[0.18em] text-forest transition-colors duration-base hover:bg-forest hover:text-cream"
          >
            Get in Touch
          </a>
        </div>
        <p className="mt-9">
          <TrackedLink
            href={site.cvPath}
            event={GA_EVENTS.cvDownload}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.18em] text-forest underline decoration-gold decoration-1 underline-offset-4 transition-colors duration-base hover:text-slate-lugh"
          >
            Download CV (PDF)
          </TrackedLink>
        </p>
      </div>
    </section>
  );
}
