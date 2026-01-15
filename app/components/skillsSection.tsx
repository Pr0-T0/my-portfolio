const skills = [
  { name: "Python", slug: "python" },
  { name: "JavaScript", slug: "javascript" },
  { name: "C", slug: "c" },
  { name: "Dart", slug: "dart" },

  { name: "Flutter", slug: "flutter" },
  { name: "React", slug: "react" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Electron", slug: "electron" },

  { name: "FastAPI", slug: "fastapi" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "SQLite", slug: "sqlite" },
  { name: "Linux", slug: "linux" },

];

export default function SkillsSection() {
  return (
    <section className="mb-20 space-y-6">
      <h2 className="text-lg font-semibold">Skills</h2>

      <div
        className="
          grid gap-3
          grid-cols-2
          sm:grid-rows-3 sm:grid-flow-col sm:grid-cols-none
        "
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="
              flex items-center gap-2
              rounded-lg
              border border-zinc-800
              bg-zinc-900/40
              px-3 py-2
              text-sm text-zinc-300
              transition hover:bg-zinc-900
            "
          >
            <img
              src={`https://cdn.simpleicons.org/${skill.slug}`}
              alt={skill.name}
              className="h-4 w-4 opacity-80"
            />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
