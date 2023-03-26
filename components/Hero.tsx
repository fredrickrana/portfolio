'use client'
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";

export default function Hero() {
  const love = '<I-Love-';
  const [text] = useTypewriter({
    words: [
      "Coffee/>",
      "ToCreate/>",
      "ToCode/>"
    ],
    loop: 1,
    delaySpeed: 1000
  });
  const [occupations] = useTypewriter({
    words: [
      " problem solver",
      " creator",
      " lifelong learner"
    ],
    loop: Infinity,
    delaySpeed: 1500,
    deleteSpeed: 100
  })
  return (
    <div className="container h-screen flex w-full justify-center m-auto">
      <BackgroundCircles />
      <div className="mt-[12%] text-center w-2/4">
        <motion.h3
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 3
          }}
          className="text-center text-base md:text-lg pt-8 md:text-left font-mono tracking-[.05em] text-[#62f8d5]"
        >
          Hi, my name is
        </motion.h3>
        <motion.h1
          initial={{
            opacity: 0,
            x: -500
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 2.5
          }}
          className="text-4xl lg:text-5xl font-semibold pt-4 text-center md:text-left text-[#ccd6f6] drop-shadow-xl font-sfmono tracking-[.10em]"
        >
          Fredrick Rana.
        </motion.h1>
        <motion.h1
          initial={{
            opacity: 0,
            x: +500
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 2.5
          }}
          className="text-2xl md:text-4x; lg:text-5xl font-semibold pt-6 text-center md:text-left text-[#8892B0]"
        >
          I am a <span className="links lg:text-5xl drop-shadow-xl font-sfmono text-[#63f8d5] tracking-[.03em]">Software Developer.</span>
        </motion.h1>
        <motion.h1
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 3
          }}
          className="text-sm md:text-base font-semibold pt-8 text-center md:text-left text-[#8892B0]"
        >
          Other occupations include...<span className="lg:text-md drop-shadow-xl font-sfmono text-[#63f8d5]">{occupations}<Cursor cursorColor="#62f8d5" /></span>
        </motion.h1>
      </div>
    </div>
  );
}
