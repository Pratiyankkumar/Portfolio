import type React from "react";
import Link from "next/link";
import { GitPullRequest, GitMerge } from "lucide-react";

interface PullRequestProps {
  text: string;
  url: string;
  state: "open" | "merged";
}

export const PullRequest: React.FC<PullRequestProps> = ({
  text,
  url,
  state,
}) => {
  const isOpen = state === "open";

  return (
    <Link
      href={url}
      className={`
        flex items-center w-[80%] p-4 rounded-lg border transition-all duration-300 ease-in-out
        ${
          isOpen
            ? "border-green-200 hover:border-green-400"
            : "border-purple-200 hover:border-purple-400"
        }
        hover:shadow-md transform hover:-translate-y-1
      `}
    >
      <div className={`mr-4 ${isOpen ? "text-green-600" : "text-purple-600"}`}>
        {isOpen ? <GitPullRequest size={24} /> : <GitMerge size={24} />}
      </div>
      <div className="flex-grow">
        <h3
          className={`font-semibold ${
            isOpen ? "text-green-800" : "text-purple-800"
          }`}
        >
          {text}
        </h3>
        <p
          className={`text-sm ${isOpen ? "text-green-600" : "text-purple-600"}`}
        >
          {isOpen ? "Open" : "Merged"}
        </p>
      </div>
    </Link>
  );
};

export default PullRequest;
