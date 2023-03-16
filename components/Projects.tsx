'use client'
import React from "react";
// import Skill from "./Skill";
import Project from "./Project";
import Technologies from "./Technologies";
import { motion } from "framer-motion";

type Props = {}

// export default function Projects({ }: Props) {
//   const projects = [1, 2, 3, 4, 5];
//   return (
//     <div className="flex h-screen relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
//       <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

//       <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
//         {projects.map((project, i) => (
//           <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">


//             <motion.img src="https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/whatisacomputer_pc.jpg" alt="computer" className="w-89 h-60"
//               initial={{
//                 y: -300
//               }}
//               transition={{
//                 duration: 1.2
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0
//               }}
//               viewport={{
//                 once: true
//               }}
//             />

//             <div className="space-y-10 px-0 md:px-10 max-w-6xl">
//               <h4 className="text-4xl font-semibold text-center">
//                 <span className="underline decoration-[#f7ab0a]/50">Case Study {i + 1} of {projects.length}: CodingFuze</span>
//               </h4>
//             </div>
//             <p className="text-lg text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at dapibus purus. Proin quis vestibulum est. Praesent porttitor vehicula diam fermentum tincidunt. Donec laoreet sit amet augue eu fermentum. In euismod eros ac metus rhoncus, a commodo dolor vulputate. Nam porta aliquam orci, quis vehicula nibh tempus ac. Etiam ornare turpis imperdiet ante faucibus elementum. Nam vitae lectus vel lorem tincidunt dignissim quis sed est. Suspendisse pharetra tincidunt lorem non fermentum.</p>
//           </div>
//         ))}
//       </div>

//       <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[400px] -skew-y-12"></div>
//     </div>
//   )
// }

// row
// column full
// image

// row
// column full
// micmac

// row
// column full
// button

// row
// column half
// technologies
// column half
// description

