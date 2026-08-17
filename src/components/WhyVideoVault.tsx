import { Section } from "./Section";
import { Screenshot } from "./Screenshot";

type Row = { label: string; ytKids: string; ytRestricted: string; vault: string };

const rows: Row[] = [
  {
    label: "Curation",
    ytKids: "Algorithmic, lightly moderated",
    ytRestricted: "None — full feed minus filtered",
    vault: "Parent picks every video",
  },
  {
    label: "Algorithm",
    ytKids: "Always on, kid-targeted",
    ytRestricted: "Always on",
    vault: "None",
  },
  {
    label: "Ads",
    ytKids: "Yes, kid-targeted",
    ytRestricted: "Yes",
    vault: "None",
  },
  {
    label: "Recommendations",
    ytKids: '"Up next" everywhere',
    ytRestricted: '"Up next" everywhere',
    vault: "None on the home — and nothing unapproved can play",
  },
  {
    label: "Data collection",
    ytKids: "Google account-tied",
    ytRestricted: "Google account-tied",
    vault: "None — local only",
  },
  {
    label: "Price",
    ytKids: "Free, ad-supported",
    ytRestricted: "Free with ads, or a Premium subscription",
    vault: "Free — optional tip jar",
  },
];

export function WhyVideoVault() {
  return (
    <Section id="why" className="bg-cream">
      <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        Why VideoVault
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft md:text-xl">
        There are good reasons to use the alternatives. Here's an honest look at the
        trade-offs.
      </p>

      {/* Desktop: a real comparison grid. */}
      <div className="mt-12 hidden overflow-hidden rounded-3xl ring-1 ring-black/5 md:block">
        <div className="grid grid-cols-4">
          <div className="bg-cream p-6 text-sm font-medium uppercase tracking-wide text-ink-soft" />
          <div className="bg-cream p-6 text-base font-semibold text-ink">YouTube Kids</div>
          <div className="bg-cream p-6 text-base font-semibold text-ink">
            YouTube + Restricted
          </div>
          <div className="bg-coral/10 p-6 text-base font-semibold text-coral-deep border-l-4 border-coral">
            VideoVault
          </div>
          {rows.map((row) => (
            <div key={row.label} className="contents">
              <div className="bg-white/40 p-6 text-sm font-medium uppercase tracking-wide text-ink-soft border-t border-ink/10">
                {row.label}
              </div>
              <div className="bg-white/40 p-6 text-base text-ink-soft border-t border-ink/10">
                {row.ytKids}
              </div>
              <div className="bg-white/40 p-6 text-base text-ink-soft border-t border-ink/10">
                {row.ytRestricted}
              </div>
              <div className="bg-coral/10 p-6 text-base font-medium text-ink border-t border-ink/10 border-l-4 border-l-coral">
                {row.vault}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: one card per row, because a collapsed grid drops the column
          labels and leaves three unattributed values in a stack. */}
      <ul className="mt-12 space-y-4 md:hidden">
        {rows.map((row) => (
          <li
            key={row.label}
            className="overflow-hidden rounded-2xl bg-white/40 ring-1 ring-black/5"
          >
            <h3 className="border-b border-ink/10 px-5 py-3 text-sm font-medium uppercase tracking-wide text-ink-soft">
              {row.label}
            </h3>
            <dl className="divide-y divide-ink/10">
              <div className="px-5 py-3">
                <dt className="text-sm font-medium text-ink">YouTube Kids</dt>
                <dd className="mt-0.5 text-base text-ink-soft">{row.ytKids}</dd>
              </div>
              <div className="px-5 py-3">
                <dt className="text-sm font-medium text-ink">YouTube + Restricted</dt>
                <dd className="mt-0.5 text-base text-ink-soft">{row.ytRestricted}</dd>
              </div>
              <div className="border-l-4 border-coral bg-coral/10 px-5 py-3">
                <dt className="text-sm font-semibold text-coral-deep">VideoVault</dt>
                <dd className="mt-0.5 text-base font-medium text-ink">{row.vault}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>

      <figure className="mt-14">
        <Screenshot
          src="./screenshots/kid-player.png"
          alt="A video playing full-width in VideoVault, with no surrounding interface"
          width={900}
          height={527}
        />
        <figcaption className="mt-4 max-w-2xl text-base text-ink-soft">
          Playback, as your kid sees it: the video, and nothing around it. Videos play
          through YouTube's own embedded player, so tapping the screen reveals Google's
          controls — but the videos it offers can't be played, because VideoVault won't
          load anything you haven't approved.
        </figcaption>
      </figure>
    </Section>
  );
}
