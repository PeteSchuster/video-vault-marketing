import { Star, EyeOff, LayoutGrid } from "lucide-react";
import { Section } from "./Section";
import { Screenshot } from "./Screenshot";

const points = [
  {
    icon: Star,
    title: "Promote a tag",
    body: "Pin a tag to the kid home as its own row — like a personal channel for dinosaurs, or a Saturday playlist.",
    color: "text-coral",
  },
  {
    icon: EyeOff,
    title: "Hide a tag",
    body: "Some videos belong in the library but not front and center. Hidden tags still let videos play, they just don't surface a row on the home screen.",
    color: "text-lavender",
  },
  {
    icon: LayoutGrid,
    title: "Reorder rows",
    body: "Drag the rows into the order you want. The kid home reflects your taste, not an algorithm's guess.",
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
            Tag videos as you approve them, then decide which tags become rows on
            your kid's home, which stay hidden, and what order they appear in. No
            recommendations, no surprises — just the structure you chose.
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
            alt="Tags screen with promoted, featured, and hidden tag groups"
          />
        </div>
      </div>
    </Section>
  );
}
