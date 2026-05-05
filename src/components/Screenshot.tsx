type Props = {
  src: string;
  alt: string;
  className?: string;
};

export function Screenshot({ src, alt, className = "" }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`w-full h-auto rounded-xl ring-1 ring-black/10 shadow-md ${className}`}
    />
  );
}
