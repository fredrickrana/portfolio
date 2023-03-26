'use client'
import React from "react";
import Skill from "./Skill";

export default function Skills() {
  return (
    <div className="container h-screen m-auto text-center text-[#e5e1e1]">
      <div className="flex w-full justify-center">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-3xl lg:text-4xl mt-[20%] lg:mt-[10%] mb-[50px]">Skills</h3>
      </div>
      <div className="w-[100%] flex flex-wrap justify-center">
        <div className="w-[45%] lg:w-[25%]">
          <Skill language={`React.js`} imageSource={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg`} directionLeft={true} />
        </div>
        <div className="w-[45%] lg:w-[25%]">
          <Skill language={`Next.js`} imageSource={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg`} directionLeft={true} />
        </div>
        <div className="w-[45%] lg:w-[25%]">
          <Skill language={`TypeScript`} imageSource={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg`} directionLeft={true} />
        </div>
        <div className="w-[45%] lg:w-[25%]">
          <Skill language={`JavaScript`} imageSource={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg`} directionLeft={true} />
        </div>
        <div className="w-[45%] lg:w-[25%]">
          <Skill language={`HTML`} imageSource={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg`} directionLeft={false} />
        </div>
        <div className="w-[45%] lg:w-[25%]">
          <Skill language={`CSS`} imageSource={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg`} directionLeft={false} />
        </div>
        <div className="w-[45%] lg:w-[25%]">
          <Skill language={`Bootstrap`} imageSource={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg`} directionLeft={false} />
        </div>
        <div className="w-[45%] lg:w-[25%]">
          <Skill language={`Tailwind`} imageSource={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg`} directionLeft={false} />
        </div>
        <div className="w-[45%] lg:w-[25%]">
          <Skill language={`Node.js`} imageSource={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg`} directionLeft={true} />
        </div>
        <div className="w-[45%] lg:w-[25%]">
          <Skill language={`Express.js`} imageSource={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg`} directionLeft={true} />
        </div>
        <div className="w-[45%] lg:w-[25%]">
          <Skill language={`PostgreSQL`} imageSource={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg`} directionLeft={true} />
        </div>
        <div className="w-[45%] lg:w-[25%]">
          <Skill language={`Figma`} imageSource={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg`} directionLeft={true} />
        </div>
      </div>
    </div>
  )
}
