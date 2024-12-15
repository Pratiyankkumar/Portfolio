import { Heading } from "./Heading";
import TechImages from "./TechImages";
import { motion } from "framer-motion";

export function About() {
  // Animation variants for floating effect
  const floatingAnimation = {
    y: [-4, 4], // 8px total movement range
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  };

  // Hover animation configuration
  const hoverAnimation = {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  };

  const AnimatedTechImage = ({ styles, url }) => (
    <motion.div
      animate={floatingAnimation}
      whileHover={hoverAnimation}
      className={styles}
    >
      <TechImages styles="w-full h-full" url={url} />
    </motion.div>
  );

  return (
    <div className="md:mt-40 mt-10 flex  flex-col items-start">
      <div className="md:flex hidden">
        <AnimatedTechImage
          styles="fixed size-14 -left-20 top-20 rounded-md"
          url="https://www.svgrepo.com/show/303206/javascript-logo.svg"
        />
        <AnimatedTechImage
          styles="fixed size-14 -right-12 top-2 rounded-md"
          url="https://www.svgrepo.com/show/349540/typescript.svg"
        />
        <AnimatedTechImage
          styles="fixed size-14 -left-28 bottom-0 rounded-md"
          url="https://code.visualstudio.com/assets/images/code-stable.png"
        />
        <AnimatedTechImage
          styles="fixed size-14 -right-16 -bottom-12 rounded-md"
          url="https://www.svgrepo.com/show/452092/react.svg"
        />
      </div>

      <Heading upperText="MERN" belowText="DEVELOPER" fontSize="text-9xl" />
      <p className="text-color2 md:w-width1 w-auto md:mr-0 mr-2 text-xl mt-3">
        Hi! I'm Pratiyank, a MERN stack developer with a knack for building
        dynamic and interactive web applications. I enjoy transforming ideas
        into functional, engaging projects and am always eager to take on new
        challenges!
      </p>
    </div>
  );
}
