import Image from "next/image";
import IconButton from "./iconButton";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function TopSection() {
  return (
    <section className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
      {/* Avatar + name */}
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 sm:h-12 sm:w-12 overflow-hidden rounded-full bg-zinc-800">
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={64}
            height={64}
          />
        </div>

        <div className="leading-tight">
          <p className="text-base font-medium">Sarathkumar K</p>
          <p className="text-sm text-zinc-400">
            Still learning, always building
          </p>
        </div>
      </div>

      {/* Actions — ONE ROW */}
      <div className="flex w-full items-center gap-2 sm:w-auto">
        <IconButton 
            label="GitHub" 
            href="https://github.com/Pr0-T0"
            icon={<Github/>}
        />
        <IconButton 
            label="Linkdin" 
            href="https://www.linkedin.com/in/sarathkumar-k557/"
            icon={<Linkedin/>}
        />
        <IconButton 
            label="Email"
            href="mailto:sarathsaidharan557@gmail.com"
            icon={<Mail/>} 
        />

        <a
            href="https://drive.google.com/file/d/1PBWwx8WqvESbOuXSJnOOJm0BpOxAMUD3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="
                flex-1 sm:flex-none
                text-center
                rounded-xl
                border border-zinc-700
                px-4 py-2 text-sm
                transition hover:bg-zinc-800
            "
            >
            Resume
        </a>

      </div>
    </section>
  );
}
