'use client'
import React from "react";
// import { motion } from "framer-motion";

type Props = {
  technology: string;
}

export default function Technologies({ technology }: Props) {
  return (
    <span className="technologies">{technology}</span>
  )
}
