import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-gold/40">
      <div className="mx-auto flex max-w-3xl flex-wrap items-baseline justify-between gap-x-6 gap-y-2 px-6 py-10">
        <p className="font-display text-sm font-bold tracking-wide text-forest">
          {site.name} © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
