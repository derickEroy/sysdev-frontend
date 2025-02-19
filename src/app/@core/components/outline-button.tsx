"use client"

import { useState } from "react";
import Spinner from "./spinner";

export default function OutlineButton({ children }: { children: React.ReactNode }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      onClick={() => setIsClicked(true)}
      className={`
        text-xs
        border
        border-neutral-800
        px-4
        py-2
        rounded-full
        hover:bg-foreground
        hover:border-foreground
        hover:text-background
        transition
        duration-250
        ${isClicked ? "bg-foreground" : ""}
      `}
    >{
      isClicked ? (
        <Spinner />
      ) : children
    }</button>
  );
}