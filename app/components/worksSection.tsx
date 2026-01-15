type Project = {
  title: string;
  description: string;
  stack: string[];
  image?: string;
  repo?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "LINC : AI File Manager and Sharing system",
    description:
      "An AI-powered desktop file manager and sharing system that indexes the filesystem and enables natural-language queries for discovering, managing, and sharing files.",
    stack: ["Node.js", "Electron","React", "Sqlite", "Langraph"],
    repo: "https://github.com/Pr0-T0/AI_FILE_MANAGER",
  },
  {
    title: "Vyvidh'25 — Tech Fest Website",
    description:
      "The official website for Vyvidh, a college tech fest, handling event listings, schedules, and registrations with a clean and responsive design.",
    stack: ["Next.js"],
    image : "Projects/Vyvidh'25.png",
    live: "https://vyvidh25.vercel.app/",
  },
  {
    title: "CramX — AI Flashcard Generator",
    description:
      "A flashcard generation system that creates study-ready flashcards from PDFs using NLP models, with backend storage and retrieval support.",
    stack: ["Flutter", "HuggingFace models", "Python","Google Colab","Supabase"],
    repo: "https://github.com/Pr0-T0/CramX-FlashCardGenerator",
  },
];

export default function WorksSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-lg font-semibold">
        Projects
      </h2>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
              overflow-hidden
              rounded-2xl
              border border-zinc-800
              bg-zinc-900/40
              transition hover:bg-zinc-900
            "
          >
            {/* Optional image */}
            {project.image && (
              <div className="h-40 w-full bg-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <div className="space-y-3 p-6">
              <p className="text-base font-medium text-zinc-100">
                {project.title}
              </p>

              <p className="text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-md
                      border border-zinc-700
                      px-2 py-1
                      text-xs text-zinc-400
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(project.repo || project.live) && (
                <div className="flex gap-4 pt-3 text-sm">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-300 hover:text-zinc-100"
                    >
                      Repository →
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-300 hover:text-zinc-100"
                    >
                      Live →
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