export default function Projects({ }: Props) {
  const projects = [1, 2]
  return (
    <div className="container h-screen m-auto text-center text-[#e5e1e1] space-y-10">
      <div className="flex w-full justify-center">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-3xl lg:text-4xl mt-[20%] lg:mt-[10%] mb-[20px]">Projects</h3>
      </div>
      <h3 className="uppercase tracking-[20px] text-gray-500 text-sm lg:text-lg mb-32 mx-5">Click to view live application</h3>

      <div className="w-[85%] flex flex-wrap justify-center m-auto pb-10 border border-gray-500 rounded-lg hover:border-[#62f8d5]/70 space-y-4 shadow-lg shadow-[#62f8d5]/90">
        <Project title={`CodingFuze`} imageSource={`/CodingFuze.png`} shadowColor={`shadow-[#62f8d5]/90`} codeSource={`https://github.com/fredrickrana/final-project`} buttonColor={`hover:bg-[#62f8d5]/20`} description={`A full stack web application for front-end developers/students who want to build,test, and showcare their projects.`} />
        <Technologies technology="React" />
        <Technologies technology="JavaScript" />
        <Technologies technology="Node" />
        <Technologies technology="Express" />
        <Technologies technology="PostgreSQL" />
        <Technologies technology="REST API" />
        <Technologies technology="Relational Database" />
        <Technologies technology="Authentication" />
      </div>
      <div className="w-[85%] flex flex-wrap justify-center m-auto pb-10 border border-gray-500 rounded-lg hover:border-blue-500/90 space-y-4 shadow-lg shadow-blue-500/90">
        <Project title={`MicMac`} imageSource={`/MicMacHomePageScreenshot.png`} shadowColor={`shadow-blue-500/90`} codeSource={`https://github.com/fredrickrana/ajax-project`} buttonColor={`hover:bg-blue-500/40`} description={`A web application for gym goers, health enthusiasts, or patients who want to track their daily food intake and view the macronutrients / micronutrients of their meals.`} />
        <Technologies technology="HTML" />
        <Technologies technology="CSS" />
        <Technologies technology="JavaScript" />
        <Technologies technology="XMLHTTPRequest" />
        <Technologies technology="DOM Manipulation" />
        <Technologies technology="3rd Party API" />
        <Technologies technology="AJAX" />
        <Technologies technology="JSON" />
      </div>

      <h3 className="text-4xl font-semibold text-center">
        Other <span className="text-sm">(Smaller)</span> Projects
      </h3>

      <div className="flex flex-col justify-center m-auto">
        <div className="w-[50%] justify-center space-y-3">
          <div className="w-[100%] space-y-3">
            <img src="/CodeJournalScreenshot.png" className="mx-auto shadow-lg w-[50%] mt-12 rounded-md opacity-90 hover:opacity-100 cursor-pointer" />
            <h1 className="text-2xl mt-4 font-bold pt-2 text-[#ccd6f6]">Code Journal</h1>
            <a href="" target={"_blank"} className="block"><button className="border rounded-full p-3 text-sm align-middle"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-[30px] inline bg-white rounded-full" />   View Code</button></a>
          </div>
          <div className="w-[100%] space-y-3">
            <p className="text-sm">A journal web application for entries.</p>
          </div>
          <div className="flex flex-wrap justify-center">
            <Technologies technology="HTML" />
            <Technologies technology="HTML" />
            <Technologies technology="HTML" />
          </div>
        </div>



        <div className="justify-center space-y-3">
          <div className="w-[100%] space-y-3">
            <img src="/CodeJournalScreenshot.png" className="mx-auto shadow-lg w-[50%] mt-12 rounded-md opacity-90 hover:opacity-100 cursor-pointer" />
            <h1 className="text-2xl mt-4 font-bold pt-2 text-[#ccd6f6]">Code Journal</h1>
            <a href="" target={"_blank"} className="block"><button className="border rounded-full p-3 text-sm align-middle"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-[30px] inline bg-white rounded-full" />   View Code</button></a>
          </div>
        </div>
        <div className="w-[100%] space-y-3">
          <p className="text-sm">A journal web application for entries.</p>
        </div>
        <span className="technologies">HTML</span>
        <span className="technologies">HTML</span>
        <span className="technologies">HTML</span>
      </div>





        {/* <Skill language={`MicMac`} imageSource={`/MicMacHomePageScreenshot.png`} directionLeft={true} /> */}
        {/* <div className="w-[55%] lg:w-[30%]">
          <a href="https://fredrickrana.github.io/ajax-project/" target={"_blank"}>
            <img src="/MicMacHomePageScreenshot.png" alt="MicMacHomePageScreenshot" className="shadow-lg shadow-blue-500/90 scale-[1.5] mt-12 rounded-md opacity-90 hover:opacity-100 cursor-pointer"/>
          </a>

          <div className="space-y-3 pt-4">
            <h1 className="text-2xl mt-24 font-bold pt-2">MicMac</h1>
            <a href="https://github.com/fredrickrana/ajax-project" target={"_blank"} className="block"><button className="border rounded-full p-3 text-sm align-middle hover:bg-blue-500/60"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-[30px] inline bg-white rounded-full" />   View Code</button></a>

            <div className=" flex flex-wrap w-[100%] items-center mx-auto">
              <p className="text-sm w-[50%]">A solo web application for gym goers, health enthusiasts, or patients who want to track their daily food intake and view the macronutrients / micronutrients of their meals.</p>
              <div className="inline-block w-[50%]">
                <span className="technologies">HTML</span>
                <span className="technologies">CSS</span>
                <span className="technologies">JavaScript</span>
                <span className="technologies">XMLHTTPRequest</span>
                <span className="technologies">DOM Manipulation</span>
                <span className="technologies">3rd Party API</span>
                <span className="technologies">AJAX</span>
                <span className="technologies">JSON</span>
              </div>

            </div>
          </div>

        </div> */}

        {/* <div className="w-[45%] lg:w-[25%]">
          <a href="https://codingfuze.fredrickrana.com/" target={"_blank"}>
            <img src="/CodingFuze.png" alt="CodingFuzeScreenshot" className="shadow-lg shadow-[#62f8d5]/90 scale-[1.5] mt-12 rounded-md opacity-90 hover:opacity-100 cursor-pointer" />
          </a>
          <h1 className="text-2xl mt-24 font-bold pt-2">CodingFuze</h1>
          <div>
            <button className="border rounded-full p-3 text-sm mt-5 align-middle"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-[30px] inline bg-white rounded-full" />   View Code</button>
          </div>
        </div> */}

        {/* <div className="w-[45%] lg:w-[25%] ml-[90px]">
          <a href="https://codingfuze.fredrickrana.com/" target={"_blank"}>
            <img src="/CodeJournalScreenshot.png" alt="CodingFuzeScreenshot" className="shadow-lg shadow-[#62f8d5]/90 scale-[1] mt-12 rounded-md opacity-90 hover:opacity-100 cursor-pointer" />
          </a>
          <h1 className="text-2xl mt-24 font-bold pt-2">Code Journal</h1>
          <div>
            <button className="border rounded-full p-3 text-sm mt-5 align-middle"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-[30px] inline bg-white rounded-full" />   View Code</button>
          </div>
        </div> */}



    </div>
  )
}
