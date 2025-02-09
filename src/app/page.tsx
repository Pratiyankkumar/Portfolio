import { Header } from "@/components/components/Header";
import { Intro } from "@/components/components/Intro";

export default function Home() {
  return (
    <div className="w-full items-center justify-center flex flex-col">
      <Header />
      <Intro />
    </div>
  );
}
