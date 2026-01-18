'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import AboutSection from "./components/aboutSection";
import EducationSection from "./components/educationSection";
import SkillsSection from "./components/skillsSection";
import TopSection from "./components/topSection";
import WorksSection from "./components/worksSection";

export default function Home() {
  const [showTop, setShowTop] = useState(false);
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    const topTimer = setTimeout(() => {
      setShowTop(true);
    }, 400); // delay before TopSection

    const restTimer = setTimeout(() => {
      setShowRest(true);
    }, 1000); // delay before rest (after TopSection)

    return () => {
      clearTimeout(topTimer);
      clearTimeout(restTimer);
    };
  }, []);

  return (
    <>
      {/* FIXED BACKGROUND */}
      <div
        style={{
          backgroundImage: "url('/bg.png')",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100svh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          filter: "brightness(1.9) contrast(1.05)",
          zIndex: -1,
        }}
      />

      {/* CONTENT */}
      <div className="min-h-screen bg-black/80 text-zinc-100">
        <main className="mx-auto w-full max-w-170 px-4 py-20 sm:px-6">

          {/* TOP SECTION (delayed) */}
          {showTop && (
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              <TopSection />
            </motion.div>
          )}

          {/* REST SECTIONS (follow up) */}
          {showRest && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <AboutSection />
              <EducationSection />
              <SkillsSection />
              <WorksSection />
            </motion.div>
          )}

        </main>
      </div>
    </>
  );
}
