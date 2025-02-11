/* eslint-disable @next/next/no-img-element */
"use client";

import { NaturalHighlight } from "./Highlighter";
import { PullRequest } from "./PullRequests";

interface PullRequestProps {
  text: string;
  url: string;
  state: "open" | "merged";
}

const contibutonsArray: PullRequestProps[] = [
  {
    text: "Fixed View Components Route in docs",
    url: "https://github.com/taqui-786/mixcnui/pull/5",
    state: "merged",
  },
  {
    text: "Fix padding issue of Calendar card (Issue #24)",
    url: "https://github.com/arihantcodes/spectrum-ui/pull/33",
    state: "merged",
  },
  {
    text: "Added a new Skeleton Component",
    url: "https://github.com/arihantcodes/spectrum-ui/pull/35",
    state: "merged",
  },
  {
    text: "Added dark mode",
    url: "https://github.com/taqui-786/mixcnui/pull/6",
    state: "merged",
  },
  {
    text: "Refactored/codebase By defining different classes for different operations and much more",
    url: "https://github.com/deepseek-ai/DeepSeek-V3/pull/444",
    state: "open",
  },
  {
    text: "Fix React prop spreading warnings in CodeEditor component ",
    url: "https://github.com/better-auth/better-auth/pull/1321",
    state: "open",
  },
];

export function OpenSourceContributions() {
  return (
    <div
      id="contributions"
      className=" bp2:w-[75%] w-[90%] mt-16 flex flex-col"
    >
      <p className="text-2xl font-bold">
        <NaturalHighlight color="#FFC107 ">
          Open Source Contributions
        </NaturalHighlight>
      </p>
      <p className="text-sm mt-2 text-gray-500">
        Here’s my contribution history on GitHub, showcasing my consistency and
        passion for coding! :
      </p>

      <div className="flex flex-col mt-8 justify-center gap-y-6 w-full items-center">
        {contibutonsArray.map((contri, i) => (
          <PullRequest
            text={contri.text}
            url={contri.url}
            state={contri.state}
            key={i}
          />
        ))}
      </div>

      <div className=" bp3:flex hidden flex-col mt-8 justify-center gap-y-6 w-full items-center">
        <img
          src="https://ghchart.rshah.org/Pratiyankkumar"
          alt="GitHub Contributions Chart"
          className="w-[80%]"
        />
      </div>
    </div>
  );
}
