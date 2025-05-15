"use client";
import React from "react";
import { motion } from "framer-motion";

interface ButtonProp {
  text?: string;
  color?: string;
  width?: string;   // e.g., "150px" or "100%"
  height?: string;  // e.g., "40px"
}

export default function RetroButton({
  text = "Click",
  color = "#c33740",
  width,
  height,
}: ButtonProp) {
  return (
    <motion.button
      whileTap={{ scale: 0.95, boxShadow: "0px 0px 0px 0px" }}
      style={{
        backgroundColor: color,
        width: width,
        height: height,
      }}
      className="  justify-center px-5 py-2 font-bold rounded-sm text-white border-2 shadow-[0px_4px_1px_white]"
    >
      {text}
    </motion.button>
  );
}
