import type { FC } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  projectLink: string;
  githubLink: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  projectLink,
  githubLink,
}) => {
  return (
    <Card className="w-full max-w-[420px] overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      {/* Window Header */}
      <div className="p-3 flex items-center justify-between border-b">
        <div className="flex items-center flex-1">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <p className="text-xs text-gray-500 ml-4 flex-1 text-center">
            {projectLink}
          </p>
        </div>
        <ArrowRight className="w-4 h-4 text-gray-400 ml-4" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-3xl font-bold">
          <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
            {title}
          </span>
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        <Link
          href={`https://${projectLink}`}
          className="inline-block text-sm font-medium hover:underline"
          target="_blank"
        >
          Live Link
        </Link>
        <Link
          href={githubLink}
          className="inline-block text-sm font-medium hover:underline ml-5"
          target="_blank"
        >
          Github Link
        </Link>
      </div>
    </Card>
  );
};

export default ProjectCard;
