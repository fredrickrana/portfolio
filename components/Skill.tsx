'use client'
import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft: boolean;
  language: string;
  imageSource: string;
}

export default function Skill({ directionLeft, language, imageSource }: Props) {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -100 : 100,
        opacity: 0
      }}
      transition={{
        duration: 1
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      className="border border-gray-500 p-6 justify-center mb-5 mx-3 hover:border-[#62f8d5]/70"
    >
      <img src={imageSource} className="object-cover w-[100px] md:h-[100px] m-auto hover:scale-110"/>
      <p className="text-sm md:text-2xl font-bold text-white pt-5 hover:text-[#62f8d5]">{language}</p>
    </motion.div>
  )
}
