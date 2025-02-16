"use client"

import PageNavigation from "../components/page-navigation";
import ProjectButton from "./components/project-button";

const title = "Projects";
const subTitle = "Images are placeholders because I have a habit of deleting when I don't like them.";

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
                    <ProjectButton src="/project-1.webp" />
                </li>
                <li>
                    <ProjectButton src="/project-2.webp" />
                </li>
                <li>
                    <ProjectButton src="/project-3.webp" />
                </li>
                <li>
                    <ProjectButton src="/project-4.webp" />
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