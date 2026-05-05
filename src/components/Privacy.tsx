import { Check } from "lucide-react";
import { Section } from "./Section";
import { Screenshot } from "./Screenshot";
import { PRIVACY_URL } from "../content/links";

const points = [
  "We don't have a server. Your library lives only on your iPad.",
  "We don't see what your kid watches. We can't.",
  "No accounts, no logins, no tracking.",
  "Your YouTube API key is stored in iOS Keychain. The only place it's sent is Google's API.",
];

export function Privacy() {
  return (
    <Section id="privacy">
      <div className="rounded-3xl bg-coral/10 p-8 ring-1 ring-coral/20 md:p-12">
        <div className="grid gap-10 md:grid-cols-[1fr_minmax(0,360px)] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Privacy
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-ink-soft md:text-xl">
              This is the differentiator, so we'll lead with it.
            </p>
            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-4">
                  <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-coral text-cream">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-lg text-ink md:text-xl">{p}</span>
                </li>
              ))}
            </ul>
            <a
              href={PRIVACY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 text-base font-medium text-coral hover:text-terracotta transition-colors"
            >
              Read the full privacy policy →
            </a>
          </div>
          <div>
            <Screenshot
              src="./screenshots/pin-lock.png"
              alt="Parent PIN lock screen protecting access to parent mode"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
