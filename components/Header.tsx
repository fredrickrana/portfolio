'use client'
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import DarkModeToggle from "react-dark-mode-toggle";

type Props = {}

// export default function Header({}: Props) {
//   return (
//     <div className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
//       <motion.div
//       initial={{
//         x: -500,
//         opacity: 0,
//         scale: 0.5
//       }}
//       animate={{
//         x: 0,
//         opacity: 1,
//         scale: 1
//       }}
//       transition={{
//         duration: 1.5
//       }}
//       className="flex flex-row items-center"
//       >
//         <img src="" alt="" />
//         <SocialIcon
//           url="https://www.linkedin.com/fredrickrana"
//           fgColor="gray"
//           bgColor="transparent"
//         />
//         <SocialIcon
//           url="https://github.com/fredrickrana"
//           fgColor="gray"
//           bgColor="transparent"
//         />
//         <SocialIcon
//           className="cursor-pointer"
//           network="email"
//           fgColor="gray"
//           bgColor="transparent"
//         />
//         <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
//         <DarkModeToggle
//           checked={true}
//           size={60}
//           className=""
//         />
//       </motion.div>

//       <motion.div
//         initial={{
//           x: 500,
//           opacity: 0,
//           scale: 0.5
//         }}
//         animate={{
//           x: 0,
//           opacity: 1,
//           scale: 1
//         }}
//         transition={{
//           duration: 1.5
//         }}
//       >
//         <a href="#home">Home</a>
//         <a href="#about">About</a>
//         <a href="#skills">Skills</a>
//         <a href="#project">Project</a>
//         <a href="#contact">Contact</a>
//       </motion.div>
//     </div>
//   )
// }

export default function Header({ }: Props) {
  return (
    <div className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 4,
          easing: "ease-in"
        }}
      >
        <span>
          <img src="/FRLogo-NoBG.png" alt="FRlogo"
            className="absolute saturate-0 w-36 -top-4 left-0"
          />
        </span>
      </motion.div>



      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1.2
        }}
        transition={{
          duration: 1.5
        }}
        className="flex flex-row items-center ml-32"
      >
        <SocialIcon
          url="https://linkedin.com/in/fredrick-rana"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/fredrickrana"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          onClick={
            () => { window.location.href = 'mailto:fredrickrana@gmail.com'; }
          }
        />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 4,
          easing: "ease-in"
        }}
      >
        <DarkModeToggle
          checked={true}
          size={90}
          className="saturate-0 hover:saturate-100 ml-5"
        />
      </motion.div>




      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
      >
        <a className='px-8 uppercase hidden md:inline-flex text-m text-gray-400' href="#home">Home</a>
        <a className='px-8 uppercase hidden md:inline-flex text-m text-gray-400' href="#about">About</a>
        <a className='px-8 uppercase hidden md:inline-flex text-m text-gray-400' href="#skills">Skills</a>
        <a className='px-8 uppercase hidden md:inline-flex text-m text-gray-400' href="#project">Project</a>
        <a className='px-8 uppercase hidden md:inline-flex text-m text-gray-400' href="#contact">Contact</a>
        <button className="border border-[#efefef]/70 rounded-3xl px-0 py-1 saturate-0 bg-[#555555] ">
          <a className='px-8 uppercase hidden md:inline-flex text-m text-[#efefef]/70' href="/Resume.pdf" download>Resume</a>
        </button>
      </motion.div>
    </div>
  )
}
