import ProjectCard from "./ProjectCard";

interface ProjectCardProps {
  title: string;
  description: string;
  projectLink: string;
  githubLink: string;
}

const ProjectArray: ProjectCardProps[] = [
  {
    title: "Frontend Forge",
    description:
      "A platform Inspired by greatfrontend where devs can come and forge there Frontend",
    projectLink: "frontend-forge-web.vercel.app",
    githubLink: "https://github.com/Frontend-Forge",
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
    title: "Assignment",
    description:
      " Converted a Figma design into a fully responsive website. Ensured pixel-perfect accuracy,Implemented animations, responsiveness, and best UI/UX practices.",
    projectLink: "assignment-six-eta.vercel.app/",
    githubLink: "https://github.com/Pratiyankkumar/assignment",
  },
];

export function Projects() {
  return (
    <div id="projects" className="w-[80%] mt-16 flex flex-col">
      <p className="text-2xl font-bold">Projects</p>
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
