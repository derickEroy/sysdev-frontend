"use client"

import PageNavigation from "../components/page-navigation";
import ProjectsList from "./components/projects-list";

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
            <ProjectsList />
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