"use client"

import Link from "next/link";
import React from "react";
import OutlineButton from "./@core/components/outline-button";

export default function Home() {
  return (
    <div className={`
      grid
      place-content-center
      min-h-screen
      px-4
      sm:px-0
    `}> 
      <header className={`
        text-xs
        text-center
      `}>
        <h1 className={`
          text-2xl
          font-bold
        `}>
          Derick Lance P. Eroy  
        </h1>
        <p className={`
          mt-1
          text-neutral-500  
        `}>
          BS-Computer Science (1-B)
        </p>
      </header>
      <ul className={`
        flex
        gap-4
        justify-center
        items-center
        mt-8
        flex-col
        xs:flex-row
        [&_li]:w-fit
      `}>
        <li>
          <Link href="/about">
            <OutlineButton>
              About
            </OutlineButton>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <OutlineButton>
              Projects
            </OutlineButton>
          </Link>
        </li>
        <li>
          <Link  href="/collaborations">
            <OutlineButton>
              Collaborations
            </OutlineButton>
          </Link>
        </li>
      </ul>
    </div>
  );
}
