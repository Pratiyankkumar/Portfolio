import Link from "next/link";

export function Footer() {
  return (
    <div className="w-[75%] mt-16 flex flex-col mb-10">
      <div className="flex flex-row flex-wrap gap-4 items-center">
        <p className="text-gray-500 hover:text-black text-sm">
          Made with 💖 by Pratiyank
        </p>
        <p className="text-gray-500 text-sm">|</p>
        <Link
          href={
            "https://docs.google.com/document/d/1SekTYka2ZZ8yFwD1VQaOsPNonYWoQrac/edit"
          }
          target="__blank"
          className="text-gray-500 hover:text-black text-sm"
        >
          Resume
        </Link>
        <p className="text-gray-500 text-sm">|</p>
        <Link
          href={"https://github.com/Pratiyankkumar"}
          target="__blank"
          className="text-gray-500 hover:text-black text-sm"
        >
          Github
        </Link>
        <p className="text-gray-500 text-sm">|</p>
        <Link
          href={"https://x.com/pratiyank"}
          target="__blank"
          className="text-gray-500 hover:text-black text-sm"
        >
          X
        </Link>
      </div>
    </div>
  );
}
