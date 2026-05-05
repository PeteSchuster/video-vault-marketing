import { Section } from "./Section";

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
    vault: "Removed",
  },
  {
    label: "Data collection",
    ytKids: "Google account-tied",
    ytRestricted: "Google account-tied",
    vault: "None — local only",
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

      <div className="mt-12 overflow-hidden rounded-3xl ring-1 ring-black/5">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="hidden bg-cream p-6 text-sm font-medium uppercase tracking-wide text-ink-soft md:block" />
          <div className="bg-cream p-6 text-base font-semibold text-ink">YouTube Kids</div>
          <div className="bg-cream p-6 text-base font-semibold text-ink">
            YouTube + Restricted
          </div>
          <div className="bg-coral/10 p-6 text-base font-semibold text-coral border-t-4 border-coral md:border-t-0 md:border-l-4">
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
              <div className="bg-coral/10 p-6 text-base font-medium text-ink border-t border-ink/10 md:border-l-4 md:border-l-coral">
                {row.vault}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
