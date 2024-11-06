import { Heading } from "./Heading";

export function About() {
  return (
    <div className="mt-10 flex flex-col items-start">
      <Heading upperText="MERN" belowText="DEVELOPER" fontSize="text-9xl" />
      <p className="text-color2 md:w-width1 w-width5 text-xl mt-3">
        Hi! I'm Pratiyank, a MERN stack developer with a knack for building
        dynamic and interactive web applications. I enjoy transforming ideas
        into functional, engaging projects and am always eager to take on new
        challenges!
      </p>
    </div>
  );
}
