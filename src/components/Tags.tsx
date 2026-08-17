import { Star, EyeOff, LayoutGrid } from "lucide-react";
import { Section } from "./Section";
import { Screenshot } from "./Screenshot";

const points = [
  {
    icon: Star,
    title: "Always show",
    body: "Pin a tag to the kid home as a permanent row — a personal channel for dinosaurs, or a Saturday playlist that's always there.",
    color: "text-coral",
  },
  {
    icon: EyeOff,
    title: "Show if unwatched",
    body: "The row holds only what your kid hasn't seen yet, so it empties as they work through it. Good for a stack of new episodes you'd rather they finish than re-watch.",
    color: "text-lavender",
  },
  {
    icon: LayoutGrid,
    title: "Don't promote — and reorder",
    body: "Tags you use for your own sorting stay off the home screen entirely. The rows you do promote get dragged into whatever order you want.",
    color: "text-teal",
  },
];

export function Tags() {
  return (
    <Section id="tags" className="bg-cream">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            You shape the home screen
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft md:text-xl">
            Tag videos as you approve them — one by one, a whole batch at once, or
            automatically as they import — then decide which tags become rows on your
            kid's home, whether a row shows everything or only what they haven't watched,
            and what order the rows appear in. No recommendations, no surprises — just the
            structure you chose.
          </p>
          <ul className="mt-8 space-y-6">
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.title} className="flex items-start gap-4">
                  <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white ring-1 ring-black/5">
                    <Icon className={`h-4 w-4 ${p.color}`} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-ink md:text-xl">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-base text-ink-soft md:text-lg">{p.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <Screenshot
            src="./screenshots/tags.png"
            alt="The Tags screen: nature, music, science, and for-the-kids promoted onto the kid home, with two more tags kept off it"
            width={800}
            height={508}
          />
        </div>
      </div>
    </Section>
  );
}
