import Section from "./components/section";


export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="mx-auto w-full max-w-3xl px-6 py-32 sm:px-10">
        {/* Hero */}
        <section className="mb-32">
          <div className="flex h-64 items-center justify-center rounded-xl bg-zinc-900 dark:bg-zinc-800">
            <span className="text-lg font-medium text-white">
              HERO
            </span>
          </div>
        </section>

        {/* Main sections */}
        <div className="space-y-32">
          <Section title="ABOUT" color="bg-blue-500" />
          <Section title="PROJECTS" color="bg-emerald-500" />
          <Section title="EXPERIENCE" color="bg-purple-500" />
          <Section title="CONTACT" color="bg-rose-500" />
        </div>
      </main>
    </div>
  );
}
