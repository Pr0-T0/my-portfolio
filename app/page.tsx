import AboutSection from "./components/aboutSection";
import EducationSection from "./components/educationSection";
import SkillsSection from "./components/skillsSection";
import TopSection from "./components/topSection";
import WorksSection from "./components/worksSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <main
        className="
          mx-auto w-full
          max-w-170
          px-4 py-20
          sm:px-6
        "
      >
        <TopSection />
        <AboutSection />
        <EducationSection/>
        <SkillsSection />
        <WorksSection />
      </main>
    </div>
  );
}
