'use client'
import React from "react";

type Props = {
  title: string;
  imageSource: string;
  shadowColor: string;
  codeSource: string;
  buttonColor: string;
  description: string;
}

export default function Project({ title, imageSource, shadowColor, codeSource, buttonColor, description }: Props) {
  return (
    <div className="justify-center space-y-3">
      <div className="w-[100%] space-y-3">
        <img src={imageSource} className={`mx-auto shadow-lg ${shadowColor} w-[50%] mt-12 rounded-md opacity-90 hover:opacity-100 cursor-pointer`} />
        <h1 className="text-2xl mt-4 font-bold pt-2 text-[#ccd6f6]">{title}</h1>
        <a href={codeSource} target={"_blank"} className="block"><button className={`border rounded-full p-3 text-sm align-middle ${buttonColor}`}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-[30px] inline bg-white rounded-full" />   View Code</button></a>
      </div>
      <div className="w-[100%]">
        <p className="text-sm mx-5">{description}</p>
      </div>
    </div>
  )
}
