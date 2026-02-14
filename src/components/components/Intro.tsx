import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export function Intro() {
  return (
    <div id="about" className="w-[80%] mt-16 flex justify-between items-center">
      <div className="flex gap-4 flex-col w-[90%] bp2:w-[70%]">
        <p className="bp4:text-4xl text-2xl font-bold">Hello, I am Pratiyank</p>

        <p className="text-lg text-gray-600">18 year old kid</p>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">About</h2>

          <p className="bp1:w-[90%] text-gray-500 text-sm w-full mb-3">
            Self guided and studied most of the stuff from YouTube.
          </p>

          <p className="bp1:w-[90%] text-gray-500 text-sm w-full mb-3">
            I love python idk why.
          </p>

          <p className="bp1:w-[90%] text-gray-500 text-sm w-full mb-3">
            When I discovered that AI and ML are basically advanced math in
            disguise, I knew I had to dive in.
          </p>

          <p className="bp1:w-[90%] text-gray-500 text-sm w-full">
            Also, HipHop runs through my veins.
          </p>
        </div>

        <div className="flex gap-4 flex-row mt-6">
          <Link href={"https://github.com/Pratiyankkumar"}>
            <Button>View Github</Button>
          </Link>
          <Link href={"https://www.linkedin.com/in/pratiyank/"}>
            <Button variant={"outline"}>View LinkedIn</Button>
          </Link>
        </div>
      </div>

      <div className="bp1:w-[30%] w-full -mt-44 flex flex-col justify-center items-center text-center">
        <div
          className="relative sm:flex hidden justify-center items-center"
          style={{ width: "120px", height: "120px" }}
        >
          <Image
            className="rounded-full shadow-md"
            src="/pratiyank.jpg"
            alt="pratiyank-image"
            width={120}
            height={120}
            style={{ width: "120px", height: "120px" }}
          />
        </div>
      </div>
    </div>
  );
}
