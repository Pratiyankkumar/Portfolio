import { openLink } from "./openLink";
import { motion } from "framer-motion";
import { useState } from "react";

export function ProjectCard({
  children,
  projectName,
  imageURL,
  linkContainer,
  link,
}) {
  // State to track rotation values
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  // Function to handle cursor movement
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    // Calculate relative position of cursor within the card
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;

    // Map cursor position to rotation values with increased sensitivity
    const rotateY = (x - 0.5) * 30; // Increased rotation range
    const rotateX = (y - 0.5) * -30; // Increased rotation range

    setRotation({ rotateX, rotateY });
  };

  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    setRotation({ rotateX: 0, rotateY: 0 });
  };

  return (
    <>
      <motion.div
        className="flex flex-col card relative xsm:flex-row xsm:h-auto h-height1 w-width5 xsm:w-width4 xmd:w-auto items-center justify-evenly mt-10 p-8 rounded-md hover:bg-color1 cursor-pointer ease-in-out duration-300 group"
        onClick={() => openLink(link)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: rotation.rotateX,
          rotateY: rotation.rotateY,
          transformPerspective: 1000, // Add perspective to the animation
        }}
        transition={{
          type: "spring",
          stiffness: 1000, // Increased stiffness for quicker response
          damping: 10, // Reduced damping for more pronounced effect
          mass: 0.1, // Reduced mass for faster movement
        }}
        style={{
          transformStyle: "preserve-3d", // Ensure child elements maintain 3D positioning
        }}
      >
        <img
          src={imageURL}
          alt="project-image"
          className="size-36 rounded-md shadow-inherit transform-gpu" // Added transform-gpu for better performance
        />
        <div className="md:ml-6 flex flex-col md:items-start items-center transform-gpu">
          <p className="text-white font-bold text-2xl md:mt-0 mt-5">
            {projectName}
          </p>
          <div className="flex flex-row md:flex-nowrap flex-wrap md:justify-normal justify-center items-center mt-3 gap-3 w-72 md:w-80">
            {children}
          </div>
        </div>
        <img
          className="size-6 xmd:mb-0 absolute md:relative md:right-0 md:top-0 -rotate-45 right-5 top-5 mb-24 xmd:ml-60 group-hover:size-8 ease-in-out duration-300 transform-gpu"
          src="images/arrow.svg"
          alt="project-image"
        />
      </motion.div>
      {linkContainer}
    </>
  );
}
