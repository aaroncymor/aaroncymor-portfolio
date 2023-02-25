import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useCycle } from "framer-motion";
import TransitionWrapper from "../components/TransitionWrapper";

import {
  FaAws,
  FaHtml5,
  FaLinux,
  FaPhp,
  FaPython,
  FaReact,
  FaWordpress
} from "react-icons/fa";

import {
  SiCss3,
  SiDjango,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {

  const mainContainer = {
    preTransition: {
      position: "absolute",
    },
    postTransition: {
      position: "initial",
    }
  }

 const gridContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 1,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.9,
      }
    },
  };

  const gridItem = {
    hidden: { scale: 0, top: 120 },
    show: { scale: 1, top: 0, transition: { type: "spring", duration: 1.5 } }
  }

  return (
    <>
      <TransitionWrapper />
      <motion.section
        variants={mainContainer}
        initial="preTransition"
        animate="postTransition"
        className="skills bg-white dark:bg-gray-900 min-h-screen w-screen"
      >
        <motion.ul
          variants={gridContainer}
          initial="hidden"
          animate="show"
          className="skills__grid grid grid-cols-2 md:grid-cols-3 gap-10 place-items-center py-10"
        >
          <motion.li
            variants={gridItem}
            className="skills__item w-[6.25rem] h-[6.25rem] relative dark:text-white text-6xl cursor-pointer"
          >
            <FaHtml5
              className="text-red-500 dark:text-red-500 text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <p className="text-red-500 dark:text-red-500 text-xs group-hover:text-red-500 dark:group-hover:text-red-500 font-mono font-light absolute bottom-0 left-1/2 -translate-x-1/2">Html 5</p>
          </motion.li>
          <motion.li
            variants={gridItem}
            className="skills__item w-[6.25rem] h-[6.25rem] relative dark:text-white text-6xl cursor-pointer"
          >
            <SiCss3
              className="text-blue-400 dark:text-blue-400 text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <p className="text-blue-400 dark:text-blue-400 text-xs font-mono font-light absolute bottom-0 left-1/2 -translate-x-1/2">Css</p>
          </motion.li>
          <motion.li
            variants={gridItem}
            className="skills__item w-[6.25rem] h-[6.25rem] relative dark:text-white text-6xl cursor-pointer"
          >
            <SiJavascript
              className="text-yellow-300 dark:text-yellow-300 text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <p className="text-yellow-300 dark:text-yellow-300 text-xs font-mono font-light absolute bottom-0 left-1/2 -translate-x-1/2">Javascript</p>
          </motion.li>
          <motion.li
            variants={gridItem}
            className="skills__item w-[6.25rem] h-[6.25rem] relative dark:text-white text-6xl cursor-pointer"
          >
            <FaPython
              className="text-[#FFE873] dark:text-[#FFE873] text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <p className="text-[#FFE873] dark:text-[#FFE873] text-xs font-mono font-light absolute bottom-0 left-1/2 -translate-x-1/2">Python</p>
          </motion.li>
          <motion.li
            variants={gridItem}
            className="skills__item w-[6.25rem] h-[6.25rem] relative dark:text-white text-6xl cursor-pointer"
          >
            <FaPhp
              className="text-[#787CB5] dark:text-[#787CB5] text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <p className="text-[#787CB5] dark:text-[#787CB5] text-xs font-mono font-light absolute bottom-0 left-1/2 -translate-x-1/2">Php</p>
          </motion.li>
          <motion.li
            variants={gridItem}
            className="skills__item w-[6.25rem] h-[6.25rem] relative dark:text-white text-6xl cursor-pointer"
          >
            <SiDjango
              className="text-[#092E20] dark:text-[#092E20] text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <p className="text-[#092E20] dark:text-[#092E20] text-xs font-mono font-light absolute bottom-0 left-1/2 -translate-x-1/2">Django</p>
          </motion.li>
          <motion.li
            variants={gridItem}
            className="skills__item w-[6.25rem] h-[6.25rem] relative dark:text-white text-6xl cursor-pointer"
          >
            <FaWordpress
              className="text-[#00749C] dark:text-[#00749C] text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <p className="text-[#00749C] dark:text-[#00749C] text-xs font-mono font-light absolute bottom-0 left-1/2 -translate-x-1/2">Wordpress</p>
          </motion.li>
          <motion.li
            variants={gridItem}
            className="skills__item w-[6.25rem] h-[6.25rem] relative dark:text-white text-6xl cursor-pointer"
          >
            <FaReact
              className="text-[#61DBFB] dark:text-[#61DBFB] text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <p className="text-[#61DBFB] dark:text-[#61DBFB] text-xs font-mono font-light absolute bottom-0 left-1/2 -translate-x-1/2">React</p>
          </motion.li>
          <motion.li
            variants={gridItem}
            className="skills__item w-[6.25rem] h-[6.25rem] relative dark:text-white text-6xl cursor-pointer"
          >
            <SiTailwindcss
              className="text-[#07B6D5] dark:text-[#07B6D5] text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <p className="text-[#07B6D5] dark:text-[#07B6D5] text-xs font-mono font-light absolute bottom-0 left-1/2 -translate-x-1/2">Tailwind</p>
          </motion.li>
          <motion.li
            variants={gridItem}
            className="skills__item w-[6.25rem] h-[6.25rem] relative dark:text-white text-6xl cursor-pointer"
          >
            <SiMysql
              className="text-[#F29111] dark:text-[#F29111] text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <p className="text-[#F29111] dark:text-[#F29111] text-xs font-mono font-light absolute bottom-0 left-1/2 -translate-x-1/2">MySQL</p>
          </motion.li>
          <motion.li
            variants={gridItem}
            className="skills__item w-[6.25rem] h-[6.25rem] relative dark:text-white text-6xl cursor-pointer"
          >
            <SiPostgresql
              className="text-[#336791] dark:text-[#336791] text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <p className="text-[#336791] dark:text-[#336791] text-xs font-mono font-light absolute bottom-0 left-1/2 -translate-x-1/2">Postgresql</p>
          </motion.li>
          <motion.li
            variants={gridItem}
            className="skills__item w-[6.25rem] h-[6.25rem] relative dark:text-white text-6xl cursor-pointer"
          >
            <FaLinux
              className="text-[#F3CD00] dark:text-[#F3CD00] text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <p className="text-[#F3CD00] dark:text-[#F3CD00] text-xs font-mono font-light absolute bottom-0 left-1/2 -translate-x-1/2">Linux</p>
          </motion.li>
          <motion.li
            variants={gridItem}
            className="skills__item w-[6.25rem] h-[6.25rem] relative dark:text-white text-6xl cursor-pointer"
          >
            <FaAws
              className="text-[#FF9900] dark:text-[#FF9900] text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            <p className="text-[#FF9900] dark:text-[#FF9900] text-xs font-mono font-light absolute bottom-0 left-1/2 -translate-x-1/2">AWS</p>
          </motion.li>
        </motion.ul>
      </motion.section>
    </>
  );
}

export default Skills;
