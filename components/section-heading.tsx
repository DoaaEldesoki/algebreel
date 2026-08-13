export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-[2px] w-8 bg-brass" />
        <span className="text-xs font-bold tracking-wide text-brass">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl font-extrabold text-walnut sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-walnut/70">
          {description}
        </p>
      )}
    </div>
  );
}
