import { openLink } from "./openLink";

export function ProjectCard({
  children,
  projectName,
  imageURL,
  linkContainer,
  link,
}) {
  return (
    <>
      <div
        className="flex flex-col card relative md:flex-row md:h-auto h-height1 w-width5 md:w-width4 xmd:w-auto items-center justify-evenly mt-10 p-8 rounded-md hover:bg-color1 cursor-pointer ease-in-out duration-300 group"
        onClick={() => openLink(link)}
      >
        <img
          src={imageURL}
          alt="project-image"
          className="size-36 rounded-md shadow-inherit"
        />
        <div className="md:ml-6 flex flex-col md:items-start items-center">
          <p className="text-white font-bold text-2xl md:mt-0 mt-5">
            {projectName}
          </p>
          <div className="flex flex-row md:flex-nowrap flex-wrap md:justify-normal justify-center items-center mt-3 gap-3 w-72 md:w-80">
            {children}
          </div>
        </div>
        <img
          className="size-6 xmd:mb-0 absolute md:relative md:right-0 md:top-0 -rotate-45 right-5 top-5 mb-24 xmd:ml-60 group-hover:size-8 ease-in-out duration-300"
          src="images/arrow.svg"
          alt="project-image"
        />
      </div>
      {linkContainer}
    </>
  );
}
