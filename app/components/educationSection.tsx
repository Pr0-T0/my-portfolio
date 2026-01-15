import TimelineItem from "./timeLineItem";

const education = [
  {
    title: "B.Tech in Computer Science and Engineering",
    subtitle: "APJ Abdul Kalam Technological University",
    period: "2023 — Present",
    description:
      "Learning core computer science concepts with a focus on backend systems, databases, and agentic approaches to AI.",
    active: true,
  },
  {
    title: "Diploma in Computer Engineering",
    subtitle: "State Board of Technical Education",
    period: "2020 — 2023",
    description:
      "Built a foundation in programming, logical thinking, and problem-solving.",
  },
];

export default function EducationSection() {
  return (
    <section className="mb-10 space-y-6">
      <h2 className="text-lg font-semibold">Education</h2>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-2 top-0 h-full w-px bg-zinc-800" />

        <div className="space-y-12 pl-8">
          {education.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              period={item.period}
              description={item.description}
              active={item.active}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
