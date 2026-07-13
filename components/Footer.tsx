import Logo from "./Logo";
import CTAButton from "./CTAButton";

const links = [
  { href: "#problem", label: "The Problem" },
  { href: "#solution", label: "Packages" },
  { href: "#how-it-works", label: "Process" },
  { href: "#book", label: "Book a Call" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] px-5 pb-10 pt-16 sm:px-8">
      <div
        className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-red via-gold/60 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl gap-12 text-center sm:grid-cols-3 sm:text-left">
        <div>
          <Logo className="h-7 w-auto" />
          <p className="mt-3 font-barlow text-sm font-semibold uppercase tracking-[0.25em] text-silver">
            Built for speed. Wired to convert.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-silver/80">
            Websites, ads, and follow-up systems for HVAC companies.
          </p>
        </div>

        <nav className="flex flex-col items-center gap-3 sm:items-start sm:justify-self-center">
          <span className="font-barlow text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Navigate
          </span>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-silver transition-colors duration-100 [transition-timing-function:var(--ease-snap)] hover:text-offwhite"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-4 sm:items-end">
          <CTAButton className="!px-5 !py-2.5 !text-[13px]" />
          <a
            href="mailto:hello@funnelmcqueen.com"
            className="text-sm text-silver transition-colors duration-100 [transition-timing-function:var(--ease-snap)] hover:text-gold"
          >
            hello@funnelmcqueen.com
          </a>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 sm:flex-row">
        <p className="text-xs text-silver/50">
          © {year} FunnelMcQueen. All rights reserved.
        </p>
        <span className="checkered h-3 w-16 opacity-20" aria-hidden="true" />
      </div>
    </footer>
  );
}
