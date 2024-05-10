import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#353535] py-10 rounded-t-3xl text-white'>
      <div className="flex justify-center mb-4">
        <span className='text-center'>Alejo Pequeño</span>
      </div>
      <ul className='flex gap-4 justify-center text-xl'>
        <li className="transition-all duration-200 hover:scale-110">
          <Link href='/me/CV - Alejo Pequeño.pdf' download target="_blank">
            <FaUser />
          </Link>
        </li>
        <li className="transition-all duration-200 hover:scale-110">
          <Link href='https://www.linkedin.com/in/alejo-peque%C3%B1o/' target="_blank">
            <FaLinkedin />
          </Link>
        </li>
        <li className="transition-all duration-200 hover:scale-110">
          <Link href='https://github.com/AlejoPeque' target="_blank">
            <FaGithub />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
