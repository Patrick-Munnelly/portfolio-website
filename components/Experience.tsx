import ExperienceCard from "@/components/ExperienceCard";
import SectionHeading from "@/components/SectionHeading";
import { roles } from "@/content/experience";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-gold/30">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <SectionHeading>Experience</SectionHeading>
        <div className="mt-12 space-y-16">
          {roles.map((role) => (
            <ExperienceCard key={role.id} role={role} />
          ))}
        </div>
      </div>
    </section>
  );
}
