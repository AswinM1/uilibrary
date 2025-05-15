"use client"
import React from "react";
import { motion } from "framer-motion";
import RetroButton from "@/registry/default/ui/RetroButton";
import Navbar from "@/registry/default/ui/Navbar";
import Link from "next/link";

const retroSVGs = [
  {
    id: 1,
    svg: (
      <svg viewBox="0 0 64 64" width={60} height={60} fill="currentColor" className="text-[#ff69b4]">
        <path d="M10 2h44a2 2 0 0 1 2 2v56a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm2 6v48h40V8H12zm18 8h4v4h-4v-4z" />
      </svg>
    ),
    style: { top: "10%", left: "5%" },
  },
  {
    id: 2,
    svg: (
      <svg viewBox="0 0 64 64" width={60} height={60} fill="currentColor" className="text-[#00ffff]">
        <path d="M4 16h56v32H4V16zm6 4v24h44V20H10zm4 6h8v12h-8V26z" />
      </svg>
    ),
    style: { top: "70%", left: "10%" },
  },
  {
    id: 3,
    svg: (
      <svg viewBox="0 0 64 64" width={60} height={60} fill="currentColor" className="text-[#00ff00]">
        <circle cx="32" cy="32" r="30" />
      </svg>
    ),
    style: { top: "30%", left: "80%" },
  },
];

function Hero() {
  return (
    <div className="bg-[#dda132] min-h-screen overflow-hidden relative flex items-center justify-center p-6">
      <div className="fixed top-0 w-full backdrop-blur-3x z-40">
        <Navbar color="transparent" />
      </div>

     
      <motion.div
        className="absolute z-0"
        
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        style={{ top: "10%", left: "40%", transform: "translate(-50%, -50%)" }}
      >
        <div className=" w-100 h-100 bg-orange-500 rounded-full"></div>
      </motion.div>

      {/* Draggable Retro SVGs */}
      {retroSVGs.map((item) => (
        <motion.div
          key={item.id}
          className="absolute cursor-grab z-10"
          drag
          dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
          style={item.style}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.svg}
        </motion.div>
      ))}

      <div className="text-center max-w-5xl z-20">
        <h1 className="text-6xl md:text-6xl font-extrabold tracking-tighter text-neutral-900">
          Bringing the charm of the past into modern UI components
        </h1>
        <p className="mt-6 text-lg md:text-xl text-black font-mono font-bold">
          A set of beautifully-designed, Retro Themed, accessible components
        </p>
        <div className="mt-8 flex w-full justify-center gap-5">
          <Link href={"/docs"}>
          <RetroButton width="150px" height="50px" text="Get Started" />
          
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
