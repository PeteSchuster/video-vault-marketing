import { ArrowRight } from "lucide-react";
import { Section } from "./Section";
import { IpadMockup } from "./IpadMockup";
import { Screenshot } from "./Screenshot";
import { AppStoreBadge } from "./AppStoreBadge";

export function Hero() {
  return (
    <Section id="top" className="pt-32 md:pt-40">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
            YouTube your kid actually loves.
            <br />
            Without the <span className="text-coral-deep">rabbit holes</span>.
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
              className="inline-flex items-center gap-2 text-base font-medium text-ink hover:text-coral-deep transition-colors"
            >
              See how it works
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-6 max-w-xl text-base text-ink-soft">
            iPhone and iPad. Free — no subscription, no ads, and an optional tip if you
            end up loving it.{" "}
            <span className="text-ink">
              You can try it with the built-in sample videos before setting up an API key.
            </span>
          </p>
        </div>
        <div>
          <IpadMockup>
            <Screenshot
              src="./screenshots/kid-home.png"
              alt="The VideoVault kid home, with parent-made rows for Nature, Music, and Science — no recommendations anywhere"
              width={900}
              height={694}
              priority
              className="rounded-none ring-0 shadow-none"
            />
          </IpadMockup>
        </div>
      </div>
    </Section>
  );
}
