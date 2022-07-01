import React from "react";
import { motion } from "framer-motion";
import { links } from "../api/data";
export const Projects = () => {
  const container = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 1.5,
        ease: "easeOut",
      },
    },
    exit: {
      y: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      listStyleType: "none",
      lineHeight: 2,
      
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0, listStyleType: "none" },
    hover: {
      scale: 1.2,
      originX: 0,
      backgroundColor: "#f8e112",
      color: "black",
      fontWeight: "bold",
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      id="projects"
      variants={container}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      {links.map((item, i) => (
        <motion.li
          custom={i}
          variants={variants}
          animate="visible"
          initial="hidden"
          whileHover="hover"
          key={i}
        >
          <a id = 'project_list_a'style={{ color: "#0f0f0f",width:'auto',textTransform:'none'}} href={item} target="_blank" rel="noreferrer">
            {item}
          </a>
        </motion.li>
      ))}
    </motion.div>
  );
};
