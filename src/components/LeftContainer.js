import { authCodeSnippet, restApiSnippet } from "../App";
import { Heading } from "./Heading";
import { TechStack } from "./TechStack";
import { Projects } from "./Projects";
import { About } from "./About";
import { Contact } from "./Contact";
import { CodeHighlights } from "./CodeHighlights";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function LeftContainer() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // controls animation duration (1000ms here)
      easing: "ease-in-out", // easing for smoothness
      once: false, // only animate once per scroll
    });
  }, []);

  return (
    <div className="sm:w-4/5 w-full bg-dark font-sans flex flex-col items-start ml-10 sm:ml-36 md:ml-72 justify-center">
      <div data-aos="fade-up" className="mt-10 about one" id="about">
        <About />
      </div>

      <div data-aos="fade-up" className="mt-6 tech-stack two" id="tech-stack">
        <TechStack />
      </div>

      <div data-aos="fade-up" className="mt-5 projects three" id="projects">
        <Projects />
      </div>

      <div
        data-aos="fade-up"
        className="mt-6 code-highlights four"
        id="code-highlights"
      >
        <CodeHighlights name="1. Auth Middleware" codeSnippet={authCodeSnippet}>
          <Heading
            upperText="CODE"
            belowText="HIGHLIGHTS"
            fontSize="text-8xl"
          />
        </CodeHighlights>
        <CodeHighlights
          name="2. REST API (User Login)"
          codeSnippet={restApiSnippet}
        />
      </div>

      <div data-aos="fade-up" className="mt-6 contact five" id="contact">
        <Contact />
      </div>
    </div>
  );
}
