import PageNavigation from "../components/page-navigation";

const title = "About Me";
const text = "I'm Derick Lance P. Eroy, a 19-year-old student pursuing a BS in Computer Science. I have a strong passion for coding. I am the type of programmer that is very meticulous when it comes to code cleanliness (and I think this project's code is not that clean because some repetitive code could be abstracted). I'm always eager to learn new technologies and enhance my skills in the field of programming.";

export default function About() {
  return (
    <div className={`
        grid
        place-content-center
        h-screen
        px-4
        sm:px-0
    `}>
        <h1 className={`
            text-2xl
            text-center
            font-bold
        `}>
            {title}
        </h1>
        <p className={`
            leading-7
            mt-4
            max-w-prose
            text-center
            text-neutral-500
            text-sm
        `}>
           {text}
        </p>
        <PageNavigation
            className="mt-12"
            backText="Home"
            nextText="Projects"
            backHref="/"
            nextHref="/projects"
        />
    </div>
  );
}