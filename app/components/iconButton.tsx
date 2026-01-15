type IconButtonProps = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

export default function IconButton({ icon, label, href }: IconButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        flex h-9 w-9 items-center justify-center
        rounded-xl
        border border-zinc-700
        text-zinc-300
        transition hover:bg-zinc-800
      "
    >
      {icon}
    </a>
  );
}
