"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  color: string;
  text: string;
}

interface Props {
  color?: string;
  links?: NavLink[];
}

const defaultLinks: NavLink[] = [
  { name: "Home", color: "#3e446e", text: "#000" },
  { name: "Docs", color: "#013445", text: "#000" },
  { name: "contact", color: "Red", text: "#000" },
  { name: "services", color: "yellow", text: "#000" },
];

const containerVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { when: "afterChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

function Navbar({ color = "#facc15", links = defaultLinks }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
     
      <div className="flex justify-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ backgroundColor: color }}
          className="rounded-full p-3 border-4 border-black shadow-[4px_4px_0px_black] transition-transform hover:scale-105"
        >
          {isOpen ? <X size={24} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Slide-down links below hamburger */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-4 flex flex-col gap-3 overflow-hidden"
          >
            {links.map((link, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href="#"
                onClick={() => setIsOpen(false)}
                style={{
                  backgroundColor: link.color,
                  color: link.text,
                }}
                className="rounded-full px-4 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_black] text-center"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
