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
 
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Navbar({ color = "#facc15", links = defaultLinks }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ backgroundColor: color }}
        className="w-full py-4 px-6 fixed z-50 border-4 border-black backdrop-blur-lg"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-black text-xl font-black">RetroUI</h1>

          <div className="hidden md:flex gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href="#"
                style={{ color: link.text }}
                className="rounded-full px-4 py-2 font-bold border-2 border-black hover:scale-75 shadow-[4px_4px_0px_black] text-sm transition duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="fixed top-[80px] left-4 right-4 z-40 flex flex-col gap-3 md:hidden"
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
    </>
  );
}

export default Navbar;
