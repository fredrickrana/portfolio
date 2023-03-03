'use client'
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import DarkModeToggle from "react-dark-mode-toggle";
import { Bars3Icon } from "@heroicons/react/24/solid";

type Props = {}

export default function Header({}: Props) {
  return (
    <div className="container m-auto sticky top-0 p-5 pb-12 flex justify-between max-w-7xl mx-auto z-20 items-center">

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
            className="absolute saturate-0 hover:saturate-100 w-36 -top-4 left-0"
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
          className="hover:bg-[#085a7d] rounded-full"
        />
        <SocialIcon
          url="https://github.com/fredrickrana"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          className="hover:bg-[#085a7d] rounded-full"
        />
        <SocialIcon
          className="cursor-pointer hover:bg-[#085a7d] rounded-full"
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
          size={80}
          className="saturate-0 hover:saturate-100 mx-5 mt-3"
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
        className='text-center'
      >
        <a className='px-8 uppercase hidden xl:inline-flex text-m text-gray-400 headerButton' href="#home">Home</a>
        <a className='px-8 uppercase hidden xl:inline-flex text-m text-gray-400 headerButton' href="#about">About</a>
        <a className='px-8 uppercase hidden xl:inline-flex text-m text-gray-400 headerButton' href="#skills">Skills</a>
        <a className='px-8 uppercase hidden xl:inline-flex text-m text-gray-400 headerButton' href="#project">Projects</a>
        <a className='px-8 uppercase hidden xl:inline-flex text-m text-gray-400 headerButton' href="#contact">Contact</a>
        <button className="border border-[#efefef]/70 hidden xl:inline-flex md:mt-3 rounded-3xl px-0 py-1 bg-[#555555] hover:bg-[#085a7d]/80">
          <a className='px-8 uppercase text-m text-[#efefef]/70 links' href="/Resume.pdf" download>Resume</a>
        </button>
        <Bars3Icon className="inline-flex xl:hidden text-gray-400 h-10 w-10 right-0 hover:text-[#085a7d]"/>
      </motion.div>
    </div>
  )
}
