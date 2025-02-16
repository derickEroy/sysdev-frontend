"use client"

import PageNavigation from "../components/page-navigation";
import ProjectImage from "./components/project-image";

const title = "Projects";
const subTitle = "Images are placeholders because I don't have a good project.";

export default function Projects() {
    return (
        <div className={`
            min-h-screen
            flex
            flex-col
            justify-center
            items-center
            p-4
            sm:p-0
            w-fit
            mx-auto
        `}>
            <h1 className={`
                text-2xl
                text-center 
                font-bold
            `}>
                {title}
            </h1>
            <p className={`
                text-sm
                text-center
                text-neutral-500 
            `}>
                {subTitle}
            </p>
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
                <li>
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
                        <ProjectImage src="/project-1.webp" />
                    </button>
                </li>
                <li>
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
                        <ProjectImage src="/project-2.webp" />
                    </button>
                </li>
                <li>
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
                        <ProjectImage src="/project-3.png" />
                    </button>
                </li>
                <li>
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
                        <ProjectImage src="/project-4.png" />
                    </button>
                </li>
            </ul>
            <PageNavigation
                className="mt-12"
                backText="About"
                nextText="Collaborations"
                backHref="/about"
                nextHref="/collaborations"
            />
        </div>
    );
}