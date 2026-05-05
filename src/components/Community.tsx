import { MessageCircle } from "lucide-react";
import { Section } from "./Section";
import { DISCORD_URL } from "../content/links";

export function Community() {
  return (
    <Section id="community" className="bg-lavender-soft">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Join the parent community
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft md:text-xl">
            Talk to other parents using VideoVault. Share library exports, suggest
            features, get help with setup. Friendly, low-volume, no algorithm.
          </p>
        </div>
        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-2xl bg-lavender px-6 py-4 text-lg font-semibold text-ink shadow-md transition-transform hover:-translate-y-0.5"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Join the Discord
        </a>
      </div>
    </Section>
  );
}
