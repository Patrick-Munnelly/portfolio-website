import SectionHeading from "@/components/SectionHeading";
import { site } from "@/content/site";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <SectionHeading>About</SectionHeading>
        <p className="mt-8 font-body text-lg leading-relaxed text-ink sm:text-xl">
          {site.about}
        </p>
      </div>
    </section>
  );
}
