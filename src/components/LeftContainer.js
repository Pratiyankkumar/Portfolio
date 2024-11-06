import { authCodeSnippet, restApiSnippet } from "../App";
import { Heading } from "./Heading";
import { TechStack } from "./TechStack";
import { Projects } from "./Projects";
import { About } from "./About";
import { Contact } from "./Contact";
import { CodeHighlights } from "./CodeHighlights";

export function LeftContainer() {
  return (
    <div className="sm:w-4/5 w-full bg-dark font-sans flex flex-col items-start ml-10 sm:ml-36 md:ml-72 justify-center">
      {/* About section - add mt-10 class */}
      <div className="mt-10 about" id="about">
        <About />
      </div>

      {/* Tech Stack section - add mt-6 class */}
      <div className="mt-6 tech-stack" id="tech-stack">
        <TechStack />
      </div>

      {/* Projects section - add mt-5 class */}
      <div className="mt-5 projects" id="projects">
        <Projects />
      </div>

      {/* Code Highlights section - add mt-6 class */}
      <div className="mt-6 code-highlights" id="code-highlights">
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

      {/* Contact section - add mt-6 class */}
      <div className="mt-6 contact" id="contact">
        <Contact />
      </div>
    </div>
  );
}
