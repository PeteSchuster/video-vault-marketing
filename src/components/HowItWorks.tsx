import { Plus, CheckCircle2, Play } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "./Section";
import { Screenshot } from "./Screenshot";

type Step = {
  icon: LucideIcon;
  title: string;
  body: string;
  bg: string;
  iconColor: string;
  shot: { src: string; alt: string };
};

const steps: Step[] = [
  {
    icon: Plus,
    title: "Add",
    body: "Paste a YouTube link, search by title, or import a whole channel or playlist in one tap.",
    bg: "bg-teal/15",
    iconColor: "text-teal",
    shot: {
      src: "./screenshots/sources.png",
      alt: "Sources tab showing an imported Demo channel with library breakdown",
    },
  },
  {
    icon: CheckCircle2,
    title: "Approve",
    body: "Preview each video, tag it, and approve or reject. Nothing reaches your kid until you say so.",
    bg: "bg-butter/25",
    iconColor: "text-terracotta",
    shot: {
      src: "./screenshots/review.png",
      alt: "Review queue with two videos pending approve or reject",
    },
  },
  {
    icon: Play,
    title: "Watch",
    body: "Your kid sees a clean home with only what you chose. No suggestions, no comments, no ads.",
    bg: "bg-sage/25",
    iconColor: "text-sage",
    shot: {
      src: "./screenshots/kid-home.png",
      alt: "Kid Watch home with curated playlist and category browse",
    },
  },
];

export function HowItWorks() {
  return (
    <Section id="how">
      <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        How it works
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft md:text-xl">
        Three steps. Set it up once, then maintain it on your schedule.
      </p>
      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <li
              key={s.title}
              className={`relative flex flex-col rounded-3xl ${s.bg} p-8 ring-1 ring-black/5`}
            >
              <span className="absolute right-6 top-6 text-sm font-medium text-ink-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Icon className={`h-10 w-10 ${s.iconColor}`} aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-lg text-ink-soft">{s.body}</p>
              <div className="mt-6">
                <Screenshot src={s.shot.src} alt={s.shot.alt} />
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
