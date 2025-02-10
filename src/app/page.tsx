import { Header } from "@/components/components/Header";
import { Intro } from "@/components/components/Intro";
import { OpenSourceContributions } from "@/components/components/OpenSourceContributions";
import { Projects } from "@/components/components/Projects";

export default function Home() {
  return (
    <div className="w-full items-center justify-center flex flex-col">
      <Header />
      <Intro />
      <Projects />
      <OpenSourceContributions />
    </div>
  );
}
