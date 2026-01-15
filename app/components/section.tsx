type SectionProps = {
  title: string;
  color: string;
};

export default function Section({ title, color }: SectionProps) {
  return (
    <section
      className={`flex h-64 items-center justify-center rounded-xl ${color}`}
    >
      <span className="text-lg font-medium text-white">
        {title}
      </span>
    </section>
  );
}
