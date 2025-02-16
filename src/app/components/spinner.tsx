import Image from "next/image";

export default function Spinner() {
  return (
    <Image
        src="/black-spinner.svg"
        alt="Black Spinner Icon"
        width={16}
        height={16}
        className={`animate-spin`}
    />
  );
}
