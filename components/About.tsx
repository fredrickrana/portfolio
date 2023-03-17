'use client'
import React from "react";
import { motion } from "framer-motion";
import { HeartIcon, BookOpenIcon, MegaphoneIcon } from "@heroicons/react/24/solid";

export default function About() {
  const love = '<I-Love-';
  const closingTag = '/>';
  return (
    <div className="container h-screen m-auto text-center text-[#e5e1e1]">
      <div className="flex w-full justify-center">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-3xl lg:text-4xl mt-[20%] lg:mt-[10%] mb-[50px]">About</h3>
      </div>
      <div className="flex w-[90%] flex-wrap m-auto">
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1.5
          }}
          className="basis-full lg:basis-[50%]"
        >
          <motion.img
            initial={{
            x: -200,
            opacity: 0
            }}
            transition={{
              duration: 1.5
            }}
            whileInView={{
              x: 0,
              opacity: 1
            }}
            src="/AboutPhoto.jpg"
            className="mb-6 lg:mb-0 flex-shrink-0 w-72 h-72 rounded-full object-cover lg:rounded-lg lg:w-80 lg:h-80 m-auto border"
          />
          <h1 className="lg:mt-8 text-[#ccd6f6]"><MegaphoneIcon className="w-4 inline align-middle" /> Fun Facts:</h1>
          <h1 className="lg:mt-2">{love}<span className="text-[#62f8d5]/70">To-Workout</span> {closingTag}</h1>
          <h1>{love}<span className="text-[#62f8d5]/70">To-Travel</span> {closingTag}</h1>
          <h1>{love}<span className="text-[#62f8d5]/70">To-RockClimb</span> {closingTag}</h1>
        </motion.div>
        <motion.div
          initial={{
            x: 200,
            opacity: 0
          }}
          whileInView={{
            x: 0,
            opacity: 1
          }}
          transition={{
            duration: 1.5
          }}
          className="basis-full lg:basis-[50%] text-left"
        >
          <p className="text-base text-center my-4 text-[#ccd6f6]">Hello! My name is Fredrick Rana, and I am a software developer.</p>
          <p className="text-[#ccd6f6]"><HeartIcon className="w-4 inline align-middle" /> Passion:</p>
          <p>I love the creativity that comes with programming, the ability to solve complex problems, and the fact that there is always something new to learn. Today, as a software developer, I am driven by my passion for creating solutions that make a difference. I am constantly refining my skills, experimenting/learning new programming languages and techniques, and I enjoy collaborating with others to bring new ideas to life.</p>
          <p className="mt-5 text-[#ccd6f6]"><BookOpenIcon className="w-4 inline align-middle" /> Story:</p>
          <p>I have a background in healthcare and have always been interested in health and wellness. After graduating from the <span className="text-[#62f8d5]">University of California, Irvine</span> in 2020, I started working within healthcare as a physical therapist aide and had an initial goal of becoming a physical therapist. Through my friends who were software developers, I discovered a new world of problem-solving, creativity, and innovation. I was drawn to it as a creative outlet and continued to explore my interest in software development in my free time. I found programming to be a highly creative and intellectually stimulating field with the potential for using technology to improve people's lives and solve complex problems. Ultimately, my decision to switch careers was driven by my desire to pursue a path that aligned with my interests, passions, and strengths. I subsequently enrolled in <span className="text-[#62f8d5]">LearningFuze</span>, an accelerated, in-person full-stack web development program in Irvine, California where I acquired comprehensive skills in HTML, CSS, JavaScript, Node.js, Express.js, PostgreSQL, React, data structures and algorithms. I believe that software development is an exciting and rapidly evolving field, and I am eager to contribute my skills and creativity to make a positive impact on the world.</p>
          <p className="my-5">Thank you for taking the time to get to know me a little better. If you have any questions or would like to connect, feel free to <a className="text-[#62f8d5]" href="#contact">contact me</a>.</p>
        </motion.div>
      </div>
    </div>
  )
}
