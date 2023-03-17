'use client'
import React from "react";

type Props = {
  technology: string;
}

export default function Technologies({ technology }: Props) {
  return (
    <span className="technologies">{technology}</span>
  )
}
