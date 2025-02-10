"use client";

import Image from "next/image";
import { NaturalHighlight } from "./Highlighter";
import { Button } from "../ui/button";
import Link from "next/link";

export function Intro() {
  return (
    <div
      id="about"
      className="bp1:w-[75%] w-full mt-16 flex bp1:flex-row flex-col justify-between items-center"
    >
      <div className="flex gap-4 flex-col w-[70%]">
        <p className="text-4xl font-bold">
          Hello! I&apos;m Pratiyank, a{" "}
          <NaturalHighlight>Developer</NaturalHighlight> based in India
        </p>

        <p className="bp1:w-[90%] w-full">
          I love building web applications that are{" "}
          <NaturalHighlight>efficient, scalable</NaturalHighlight>, and{"  "}
          <NaturalHighlight color="#FFEB3B">user-friendly</NaturalHighlight>.
        </p>

        <p className="bp1:w-[90%] w-full">
          I have gained experience in{" "}
          <NaturalHighlight color="#FFC107 ">
            MERN stack development
          </NaturalHighlight>{" "}
          by working on real-world projects that involve building dynamic and
          responsive web applications. I enjoy creating full-stack solutions,{" "}
          <NaturalHighlight color="#FF9800">
            optimizing performance
          </NaturalHighlight>
          , and ensuring a seamless user experience.
        </p>
        <p className="bp1:w-[90%] w-full">
          Through these experiences, I have developed strong{" "}
          <NaturalHighlight color="#B3E5FC">
            problem-solving skills
          </NaturalHighlight>{" "}
          and an ability to build full-stack applications with a focus on
          performance, security, and great user experience.
        </p>
        <p className="bp1:w-[90%] w-full">
          I also have an interest in{" "}
          <NaturalHighlight color="#FFCDD2 ">
            DSA (Data Structures & Algorithms)
          </NaturalHighlight>{" "}
          and stock trading, continuously improving my skills in these areas.
        </p>

        <p className="bp1:w-[90%] w-full">
          I&lsquo;m currently looking for opportunities to apply my knowledge
          and grow as a developer. Interested in working together? {"   "}
          <NaturalHighlight action="circle">
            <Link
              href={
                "https://mail.google.com/mail/u/0/?fs=1&to=pratiyank49@gmail.com&tf=cm"
              }
            >
              <span className="font-bold">Let&lsquo;s connect!</span>
            </Link>
          </NaturalHighlight>
        </p>

        <div className="flex gap-4 flex-row">
          <Link href={"https://github.com/Pratiyankkumar"}>
            <Button>View Github</Button>
          </Link>
          <Link href={"https://www.linkedin.com/in/pratiyank-kumar-875a38333/"}>
            <Button variant={"outline"}>View Linked In</Button>
          </Link>
        </div>
      </div>

      <div className="bp1:w-[30%] w-full bp1:mt-0 mt-6 flex flex-col justify-center items-center text-center">
        {/* Centering wrapper for image */}

        <div
          className="relative flex justify-center items-center"
          style={{ width: "350px", height: "300px" }}
        >
          <Image
            className="rounded-md shadow-md"
            src="/Levi.jpg"
            alt="levi-image"
            width={350}
            height={300}
            style={{ width: "350px", height: "300px" }} // Fixed size
          />
          {/* Fix and Sleep text stays in place */}
          <p className="absolute italic right-[76px] top-10">Fix</p>
          <p className="absolute italic left-[70px] top-20">Sleep</p>
        </div>

        {/* Caption text below the image */}
        <p className="text-gray-500 mt-3 bp1:w-[80%] w-full text-sm italic font-extralight">
          &#34;When the code breaks at 2 AM, but you know you&apos;ll fix it
          somehow.&ldquo;
        </p>
      </div>
    </div>
  );
}
