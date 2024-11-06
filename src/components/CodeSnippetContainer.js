import { CodeSnippet } from "../App";

export function CodeSnippetContainer({ codeSnippet, name }) {
  return (
    <div className="flex flex-col items-start mt-6">
      <p className="font-bold text-white text-2xl">{name}</p>
      <CodeSnippet codeString={codeSnippet} />
    </div>
  );
}
