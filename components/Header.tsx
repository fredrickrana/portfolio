'use client'
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
// import DarkModeToggle from "react-dark-mode-toggle";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Modal from "./Modal";
import useModal from "./useModal";

type Props = {}

export default function Header({}: Props) {
  const { isOpen, toggle } = useModal();
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
          <img src="/FRLogo.png" alt="FRlogo"
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
        className="flex flex-row items-center ml-[10%] mt-2"
      >
        <SocialIcon
          url="https://linkedin.com/in/fredrick-rana"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          className="hover:bg-[#62f8d5]/20 rounded-full"
        />
        <SocialIcon
          url="https://github.com/fredrickrana"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          className="hover:bg-[#62f8d5]/20 rounded-full"
        />
        <SocialIcon
          className="cursor-pointer hover:bg-[#62f8d5]/20 rounded-full"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          onClick={
            () => { window.location.href = 'mailto:fredrickrana@gmail.com'; }
          }
        />
      </motion.div>

      {/* <motion.div
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
      > */}
        {/* <DarkModeToggle
          checked={true}
          size={80}
          className="saturate-0 hover:saturate-100 mx-5 mt-3"
        />
      </motion.div> */}

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
        <a className='px-8 uppercase hidden xl:inline-flex text-m text-gray-400 headerButton' href="#projects">Projects</a>
        <a className='px-8 uppercase hidden xl:inline-flex text-m text-gray-400 headerButton' href="#contact">Contact</a>
        <button className="border border-[#efefef]/70 hidden xl:inline-flex md:mt-3 rounded-3xl px-0 py-1 bg-[#555555] hover:bg-[#62f8d5]/60">
          <a className='px-8 uppercase text-m text-[#efefef]/70 hover:text-[#fff]' href="/Resume.pdf" download>Resume</a>
        </button>
        <Bars3Icon className="inline-flex xl:hidden text-gray-400 h-10 w-10 mr-[20px] headerButton cursor-pointer" onClick={toggle}/>
        <Modal isOpen={isOpen} toggle={toggle}>
          <XMarkIcon className="absolute top-[3%] text-gray-400 h-10 w-10 right-[8%] headerButton cursor-pointer" onClick={toggle} />

          <motion.div
            initial={{
              y: 1000,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1
            }}
            className="space-y-12"
          >
            <div>
              <a className='px-8 uppercase text-m text-gray-400 headerButton text-3xl' href="#home" onClick={toggle}>Home</a>
            </div>
            <div>
              <a className='px-8 uppercase text-m text-gray-400 headerButton text-3xl' href="#about" onClick={toggle}>About</a>
            </div>
            <div>
              <a className='px-8 uppercase text-m text-gray-400 headerButton text-3xl' href="#skills" onClick={toggle}>Skills</a>
            </div>
            <div>
              <a className='px-8 uppercase text-m text-gray-400 headerButton text-3xl' href="#projects" onClick={toggle}>Projects</a>
            </div>

            <div>
              <a className='px-8 uppercase text-m text-gray-400 headerButton text-3xl' href="#contact" onClick={toggle}>Contact</a>
            </div>

            <div>
              <button className="border border-[#efefef]/70 xl:inline-flex md:mt-3 rounded-3xl px-0 py-1 bg-[#555555] hover:bg-[#62f8d5]/60" onClick={toggle}>
                <a className='px-8 uppercase text-m text-[#efefef]/70 hover:text-[#fff] text-3xl' href="/Resume.pdf" download>Resume</a>
              </button>
            </div>

          </motion.div>
        </Modal>
      </motion.div>
    </div>
  )
}
