/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProjectProps {
  name: string;
  url: string;
  repo: string; // GitHub repo in format "owner/repo"
  stars?: number;
  logo?: string;
}

const projects: ProjectProps[] = [
  {
    name: "OpenCut",
    url: "https://github.com/OpenCut-app/OpenCut/pulls?q=author%3APratiyankkumar+is%3Amerged+",
    repo: "OpenCut-app/OpenCut",
    logo: "/opencut.jpg",
  },
  {
    name: "Better Auth",
    url: "https://github.com/better-auth/better-auth/pulls?q=author%3APratiyankkumar+is%3Amerged+",
    repo: "better-auth/better-auth",
    logo: "https://avatars.githubusercontent.com/u/163827765?s=200&v=4",
  },
  {
    name: "Supermemory",
    url: "https://github.com/supermemoryai/supermemory/pulls?q=author%3APratiyankkumar+is%3Amerged+",
    repo: "supermemoryai/supermemory",
    logo: "https://avatars.githubusercontent.com/u/171979587?s=200&v=4",
  },
  {
    name: "Zero",
    url: "https://github.com/Mail-0/Zero/pulls?q=author%3APratiyankkumar+is%3Amerged+",
    repo: "Mail-0/Zero",
    logo: "https://avatars.githubusercontent.com/u/198371852?s=200&v=4",
  },
];

function formatStars(stars?: number): string {
  if (!stars) return "";
  return stars >= 1000 ? `${(stars / 1000).toFixed(1)}k` : stars.toString();
}

export function OpenSourceContributions() {
  const [projectsWithStars, setProjectsWithStars] =
    useState<ProjectProps[]>(projects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const updatedProjects = await Promise.all(
          projects.map(async (project) => {
            try {
              const response = await fetch(
                `https://api.github.com/repos/${project.repo}`
              );
              if (response.ok) {
                const data = await response.json();
                return { ...project, stars: data.stargazers_count };
              }
              return project;
            } catch (error) {
              console.error(
                `Failed to fetch stars for ${project.repo}:`,
                error
              );
              return project;
            }
          })
        );
        setProjectsWithStars(updatedProjects);
      } catch (error) {
        console.error("Failed to fetch repository data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStars();
  }, []);
  return (
    <div id="contributions" className="w-[80%] mt-16 flex flex-col">
      <p className="text-2xl font-bold">Open Source Contributions</p>
      <p className="text-sm mt-2 text-gray-500">
        Not to brag, but here are some open source projects lucky enough to have
        my contributions 🥱.
      </p>

      <TooltipProvider delayDuration={100}>
        <div className="border border-dashed border-gray-300 rounded-xl p-6 mt-8 w-full">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {projectsWithStars.map((project, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-center relative ${
                  i !== projectsWithStars.length - 1
                    ? "border-r border-gray-300 pr-4"
                    : "pr-4"
                }`}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="group flex flex-col items-center">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center transition-all duration-300 ease-out group-hover:-translate-y-2"
                      >
                        {project.logo ? (
                          <img
                            src={project.logo}
                            alt={`${project.name} logo`}
                            className="w-16 h-16 rounded-lg object-cover transition-all duration-300 ease-out group-hover:shadow-lg"
                          />
                        ) : (
                          <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-500 border border-gray-200 transition-all duration-300 ease-out group-hover:shadow-lg">
                            +
                          </div>
                        )}
                        <span className="mt-2 text-sm font-medium text-center">
                          {project.name}
                        </span>
                      </a>
                    </div>
                  </TooltipTrigger>
                  {project.stars !== undefined && (
                    <TooltipContent side="top" align="center">
                      <p>
                        ⭐ {loading ? "..." : formatStars(project.stars)} stars
                      </p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </TooltipProvider>
    </div>
  );
}
