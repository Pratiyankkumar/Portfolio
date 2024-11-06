import { CodeSnippetContainer } from "./CodeSnippetContainer";

export function CodeHighlights({ codeSnippet, name, children }) {
  return (
    <div className="flex flex-col items-start">
      {children}
      <CodeSnippetContainer codeSnippet={codeSnippet} name={name} />
    </div>
  );
}
