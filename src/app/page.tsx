import { Footer } from "@/components/components/Footer";
import { Header } from "@/components/components/Header";
import { Intro } from "@/components/components/Intro";
import { OpenSourceContributions } from "@/components/components/OpenSourceContributions";
import { Projects } from "@/components/components/Projects";
import { TechStack } from "@/components/components/TechStack";

export default function Home() {
  return (
    <div className="w-full  items-center justify-center flex flex-col">
      <Header />
      <Intro />
      <Projects />
      <OpenSourceContributions />
      <TechStack />
      <Footer />
    </div>
  );
}
