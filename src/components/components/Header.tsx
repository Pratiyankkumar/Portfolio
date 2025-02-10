"use client";

export function Header() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-[75%] mt-2 flex justify-between items-center">
      <p className="font-bold text-lg">PRATIYANK KUMAR</p>
      <div className="flex items-center gap-6 justify-evenly">
        <p
          onClick={() => scrollToSection("about")}
          className="cursor-pointer hover:text-blue-500 hover:scale-105 transition-transform duration-200"
        >
          About
        </p>
        <p
          onClick={() => scrollToSection("projects")}
          className="cursor-pointer hover:text-blue-500 hover:scale-105 transition-transform duration-200"
        >
          Projects
        </p>
        <p
          onClick={() => scrollToSection("contributions")}
          className="cursor-pointer hover:text-blue-500 hover:scale-105 transition-transform duration-200"
        >
          Contributions
        </p>
        <p
          onClick={() => scrollToSection("tech")}
          className="cursor-pointer hover:text-blue-500 hover:scale-105 transition-transform duration-200"
        >
          Tech
        </p>
      </div>
    </div>
  );
}
