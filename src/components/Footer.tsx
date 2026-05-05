import {
  APP_STORE_URL,
  DISCORD_URL,
  GITHUB_URL,
  PRIVACY_URL,
  YOUTUBE_TOS_URL,
} from "../content/links";

const links = [
  { href: APP_STORE_URL, label: "App Store" },
  { href: GITHUB_URL, label: "GitHub" },
  { href: DISCORD_URL, label: "Discord" },
  { href: PRIVACY_URL, label: "Privacy" },
  { href: YOUTUBE_TOS_URL, label: "YouTube ToS" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-ink-soft">© 2026 Pete Schuster</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft hover:text-coral transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-6 max-w-6xl text-xs text-ink-soft/80">
        VideoVault is not affiliated with YouTube or Google.
      </p>
    </footer>
  );
}
