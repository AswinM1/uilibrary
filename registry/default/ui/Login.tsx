"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface LoginProps {
  color?: string;
  text?: string;
}

export default function Login({ text = "Login", color = "#dfa05d" }: LoginProps) {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col shadow-xl shadow-black/50 mx-auto justify-center items-center gap-5 border-2 px-11 py-7'
        style={{ backgroundColor: color }}
      >
        <h2 className='font-bold tracking-tight text-4xl text-black'>{text}</h2>

        <input
          className='border-2 px-3 py-3 rounded-sm shadow-[2px_2px_0px_black] text-black focus:outline-none focus:ring-0'
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <input
          className='border-2 px-3 py-3 rounded-sm shadow-[2px_2px_0px_black] text-black focus:outline-none focus:ring-0'
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <motion.button
          whileTap={{ scale: 0.95, boxShadow: 'none' }}
          type="submit"
          className='w-fit text-center mx-auto py-2 px-6 border shadow-[0px_4px_2px_black] bg-red-500 font-bold'
        >
          {text}
        </motion.button>

        <p className='font-sans mx-2 text-black'>
          Create an account <span className='font-bold mx-2 underline text-black'>Sign up</span>
        </p>
      </form>
    </div>
  );
}
