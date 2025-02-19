import React from "react";
import Link from "next/link";

export default function UnderlineLink({
  children,
  href,
  className
}: {
  children: React.ReactNode;
  href: string;
  className? :string;
}) {
  return (
    <Link 
        href={href}
        className={`
            ${className}
            hover:underline
            text-sm
        `}
    >
      {children}
    </Link>
  );
}