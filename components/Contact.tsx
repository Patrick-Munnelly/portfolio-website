import SectionHeading from "@/components/SectionHeading";
import TrackedLink from "@/components/TrackedLink";
import { site } from "@/content/site";
import { GA_EVENTS } from "@/lib/analytics";

const linkClassName =
  "text-forest underline decoration-gold decoration-1 underline-offset-4 transition-colors duration-base hover:text-slate-lugh";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-gold/30">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <SectionHeading>Contact</SectionHeading>
        <p className="mt-8 font-body text-lg leading-relaxed text-ink">
          {site.geoStatement}
        </p>
        <ul className="mt-8 space-y-3 font-body text-lg text-ink">
          <li>
            Email —{" "}
            <TrackedLink
              href={`mailto:${site.email}`}
              event={GA_EVENTS.contactEmailClick}
              className={linkClassName}
            >
              {site.email}
            </TrackedLink>
          </li>
          <li>
            LinkedIn —{" "}
            <TrackedLink
              href={site.linkedin}
              event={GA_EVENTS.linkedinClick}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              linkedin.com/in/pmunnelly
            </TrackedLink>
          </li>
          <li>
            GitHub —{" "}
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClassName}
            >
              github.com/Patrick-Munnelly
            </a>
          </li>
        </ul>
        <p className="mt-10">
          <TrackedLink
            href={site.cvPath}
            event={GA_EVENTS.cvDownload}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-sm bg-forest px-7 py-3 font-mono text-xs uppercase tracking-[0.18em] text-cream transition-colors duration-base hover:bg-ink"
          >
            Download CV (PDF)
          </TrackedLink>
        </p>
      </div>
    </section>
  );
}
