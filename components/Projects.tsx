'use client'
import React from "react";
import Project from "./Project";
import Technologies from "./Technologies";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="container m-auto text-center text-[#e5e1e1e0] space-y-10">
      <div className="flex w-full justify-center">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-3xl lg:text-4xl mt-[20%] lg:mt-[10%] mb-[20px]">Projects</h3>
      </div>
      <h3 className="uppercase tracking-[20px] text-gray-500 text-sm lg:text-lg mb-32 mx-5">Click to view live application</h3>
      <h3 className="uppercase tracking-[5px] text-gray-500 text-sm mb-32 mx-5">Scroll down to see projects</h3>
      <motion.div
        initial={{
          x: -300,
          opacity: 0
        }}
        transition={{
          duration: 1.5
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        className="w-[85%] flex flex-wrap justify-center m-auto pb-10 border border-gray-500 rounded-lg hover:border-[#62f8d5]/70 space-y-4 shadow-lg shadow-[#62f8d5]/90"
      >
        <Project title={`CodingFuze`} projectLink={`https://codingfuze.fredrickrana.com/`} imageSource={`/CodingFuzeProject.png`} shadowColor={`shadow-[#62f8d5]/90`} codeSource={`https://github.com/fredrickrana/final-project`} buttonColor={`hover:bg-[#62f8d5]/20`} description={`A full stack web application for front-end developers/students who want to build,test, and showcare their projects.`} />
        <Technologies technology="React" />
        <Technologies technology="JavaScript" />
        <Technologies technology="Node" />
        <Technologies technology="Express" />
        <Technologies technology="PostgreSQL" />
        <Technologies technology="REST API" />
        <Technologies technology="Relational Database" />
        <Technologies technology="Authentication" />
      </motion.div>
      <motion.div
        initial={{
          x: 300,
          opacity: 0
        }}
        transition={{
          duration: 1.5
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        className="w-[85%] flex flex-wrap justify-center m-auto pb-10 border border-gray-500 rounded-lg hover:border-blue-500/90 space-y-4 shadow-lg shadow-blue-500/90"
      >
        <Project title={`MicMac`} projectLink={`https://fredrickrana.github.io/ajax-project/`} imageSource={`/MicMacProject.png`} shadowColor={`shadow-blue-500/90`} codeSource={`https://github.com/fredrickrana/ajax-project`} buttonColor={`hover:bg-blue-500/40`} description={`A web application for gym goers, health enthusiasts, or patients who want to track their daily food intake and view the macronutrients / micronutrients of their meals.`} />
        <Technologies technology="HTML" />
        <Technologies technology="CSS" />
        <Technologies technology="JavaScript" />
        <Technologies technology="XMLHTTPRequest" />
        <Technologies technology="DOM Manipulation" />
        <Technologies technology="3rd Party API" />
        <Technologies technology="AJAX" />
        <Technologies technology="JSON" />
      </motion.div>
      <h3 className="text-4xl font-semibold text-center">
        Other <span className="text-2xl">(Smaller)</span> Projects
      </h3>
      <div className="w-[90%] flex flex-wrap justify-center m-auto">
        <motion.div
          initial={{
            x: -100,
            opacity: 0
          }}
          transition={{
            duration: 1.5
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          className="w-[50%] justify-center space-y-3"
        >
          <div className="w-[100%] space-y-3">
            <a href="https://fredrickrana.github.io/coding-journal/" target={"_blank"}><img src="/Code.png" className="mx-auto shadow-lg shadow-[#83308e] w-[70%] rounded-md opacity-90 hover:opacity-100 cursor-pointer" /></a>
            <h1 className="text-2xl mt-4 font-bold pt-2 text-[#ccd6f6]">Code Journal</h1>
            <a href="https://github.com/fredrickrana/coding-journal" target={"_blank"} className="block"><button className="border rounded-full p-3 text-sm align-middle hover:bg-purple-900"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-[30px] inline bg-white rounded-full" />   View Code</button></a>
          </div>
          <div className="w-[100%] space-y-3">
            <p className="text-sm">A journal web application for entries.</p>
          </div>
          <div className="flex flex-wrap justify-center">
            <Technologies technology="HTML" />
            <Technologies technology="CSS" />
            <Technologies technology="JavaScript" />
            <Technologies technology="Responsive Design" />
            <Technologies technology="Local Storage" />
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: 100,
            opacity: 0
          }}
          transition={{
            duration: 1.5
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          className="w-[50%] justify-center space-y-3"
        >
          <div className="w-[100%] space-y-3">
            <a href="#home"><img src="/PortfolioProject.png" className="mx-auto shadow-lg shadow-[#ccd6f6]/60 w-[70%] rounded-md opacity-90 hover:opacity-100 cursor-pointer" /></a>
            <h1 className="text-2xl mt-4 font-bold pt-2 text-[#ccd6f6]">Portfolio</h1>
            <a href="https://github.com/fredrickrana/personal-portfolio" target={"_blank"} className="block"><button className="border rounded-full p-3 text-sm align-middle hover:bg-[#ccd6f6]/20"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-[30px] inline bg-white rounded-full" />   View Code</button></a>
          </div>
          <div className="w-[100%] space-y-3">
            <p className="text-sm">The website you are currently on.</p>
          </div>
          <div className="flex flex-wrap justify-center">
            <Technologies technology="React" />
            <Technologies technology="Next.js" />
            <Technologies technology="TypeScript" />
            <Technologies technology="Tailwind" />
            <Technologies technology="Responsive Design" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
