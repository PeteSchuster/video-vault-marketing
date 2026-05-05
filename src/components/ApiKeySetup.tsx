import { ChevronDown, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { apiKeyFaq } from "../content/faq";
import {
  CLOUD_PROJECT_URL,
  CREDENTIALS_URL,
  YOUTUBE_API_LIBRARY_URL,
} from "../content/links";

type Step = {
  title: string;
  body: string;
  href?: string;
  hrefLabel?: string;
  tone: string;
};

const steps: Step[] = [
  {
    title: "Create a Google Cloud project",
    body: "Free, takes 30 seconds. Any Google account works — no billing setup needed for YouTube API at the free tier.",
    href: CLOUD_PROJECT_URL,
    hrefLabel: "Open project creation",
    tone: "bg-teal/15",
  },
  {
    title: "Enable the YouTube Data API v3",
    body: "This is what lets the app fetch video titles and thumbnails on your behalf.",
    href: YOUTUBE_API_LIBRARY_URL,
    hrefLabel: "Open API library page",
    tone: "bg-butter/25",
  },
  {
    title: "Create an API key",
    body: 'On the Credentials page, click "+ Create Credentials" at the top and choose "API key". Copy the generated key.',
    href: CREDENTIALS_URL,
    hrefLabel: "Open Credentials page",
    tone: "bg-lavender/20",
  },
  {
    title: "Restrict the key (recommended)",
    body: 'Edit the new key. Under "API restrictions" pick "Restrict key" and choose only "YouTube Data API v3". This caps damage if the key ever leaks.',
    href: CREDENTIALS_URL,
    hrefLabel: "Open Credentials page",
    tone: "bg-sage/25",
  },
  {
    title: "Paste it into VideoVault",
    body: 'Open Settings in the app, paste your key, hit "Test key". If it succeeds, you\'re done — start adding videos.',
    tone: "bg-coral-soft",
  },
];

export function ApiKeySetup() {
  return (
    <Section id="setup">
      <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        Set up your YouTube API key
      </h2>
      <p className="mt-4 max-w-3xl text-lg text-ink-soft md:text-xl">
        VideoVault asks you to bring your own YouTube API key. Apple requires it for
        this kind of app, and it's actually a good thing: the app stays free, your usage
        is isolated to your family, and your key never touches our servers (because we
        don't have any).
      </p>

      <ol className="mt-12 space-y-4">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className={`flex items-start gap-6 rounded-2xl ${s.tone} p-6 md:p-8 ring-1 ring-black/5`}
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-cream text-lg font-semibold">
              {i + 1}
            </div>
            <div className="min-w-0">
              <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
                {s.title}
              </h3>
              <p className="mt-2 text-lg text-ink-soft">{s.body}</p>
              {s.href && (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-base font-medium text-coral hover:text-terracotta transition-colors"
                >
                  {s.hrefLabel}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>

      <h3 className="mt-20 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
        FAQ
      </h3>
      <div className="mt-6 divide-y divide-ink/10 rounded-3xl bg-white/50 ring-1 ring-black/5">
        {apiKeyFaq.map((item) => (
          <details key={item.q} className="group p-6">
            <summary className="flex items-center justify-between gap-4 text-lg font-medium text-ink md:text-xl">
              {item.q}
              <ChevronDown
                className="h-5 w-5 shrink-0 text-ink-soft transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 text-lg text-ink-soft">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
