import Image from "next/image";

const imageSources = [
    "/project-1.webp",
    "/project-2.webp",
    "/project-3.png",
    "/project-4.png"
];

export default function ProjectsList() {
    return (
        <ul className={`
            mt-8
            grid
            gap-4
            w-fit
            sm:grid-cols-[repeat(2,300px)]
            sm:grid-rows-[repeat(2,300px)]
            [&_li_button]:relative
            [&_li_button]:h-full
            [&_li_img]:object-cover
        `}>
            {imageSources.map((src, index) => (
                <li key={index}>
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
                        <Image
                            src={src}
                            alt="Project Image"
                            width={1024}
                            height={1024}
                            priority
                            onLoad={() => console.log(index + 1)}
                            placeholder="empty"
                        />
                    </button>
                </li>
            ))}
        </ul>
    );
}