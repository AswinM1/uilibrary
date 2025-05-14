'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface ProfileProps {
  name?: string;
  hobbies?: string[];
  email?: string;
  techStack?: string[];
  imageUrl?: string;
  className?: string;
}

const Profile: React.FC<ProfileProps> = ({
  name = 'Tyler',
  hobbies = ["sky staring","movies","sleeping","dancing"],
  techStack = ["React", "Java", "Meow#", "CatDb", "yapping", "meowing", "meow++"],
  imageUrl = 'https://i.pinimg.com/736x/63/d4/52/63d452c0076888a39f78c966febc48e8.jpg',
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`w-full max-w-md mx-auto bg-[#dc5341] border-[3px] border-black shadow-[8px_8px_0px_black] rounded-lg flex flex-col items-center gap-4 p-6 ${className}`}
    >
      
      <motion.img
       whileHover={{
        scale:'1.2'
       }}
        dragConstraints={
                {
                    top:2,
                    bottom:2,
                    left:2,
                    right:2

                }
            }
            drag
       transition={{
        duration:'5',
       
       }}
        src={imageUrl}
        alt={name}
        width={180}
        height={180}
        className="rounded-sm border-2 border-black shadow-[4px_4px_0px_black] object-cover"
      />

     
      <h1 className="text-3xl font-black tracking-tight border-b-2 border-black pb-1  text-center text-black">
        {name}
      </h1>

      
      {hobbies.length > 0 && (
        <div className="w-full text-black">
          <p className="font-black text-lg underline">Hobbies:</p>
          <ul className="flex flex-wrap gap-2 mt-1">
            {hobbies.map((hobby, idx) => (
              <li
                key={idx}
                className="bg-white border-[2px] border-black px-3 py-1 rounded-sm text-sm shadow-[2px_2px_0px_black]"
              >
                {hobby}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="w-full text-black">
        <p className="font-black text-lg underline">Tech Stack:</p>
        <ul className="flex flex-wrap gap-2 mt-1">
          {techStack.map((tech, idx) => (
            <motion. li
           whileHover={{
        scale:'1.2'
       }}
            transition={{
                duration:'2'
            }}
            dragConstraints={
                {
                    top:2,
                    bottom:2,
                    left:2,
                    right:2

                }
            }
            drag
              key={idx}
              className="bg-[#e5bb21] text-black px-3 py-1 border-2 border-black rounded-sm text-sm font-bold shadow-[2px_2px_0px_black]"
            >
              {tech}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 mt-4">
        < motion.button
        whileTap={{
            boxShadow:'none',
            scale:'0.8'
        }}
         className="bg-[#2ab99d] text-black font-bold px-4 py-2  border-2 border-black shadow-[4px_4px_0px_black]">
          Request Session
        </motion.button>
        <motion.button
        whileTap={{
            boxShadow:'none',
            scale:'0.8'
        }}
         className="bg-[#2727bb] text-white px-4 py-2 text-sm font-bold border-2  border-black shadow-[4px_4px_0px_black]">
          Portfolio
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Profile;
