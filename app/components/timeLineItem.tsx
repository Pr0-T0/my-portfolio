type TimelineItemProps = {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  active?: boolean;
};

export default function TimelineItem({
  title,
  subtitle,
  period,
  description,
  active = false,
}: TimelineItemProps) {
  return (
    <div className="relative">
      {/* Dot (always aligned on the line) */}
      

      <div className="space-y-1">
        <p className="font-medium text-zinc-100">{title}</p>
        <p className="text-sm text-zinc-400">{subtitle}</p>
        <p className="text-sm text-sky-400">{period}</p>

        {description && (
          <p className="text-sm leading-relaxed text-zinc-400">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
