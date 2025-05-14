import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className="w-full bg-neutral-900 text-[#f5f5dc] py-10 px-6  font-mono flex flex-col items-center">
      <h2 className="text-2xl font-mono mb-4">Connect With Me</h2>
      <div className="flex space-x-6 mb-4">
        <a
          href="https://github.com/AswinM1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#f5f5dc] hover:text-[#ff7f50] transition-colors duration-300"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="www.linkedin.com/in/aswinmfullstack"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#f5f5dc] hover:text-[#98fb98] transition-colors duration-300"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#f5f5dc] hover:text-[#add8e6] transition-colors duration-300"
        >
          <FaTwitter size={32} />
        </a>
      </div>
      <p className="text-sm text-[#c0c0c0]">&copy; {new Date().getFullYear()} RetroUi. All rights reserved.</p>
    </div>
  );
}

export default Footer;
