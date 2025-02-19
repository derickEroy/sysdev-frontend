"use client"

import PageNavigation from "../components/page-navigation";
import Collaborators from "./components/collaborators";

const title = "Collaborations";
const subTitle = "People whom I pretend to have worked with."

export default function Collaborations() {
    return (
        <div className={`
            min-h-screen
            grid
            place-content-center
            px-4
            py-4
            [680px]:px-0
        `}>
            <h1 className={`
                text-2xl
                text-center 
                font-bold
            `}>
                {title}
            </h1>
            <p className={`
                mx-auto
                text-sm
                text-center
                text-neutral-500 
            `}>
                {subTitle}
            </p>
            <Collaborators />
            <PageNavigation
                backText="Projects"
                nextText="Home"
                backHref="/projects"
                nextHref="/"
                className={`
                    mt-12
                `}
            />
        </div>
    );
}