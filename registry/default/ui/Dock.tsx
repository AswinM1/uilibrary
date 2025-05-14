"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaCog, FaMusic, FaEnvelope } from "react-icons/fa";

const apps = [
  { name: "Home", icon: <FaHome />, color: '#59ac99' },
  { name: "Profile", icon: <FaUser />, color: '#fcab20' },
  { name: "Settings", icon: <FaCog />, color: '#e7363c' },
  { name: "Music", icon: <FaMusic />, color: '#f56438' },
  { name: "Mail", icon: <FaEnvelope />, color: '#fcab20' },
];

const Dock = () => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-neutral-800 w-fit p-2 rounded-2xl shadow-[6px_6px_0px_black] border-2 border-black flex gap-4 backdrop-blur-md z-50">
      {apps.map((app, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.3,zIndex:3 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ backgroundColor: app.color }}
          className="flex flex-col items-center text-black group border-2 border-black px-4 py-3 rounded-xl shadow-[4px_4px_0px_black]"
        >
          <div className="text-2xl">{app.icon}</div>
        
        </motion.div>
      ))}
    </div>
  );
};

export default Dock;
