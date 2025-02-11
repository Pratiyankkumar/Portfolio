import { NaturalHighlight } from "./Highlighter";
import ProjectCard from "./ProjectCard";

interface ProjectCardProps {
  title: string;
  description: string;
  projectLink: string;
  githubLink: string;
}

const ProjectArray: ProjectCardProps[] = [
  {
    title: "Todoify",
    description:
      "My Todoify application is a sleek and intuitive task management app designed with a focus on user experience and modern UI principles.",
    projectLink: "todo-azure-five-67.vercel.app",
    githubLink: "https://github.com/Pratiyankkumar/Todo",
  },
  {
    title: "Create Express App",
    description:
      "My Create Express App is a boilerplate for quickly setting up an Express.js backend, making backend development smoother.",
    projectLink: "npmjs.com/package/@pratiyank/create-express-app",
    githubLink: "https://github.com/Pratiyankkumar/create-express-app",
  },
  {
    title: "AI Notes",
    description:
      "My AI Notes App is a smart note-taking application that leverages AI to enhance organization, making it easier to retrieve important information.",
    projectLink: "ai-notes-gules.vercel.app",
    githubLink: "https://github.com/Pratiyankkumar/ai-notes",
  },
  {
    title: "Chat App",
    description:
      "My Chat App is a real-time messaging application built with a focus on seamless user experience, instant communication",
    projectLink: "chat-app-remastered.onrender.com",
    githubLink: "https://github.com/Pratiyankkumar/Chat-App-Remastered",
  },
];

export function Projects() {
  return (
    <div id="projects" className=" bp2:w-[75%] w-[90%] mt-16 flex flex-col">
      <p className="text-2xl font-bold">
        <NaturalHighlight color="#FFEB3B">Projects</NaturalHighlight>
      </p>
      <p className="text-sm mt-2 text-gray-500">
        Some of my side Projects, Currently Working on :
      </p>
      <div className="flex flex-row gap-x-24 gap-y-10 flex-wrap mt-10 justify-center">
        {ProjectArray.map((project, i) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            projectLink={project.projectLink}
            githubLink={project.githubLink}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
