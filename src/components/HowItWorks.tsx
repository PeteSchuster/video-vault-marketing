import { Plus, CheckCircle2, Play, RefreshCw } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "./Section";
import { Screenshot } from "./Screenshot";

type Step = {
  icon: LucideIcon;
  title: string;
  body: string;
  bg: string;
  iconColor: string;
  shot: { src: string; alt: string; width: number; height: number };
};

const steps: Step[] = [
  {
    icon: Plus,
    title: "Add",
    body: "Paste a YouTube link, search by title, or import a whole channel or playlist in one tap. Pick default tags up front and every video from that source arrives already sorted.",
    bg: "bg-teal/15",
    iconColor: "text-teal",
    shot: {
      src: "./screenshots/sources.png",
      alt: "A playlist source in VideoVault, showing 58 videos imported and the tag applied to all of them automatically",
      width: 700,
      height: 325,
    },
  },
  {
    icon: CheckCircle2,
    title: "Approve",
    body: "Preview each video, tag it, and approve or reject — one at a time, or a whole batch at once with Select. Nothing reaches your kid until you say so.",
    bg: "bg-butter/25",
    iconColor: "text-terracotta",
    shot: {
      // TODO: swap for a Review-queue capture once the queue has pending items.
      // Needs a source with auto-approve off; see the README shot list.
      src: "./screenshots/library.png",
      alt: "The parent library, filterable by source, category, and tag, with each video showing the tags you gave it",
      width: 700,
      height: 291,
    },
  },
  {
    icon: Play,
    title: "Watch",
    body: "Your kid gets favorites, an Up Next queue, and category browsing across the videos you approved — and nothing else. No suggestions, no comments, no ads.",
    bg: "bg-sage/25",
    iconColor: "text-sage",
    shot: {
      src: "./screenshots/kid-browse.png",
      alt: "Category filters and the All Videos grid on the kid home screen",
      width: 700,
      height: 250,
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
        Three steps to set up. After that it mostly runs itself.
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
                <Screenshot
                  src={s.shot.src}
                  alt={s.shot.alt}
                  width={s.shot.width}
                  height={s.shot.height}
                />
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-8 rounded-2xl bg-white/60 p-6 ring-1 ring-black/5 md:p-8">
        <div className="flex items-start gap-4">
          <RefreshCw className="mt-1 h-6 w-6 shrink-0 text-teal" aria-hidden="true" />
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
              Then it keeps itself current
            </h3>
            <p className="mt-2 text-lg text-ink-soft">
              VideoVault checks your channels and playlists for new uploads on its own and
              drops them into Review. For a source you already trust, flip on auto-approve
              and its new uploads go straight to your kid's home — still nothing else from
              YouTube, ever. Want it to check right now? There's a Sync button for you,
              and your kid can pull to refresh.
            </p>
          </div>
        </div>
        <div className="mt-6 md:pl-10">
          <Screenshot
            src="./screenshots/trust.png"
            alt="Per-source settings: Auto-fetch new uploads and Auto-approve new videos, both switched on, above a Check for new uploads action"
            width={800}
            height={221}
          />
        </div>
      </div>
    </Section>
  );
}
