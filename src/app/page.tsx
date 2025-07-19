import { Experience } from "@/components/components/experience";
import { Footer } from "@/components/components/Footer";
import { Header } from "@/components/components/Header";
import { Intro } from "@/components/components/Intro";
import { OpenSourceContributions } from "@/components/components/OpenSourceContributions";
import { Projects } from "@/components/components/Projects";
import { TechStack } from "@/components/components/TechStack";

export default function Home() {
  return (
    <div className="bp2:w-[85%] w-[90%] border-x border-dashed border-gray-300  items-center justify-center flex flex-col">
      <Header />
      <div className="border-b w-[100%] border-dashed border-gray-300 mt-3"></div>
      <Intro />
      <div className="border-b w-[100%] border-dashed border-gray-300 mt-6"></div>
      <Projects />
      <div className="border-b w-[100%] border-dashed border-gray-300 mt-6"></div>
      <Experience />
      <div className="border-b w-[100%] border-dashed border-gray-300 mt-6"></div>
      <OpenSourceContributions />
      <div className="border-b w-[100%] border-dashed border-gray-300 mt-6"></div>
      <TechStack />
      <div className="border-b w-[100%] border-dashed border-gray-300 mt-6"></div>
      <Footer />
      <div className="border-b w-[100%] border-dashed border-gray-300 mt-6"></div>
    </div>
  );
}
