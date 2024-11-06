import { Scroll } from "../App";
import { Heading } from "./Heading";

export function TechStack() {
  return (
    <div className="flex flex-col items-start mt-6">
      <Heading upperText="TECH" belowText="STACK" fontSize="text-8xl" />
      <Scroll />
    </div>
  );
}
