'use client'
import React from "react";
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

export default function Projects({ }: Props) {
  return (
    <div className="container h-screen m-auto text-center text-[#e5e1e1]">
      <div className="flex w-full justify-center">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-3xl lg:text-4xl mt-[20%] lg:mt-[10%] mb-[50px]">Projects</h3>
      </div>
      <h3 className="uppercase tracking-[20px] text-gray-500 text-sm lg:text-lg mb-[50px]">Click to view live application</h3>
      <div className="w-[100%] flex flex-wrap justify-center m-auto">
        <div className="w-[45%] lg:w-[25%] mr-[90px]">
          <a href="https://fredrickrana.github.io/ajax-project/" target={"_blank"}>
            <img src="/MicMacHomePageScreenshot.png" alt="MicMacHomePageScreenshot" className="shadow-lg shadow-blue-500/90 scale-[1.5] mt-12 rounded-md opacity-90 hover:opacity-100 cursor-pointer"/>
          </a>
          <h1 className="text-2xl mt-24 font-bold pt-2">MicMac</h1>
          <div>
            <button className="border rounded-full p-3 text-sm mt-5 align-middle"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-[30px] inline bg-white rounded-full" />   View Code</button>
          </div>
        </div>
        <div className="w-[45%] lg:w-[25%] ml-[90px]">
          <a href="https://codingfuze.fredrickrana.com/" target={"_blank"}>
            <img src="/CodingFuze.png" alt="CodingFuzeScreenshot" className="shadow-lg shadow-[#62f8d5]/90 scale-[1.5] mt-12 rounded-md opacity-90 hover:opacity-100 cursor-pointer" />
          </a>
          <h1 className="text-2xl mt-24 font-bold pt-2">CodingFuze</h1>
          <div>
            <button className="border rounded-full p-3 text-sm mt-5 align-middle"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-[30px] inline bg-white rounded-full" />   View Code</button>
          </div>
        </div>

        <div className="w-[45%] lg:w-[25%] ml-[90px]">
          <a href="https://codingfuze.fredrickrana.com/" target={"_blank"}>
            <img src="/CodeJournalScreenshot.png" alt="CodingFuzeScreenshot" className="shadow-lg shadow-[#62f8d5]/90 scale-[1] mt-12 rounded-md opacity-90 hover:opacity-100 cursor-pointer" />
          </a>
          <h1 className="text-2xl mt-24 font-bold pt-2">Code Journal</h1>
          <div>
            <button className="border rounded-full p-3 text-sm mt-5 align-middle"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-[30px] inline bg-white rounded-full" />   View Code</button>
          </div>
        </div>

      </div>
    </div>
  )
}
