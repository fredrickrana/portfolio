'use client'
import React from "react";
import { easeIn, easeInOut, motion } from "framer-motion";

type Props = {}

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

export default function BackgroundCircles({ }: Props) {
  return (
    // <motion.div
    //   animate={{
    //     y: [-10, 10, -10]
    //   }}
    //   transition={{
    //     duration: 4,
    //     repeat: Infinity,
    //     repeatDelay: 0
    //   }}
    //   className='flex'
    // >
    <div>
      <div className="absolute border border-gray-500 rounded-full h-[400px] w-[400px] -top-[145px] left-[40px] bg-slate-800/10 animate-pulse"></div>
      <div className="absolute border border-gray-500 rounded-full h-[100px] w-[100px] top-[28%] left-[40%] bg-slate-800/10 animate-pulse"></div>
      <div className="absolute border border-gray-500 rounded-full h-[350px] w-[350px] -bottom-[40px] right-[10px] bg-slate-800/10 animate-pulse"></div>
      <div className="hidden lg:inline-flex absolute border border-gray-500 rounded-full h-[300px] w-[300px] top-[2%] right-[2%] bg-slate-800/10 animate-pulse"></div>
      <div className="absolute border border-gray-500 rounded-full h-[200px] w-[200px] ml-[79%] mt-[30%] bg-slate-800/10 animate-pulse"></div>
      <div className="hidden lg:inline-flex absolute border border-gray-500 rounded-full h-[650px] w-[650px] left-30 mt-[42%] bg-slate-800/10 animate-pulse"></div>
    </div>
    // </motion.div>
  )
}
