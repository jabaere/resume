import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Home = () => {
  interface HomeInterface {
    width: number;
  }
  const [windowSize, setWindowSize] = useState<HomeInterface>({
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);

    handleResize();
    console.log(windowSize.width);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);
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

  const ball = {
    initial: {
      x: windowSize.width > 780 ? -350 : -150,
    },
    visible: {
      x: windowSize.width > 780 ? 350 : 100,
      transition: {
        yoyo: Infinity,
        ease: "anticipate",
        duration: 2,
        type: "tween",
        stiffness: 200,
      },
    },
  };
  return (
    <motion.div
      id="home"
      variants={container}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <motion.div
        id="home_title"
        animate={{ fontSize: 50, color: "#f8e112" }}
        style={{ letterSpacing: 20, color: "white" }}
        transition={{
          delay: 1.5,
          duration: 1.5,
          ease: "easeOut",
          when: "beforeChildren",
        }}
      >
        <h1 id="home_welcome_title">Welcome</h1>
        <motion.p
          animate={{ fontSize: 30, color: "#FFD700", opacity: 0.3 }}
          transition={{ delay: 2.5, duration: 1.5, ease: "easeOut" }}
          id="home_welcome_sub_title"
        >
          here is everything about me
        </motion.p>
      </motion.div>

      <motion.div
        variants={ball}
        initial="initial"
        animate="visible"
        style={{
          backgroundColor: "#f8e112",
          width: 10,
          height: 10,
          borderRadius: 50,
        }}
      />
    </motion.div>
  );
};
