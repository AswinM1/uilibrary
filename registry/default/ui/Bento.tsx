"use client";
import React from "react";
import { motion } from "framer-motion";

interface TileProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  textColor?: string;
  imageUrl?: string;
}

const MotionTile = ({
  children,
  className,
  bgColor = "#ffffff",
  textColor = "#000000",
  imageUrl,
}: TileProps) => {
  const style = {
    backgroundColor: imageUrl ? undefined : bgColor,
    color: textColor,
    backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`rounded-2xl p-6 flex items-center justify-center text-center font-bold border-2 border-black shadow-[6px_6px_0px_black] outline outline-2 outline-black ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
};

const Bento = () => {
  return (
    <div className="grid grid-cols-4 auto-rows-[200px] gap-4 p-6">
      <MotionTile
        className="col-span-4 row-span-2 flex-col"
        bgColor="#3e446e"
        textColor="#f0f0f0"
      >
        <h2 className="text-4xl mb-2 font-black tracking-tight">
          May the Force be with you.
        </h2>
      </MotionTile>

      <MotionTile
        className="col-span-2 row-span-2 flex-col"
        bgColor="#e7363c"
        textColor="#0a0a0a"
      >
        <h3 className="text-2xl mb-2 font-black tracking-tight">
          Why so serious?
        </h3>
      </MotionTile>

      <MotionTile
        className="col-span-2"
        bgColor="#013445"
        textColor="#ffffff"
        imageUrl="https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80"
      >
        To infinity and beyond!
      </MotionTile>

      <MotionTile
        className="col-span-2"
        bgColor="#feac3a"
        textColor="#222222"
        // imageUrl="https://images.unsplash.com/photo-1581291519195-ef11498d1cf5?auto=format&fit=crop&w=800&q=80"
      >
        Life is like a box of chocolates.
      </MotionTile>
    </div>
  );
};

export default Bento;
