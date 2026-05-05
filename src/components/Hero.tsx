import { ArrowRight } from "lucide-react";
import { Section } from "./Section";
import { PhoneMockup } from "./PhoneMockup";
import { Placeholder } from "./Placeholder";
import { AppStoreBadge } from "./AppStoreBadge";

export function Hero() {
  return (
    <Section id="top" className="pt-32 md:pt-40">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
            YouTube your kid actually loves.
            <br />
            Without the <span className="text-coral">rabbit holes</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft md:text-xl">
            VideoVault is a parent-curated YouTube library for kids. You hand-pick the
            videos. No algorithm, no ads, no "up next" to who-knows-where. Just the
            stuff you said yes to.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <AppStoreBadge />
            <a
              href="#how"
              className="inline-flex items-center gap-2 text-base font-medium text-ink hover:text-coral transition-colors"
            >
              See how it works
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div>
          <PhoneMockup>
            <Placeholder label="Hero screenshot" w={1320} h={2868} tone="bg-coral-soft" />
          </PhoneMockup>
        </div>
      </div>
    </Section>
  );
}
