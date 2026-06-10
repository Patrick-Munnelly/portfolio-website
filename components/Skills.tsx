import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/content/experience";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-gold/30">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <SectionHeading>Skills</SectionHeading>
        <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.name}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-forest">
                {group.name}
              </h3>
              <div className="mt-2 h-px w-8 bg-gold/70" aria-hidden="true" />
              <ul className="mt-3 space-y-1.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="font-body text-base text-ink">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
