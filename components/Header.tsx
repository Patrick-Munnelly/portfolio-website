const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/50 bg-cream/95">
      <div className="mx-auto flex max-w-4xl items-baseline justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-wide text-forest"
        >
          <span className="sm:hidden">PM</span>
          <span className="hidden sm:inline">Patrick Munnelly</span>
        </a>
        <nav aria-label="Section links">
          <ul className="flex items-baseline gap-4 sm:gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="border-b border-transparent pb-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors duration-base hover:border-gold hover:text-forest sm:text-xs"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
