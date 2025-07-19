import { div } from "framer-motion/m";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const mode = process.env.MODE;

  if (mode === "prod") {
    return (
      <div className="w-[60%] flex flex-col items-center justify-center">
        <p className="mt-8 w-[60%] text-center">
          There is nothing to tell .oh wait, maybe there is, but I’m just too
          lazy to write it right now. Check back later, or don’t. Your call!
        </p>
      </div>
    );
  }

  return (
    <div className="w-[60%] flex flex-col items-center justify-center">
      <div>
        <h3 className="mt-6 text-4xl font-bold">
          Welcome to the Whole New World Of Mine{" "}
        </h3>

        <div className="flex flex-col items-start">
          <p className="mt-8">
            So Here i share what i think and what i love, I Love Coding , Maths
            , Physics , Anime, Hiphop, Cinema, Cricket. These are the topics
            That i can talk Entire Day and that&apos;s the reason I have made
            this page so i can talk about it. I have a twitter/X account also
            that i created to talk about all these topics but i dont post there
            much about all these topics because people will think I am just
            another shitposter. So Down here I am creating the catgories of all
            these topics so i can talk about them here and there is no text
            limit just like twitter actually fuck twitter for that. so
            let&apos;s not bore you more and here you go 👇.
          </p>

          <Link
            href={"/blogs/coding"}
            className="mt-8 hover:underline cursor-pointer "
          >
            1) How I started Coding and What inspired me to Code at 16.{" "}
            <ArrowUpRightIcon className="inline-block mb-1" size={20} />
          </Link>

          <p className="mt-3 hover:underline cursor-pointer ">
            2) Why I hated Maths Till 8th grade and than it became my favorite{" "}
            <ArrowUpRightIcon className="inline-block mb-1" size={20} />
          </p>

          <p className="mt-3 hover:underline cursor-pointer ">
            3) Physics, the subject in which i solved more than 100&apos;s of
            problems and it gave me the result{" "}
            <ArrowUpRightIcon className="inline-block mb-1" size={20} />
          </p>

          <p className="mt-3 hover:underline cursor-pointer ">
            4) My friends made me watch it and it was worth it, You know what I
            am talking about
            <ArrowUpRightIcon className="inline-block mb-1" size={20} />
          </p>

          <p className="mt-3 hover:underline cursor-pointer ">
            5) HipHop, There is no day in my life that goes without listening
            this shit!! ( Writing this while listening to hiphop )
            <ArrowUpRightIcon className="inline-block mb-1" size={20} />
          </p>

          <p className="mt-3 hover:underline cursor-pointer ">
            6) I wanted to be the Hero of the movies i watched in childhood ,
            now i want to be the Director.
            <ArrowUpRightIcon className="inline-block mb-1" size={20} />
          </p>

          <p className="mt-3 hover:underline cursor-pointer ">
            7) Starting watching it with my father in childhood to feel like i
            am interested and now we&apos;re here
            <ArrowUpRightIcon className="inline-block mb-1" size={20} />
          </p>

          <p className="mt-3 hover:underline cursor-pointer ">
            8) Just forgot to tell you that I am lowkey interested in politics
            and What&apos;s going in the country.
            <ArrowUpRightIcon className="inline-block mb-1" size={20} />
          </p>
        </div>

        <p className="mt-16">
          If you know me personally your name could be also here. Or if
          you&apos;re lazy enough to not to read this just ask me.
        </p>
      </div>
    </div>
  );
}
