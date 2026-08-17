import { Check } from "lucide-react";
import { Section } from "./Section";
import { Screenshot } from "./Screenshot";
import { PRIVACY_URL } from "../content/links";

const points = [
  "We don't have a server. Your library lives only on your iPhone or iPad.",
  "We don't see what your kid watches. We can't.",
  "No accounts, no logins, no analytics in the app.",
  "Your YouTube API key is stored in iOS Keychain. The only place it's sent is Google's API.",
  "Parent mode sits behind a PIN — with Face ID or Touch ID if your device has it — and re-locks itself the moment the app goes to the background.",
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
              No servers, no accounts, nothing to opt out of. Here's exactly what that
              means.
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
            <p className="mt-8 max-w-2xl text-base text-ink-soft">
              One honest footnote: this website uses basic Google Analytics so we know
              whether anyone's reading it. The app itself has no analytics of any kind.
            </p>
            <a
              href={PRIVACY_URL}
              className="mt-8 inline-flex items-center gap-2 text-base font-medium text-coral-deep hover:text-ink transition-colors"
            >
              Read the full privacy policy →
            </a>
          </div>
          <div>
            <Screenshot
              src="./screenshots/pin-lock.png"
              alt="The parent PIN keypad covering the kid home screen, with a Use Face ID button below it"
              width={760}
              height={575}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
