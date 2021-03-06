import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export const Header = () => {
  const navigate = useNavigate();

  const navigationVariant = {
    hover: {
      scale: 1.3,
      originX: 0,
      color: "#f8e112",
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
    hidden: { opacity: 0, x: -1000 },
    show: {
      opacity: 1,
      x: 300,
    },
  };
  const container = {
    hidden: { opacity: 0, x: 1000 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        duration: 2,
        delayChildren: 250,
        damping: 9,
      },
    },
  };

  const routes = ["/", "cv", "about", "projects", "play"];

  return (
    <motion.div
      id="header_container"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {routes.map((a,i) => {
        return (
          <motion.a
            onClick={() => navigate(`${a}`)}
            variants={navigationVariant}
            whileHover="hover"
            key={i}
          >
            {a === "/" ? "home" : a}
          </motion.a>
        );
      })}
    </motion.div>
  );
};
