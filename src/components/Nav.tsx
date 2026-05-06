import { useEffect, useState } from "react";
import { APP_STORE_URL } from "../content/links";

const links = [
  { href: "#how", label: "How" },
  { href: "#why", label: "Why" },
  { href: "#tags", label: "Tags" },
  { href: "#setup", label: "Setup" },
  { href: "#privacy", label: "Privacy" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "bg-cream/90 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <img src="./favicon.svg" alt="" aria-hidden="true" className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-tight text-ink">VideoVault</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base text-ink-soft hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream hover:bg-coral transition-colors"
          >
            Get the app
          </a>
        </div>
      </div>
    </nav>
  );
}
