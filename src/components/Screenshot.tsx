type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Set on the hero shot only — it's the LCP element, so it must not be lazy. */
  priority?: boolean;
  className?: string;
};

export function Screenshot({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
}: Props) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding={priority ? "sync" : "async"}
      className={`w-full h-auto rounded-xl ring-1 ring-black/10 shadow-md ${className}`}
    />
  );
}
