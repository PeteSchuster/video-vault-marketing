type Props = {
  label: string;
  /** Aspect ratio width (e.g. 1320 for hero screenshot) */
  w?: number;
  /** Aspect ratio height (e.g. 2868 for hero screenshot) */
  h?: number;
  /** Tailwind color class for background, e.g. 'bg-teal'. Defaults to teal. */
  tone?: string;
  className?: string;
};

const tones = ["bg-teal", "bg-butter", "bg-lavender", "bg-sage", "bg-sky", "bg-rose"];

export function Placeholder({ label, w = 16, h = 9, tone, className = "" }: Props) {
  const bg = tone ?? tones[label.length % tones.length];
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl ${bg} ${className}`}
      style={{ aspectRatio: `${w} / ${h}` }}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
        <span className="text-ink/70 text-sm md:text-base font-medium tracking-wide uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}
