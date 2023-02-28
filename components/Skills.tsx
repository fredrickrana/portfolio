'use client'
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {}

export default function Skills({ }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.5
      }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for current proficiency</h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill language={`React.js`} imageSource={`https://cdn.cdnlogo.com/logos/r/85/react.svg`} directionLeft={true}/>
        <Skill language={`Next.js`} imageSource={`https://liveblocks.io/_next/image?url=%2Ficons%2Fmarketing%2Ftechnologies%2Fnextjs.png&w=256&q=75`} directionLeft={true}/>
        <Skill language={`TypeScript`} imageSource={`https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png`} directionLeft={true}/>
        <Skill language={`JavaScript`} imageSource={`https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png`} directionLeft={true}/>
        <Skill language={`HTML`} imageSource={`https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png`} directionLeft={true}/>
        <Skill language={`CSS`} imageSource={`https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png`} directionLeft={true}/>
        <Skill language={`Bootstrap`} imageSource={`https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png`} directionLeft={true}/>
        <Skill language={`Tailwind`} imageSource={`https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png`} directionLeft={true}/>
      </div>

      <div className="grid grid-cols-4 gap-5">
        <Skill language={`React.js`} imageSource={`https://cdn.cdnlogo.com/logos/r/85/react.svg`} directionLeft={false} />
        <Skill language={`Next.js`} imageSource={`https://liveblocks.io/_next/image?url=%2Ficons%2Fmarketing%2Ftechnologies%2Fnextjs.png&w=256&q=75`} directionLeft={false} />
        <Skill language={`TypeScript`} imageSource={`https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png`} directionLeft={false} />
        <Skill language={`JavaScript`} imageSource={`https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png`} directionLeft={false} />
        <Skill language={`HTML`} imageSource={`https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png`} directionLeft={false} />
        <Skill language={`CSS`} imageSource={`https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png`} directionLeft={false} />
        <Skill language={`Bootstrap`} imageSource={`https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png`} directionLeft={false} />
        <Skill language={`Tailwind`} imageSource={`https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png`} directionLeft={false} />
      </div>
    </motion.div>
  )
}
