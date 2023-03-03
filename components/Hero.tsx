'use client'
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";

type Props = {}

// export default function Hero({}: Props) {
//   const [text] = useTypewriter({
//     words: [
//       "Hi, my name is Fredrick Rana",
//       "<ILoveToCode />",
//       "Welcome to my Portfolio"
//     ],
//     loop: 1,
//     delaySpeed: 2000
//   });

//   return (
//     <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
//       <BackgroundCircles />
//       <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src="/CartoonSelfPhotoNoBG.png" alt="alladin" />
//       <div className="z-20">
//         <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Developer</h2>
//         <h1 className="text-5xl lg:text-6xl font-semibold px-10">
//           <span>{text}</span>
//           <Cursor cursorColor="#fff" />
//         </h1>
//         <div className="pt-5">
//           <Link href="#about">
//             <button className="heroButton">About</button>
//           </Link>
//           <Link href="#skills">
//             <button className="heroButton">Skills</button>
//           </Link>
//           <Link href="#projects">
//             <button className="heroButton">Projects</button>
//           </Link>
//           <Link href="#contact">
//             <button className="heroButton">Contact</button>
//           </Link>
//         </div>
//       </div>

//       {/* <div className="w-full absolute top-[30%] bg-[blue]/10 left-0 h-[400px] -skew-y-12"></div>
//       <div className="w-full absolute top-[20%] bg-[beige]/10 left-0 h-[400px] -skew-y-12"></div> */}

//     </div>
//   );
// }

export default function Hero({ }: Props) {
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
    delaySpeed: 2000,
    deleteSpeed: 100
  })

  return (
    <div className="container h-screen flex w-full justify-center m-auto">
      <BackgroundCircles />
      <div className="mt-[12%] ml-[5%] text-center w-2/4">
        <h3 className="md:text-lg px-10 pt-8 text-left font-mono tracking-[.05em] text-[#62f8d5]">Hi, my name is</h3>
        <h1 className="text-6xl lg:text-5xl font-semibold px-10 pt-4 text-left text-[#ccd6f6] drop-shadow-xl font-sfmono tracking-[.10em]">Fredrick Rana.</h1>
        <h1 className="text-3xl lg:text-5xl font-semibold pl-10 pt-6 text-left text-[#8892B0]">I am a <span className="links lg:text-5xl drop-shadow-xl font-sfmono text-[#63f8d5] tracking-[.03em]">Software Developer.</span></h1>

        <h1 className="text-md font-semibold pl-10 pt-8 text-left text-[#8892B0]">Other occupations include...<span className="lg:text-md drop-shadow-xl font-sfmono text-[#63f8d5]">{occupations}<Cursor cursorColor="#62f8d5" /></span></h1>

        {/* <h1 className="text-5xl lg:text-5xl font-semibold mt-12 p-12 border rounded-3xl bg-[#1d2d41] drop-shadow-xl">Welcome To My Portfolio!</h1> */}
      </div>


      {/* <div className="mt-[5%] mr-44 text-center w-2/4">
        <img className="rounded-2xl w-11/12 mx-auto saturate-0 hover:saturate-100" src="/CartoonSelfPhotoNoBG.png" alt="photo" />
        <h1 className="text-5xl lg:text-5xl font-semibold px-10 ml-12 pt-12">{love}<span className="text-blue-500">{text}<Cursor cursorColor="#4174cf" /></span></h1>
      </div> */}
    </div>

    // row
    // column-half
    // column-half


    // <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
    //   <BackgroundCircles />
    //   <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src="/CartoonSelfPhotoNoBG.png" alt="photo" />
    //   <div className="z-20">
    //     <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Developer</h2>
    //     <h1 className="text-5xl lg:text-6xl font-semibold px-10">
    //       <span>{text}</span>
    //       <Cursor cursorColor="#fff" />
    //     </h1>
    //   </div>
    // </div>
  );
}
