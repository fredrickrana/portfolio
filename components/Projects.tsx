'use client'
import React from "react";
import { motion } from "framer-motion";

type Props = {}

export default function Projects({ }: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="flex h-screen relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">


            <motion.img src="https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/whatisacomputer_pc.jpg" alt="computer" className="w-89 h-60"
              initial={{
                y: -300
              }}
              transition={{
                duration: 1.2
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">Case Study {i + 1} of {projects.length}: CodingFuze</span>
              </h4>
            </div>
            <p className="text-lg text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at dapibus purus. Proin quis vestibulum est. Praesent porttitor vehicula diam fermentum tincidunt. Donec laoreet sit amet augue eu fermentum. In euismod eros ac metus rhoncus, a commodo dolor vulputate. Nam porta aliquam orci, quis vehicula nibh tempus ac. Etiam ornare turpis imperdiet ante faucibus elementum. Nam vitae lectus vel lorem tincidunt dignissim quis sed est. Suspendisse pharetra tincidunt lorem non fermentum.</p>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[400px] -skew-y-12"></div>
    </div>
  )
}
