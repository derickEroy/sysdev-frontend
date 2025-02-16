import Image from "next/image";
import OutlineButton from "./outline-button";
import UnderlineLink from "./underline-link";

export default function PageNavigation({
    backText,
    nextText,
    backHref,
    nextHref,
    className
}: {
    backText?: string;
    nextText?: string;
    backHref?: string;
    nextHref?: string;
    className?: string;
}) {
    return (
        <div className={`
            ${className}
            flex
            justify-between
            items-center
            w-full
        `}>
            {backHref ? (
                <UnderlineLink 
                    href={backHref}
                    className={`flex gap-1`}
                >
                    <Image
                        src="/white-back.svg"
                        alt="White Back Icon"
                        width={256}
                        height={256}
                        className={`w-4`}
                    />
                    {backText}
                </UnderlineLink>
            ) : null}
            {nextHref ? (
                <UnderlineLink href={nextHref}>
                    <OutlineButton>
                        {nextText}
                    </OutlineButton>
                </UnderlineLink>
            ) : null}
        </div>
    );
}