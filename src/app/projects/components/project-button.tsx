import ProjectImage from "./project-image";

export default function ProjectButton({ src }: { src: string }) {
  return (
    <button
        className={`
            border
            border-[1px]
            border-neutral-800
            rounded
            w-full
            hover:scale-[102%]
            transition
            duration-250
        `}
    >
        <ProjectImage src={src} />
    </button>
  );
}
