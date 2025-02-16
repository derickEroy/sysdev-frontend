import Image from "next/image";
import { useState } from "react";

export default function ProjectImage({ src }: { src: string }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            { isLoading ? (
                <p className={`
                    text-sm
                    text-neutral-500
                `}>Loading...</p>
            ) : null }
            <Image
                src={src}
                alt="Project Image"
                width={1024}
                height={1024}
                priority
                onLoad={() => setIsLoading(false)}
                className={`${isLoading ? "hidden" : "auto"}`}
            />
        </>
    )
}