'use client'
import React from "react";
import { motion } from "framer-motion";

// export default function BackgroundCircles({}: Props) {
//   return (
//     <motion.div
//     initial={{
//       opacity: 0
//     }}
//     animate={{
//       scale: [1,2,2,3,1],
//       opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
//       borderRadius: ["20%", "20%", "50%", "80%", "20%"]
//     }}
//     transition={{
//       duration: 2.5
//     }}
//     className="flex justify-center items-center">
//       <div className="absolute border border-gray-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping"></div>
//       <div className="absolute top-50 right-6 border border-gray-800 rounded-full h-[300px] w-[300px] mt-52"></div>
//       <div className="absolute bottom-20 border border-gray-500 rounded-full h-[500px] w-[500px] mt-52"></div>
//       <div className="absolute left-30 border border-yellow-50 rounded-full opacity-20 h-[650px] w-[650px] mt-52 animate-pulse"></div>
//       <div className="rounded-full right-10 border border-gray-500 h-[800px] w-[800px] absolute mt-52"></div>

//     </motion.div>
//   )
// }

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        y: -8
      }}
      animate={{
        y: [-8, 8, -8],
        opacity: 1
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatDelay: 0
      }}
    >
      <div className="h-screen w-full relative">
        <div className="md:hidden absolute border-2 border-gray-500 rounded-full h-[200px] w-[200px] top-[55%] left-[80px] bg-slate-800/10 animate-pulse"></div>
        <div className="hidden md:inline-flex xl:hidden absolute border-2 border-gray-500 rounded-full h-[100px] w-[100px] bottom-[10%] left-[40%] bg-slate-800/10 animate-pulse"></div>
        <div className="absolute border-2 border-gray-500 rounded-full h-[350px] w-[350px] -bottom-[40px] right-[10px] bg-slate-800/10 animate-pulse"></div>
        <div className="absolute border-2 border-gray-500 rounded-full h-[500px] w-[500px] bottom-[15%] left-[520px] bg-slate-800/10 animate-pulse"></div>
        <div className="xl:hidden absolute border-2 border-gray-500 rounded-full h-[250px] w-[250px] mt-[80px] left-[280px] bg-slate-800/10 animate-pulse"></div>
        <div className="absolute border-2 border-gray-500 rounded-full h-[200px] w-[200px] top-[2%] right-[52px] bg-slate-800/10 animate-pulse"></div>
        <div className="hidden xl:inline-flex absolute border-2 border-gray-500 rounded-full h-[50px] w-[50px] left-[535px] mt-[42%] bg-slate-800/10 animate-pulse"></div>
        <div className="hidden xl:inline-flex absolute border-2 border-gray-500 rounded-full h-[660px] w-[660px] -left-[55px] -top-[20px] bg-slate-800/10 animate-pulse"></div>
      </div>
    </motion.div>
  )
}
