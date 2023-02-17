'use client'
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Fredrick Rana",
      "I Love Coffee",
      "I Love To Exercise",
      "I Love To Travel",
      "I Love To Code"
    ],
    loop: true,
    delaySpeed: 2000
  });

  return (
    <div>
        <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#fff" />
      </h1>
    </div>
  );
}
