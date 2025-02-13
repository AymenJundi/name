import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// Social icons import
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsTelegram, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5, 1)}>
      <div className="blue-glow w-full py-12 text-white">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold">Developed By Aymen Jundi</h3>
            <p className="text-lg mt-2">
             Contact me if you want website like this
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-8">

          <a
              href="https://t.me/Kingaymen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[#43a8d4] transition-colors duration-300"
            >
              <BsTelegram />
            </a>

            <a
              href="https://www.linkedin.com/in/aymen-jundi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[#43a8d4] transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/AymenJundi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[#43a8d4] transition-colors duration-300"
            >
              <FaGithub />
            </a>
         
            <a
              href="https://www.instagram.com/elkingaj7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[#43a8d4] transition-colors duration-300"
            >
              <BsInstagram />
            </a>

            
          </div>


<div>
<p className="text-white-100 text-[16px] mt-2">
              Phone: <a href="tel:+251123456789" className="text-white">+251964350841</a>
            </p>
            <p className="text-white-100 text-[16px] mt-2">
              Email: <a href="mailto:aymenjundi11@gmail.com" className="text-white">aymenjundi11@gmail.com</a>
            </p>
</div>

          {/* Footer Content */}
          <div className="text-sm mt-4">
            <p>&copy; {new Date().getFullYear()} Aymen Jundi. All rights reserved.</p>
            <p className="mt-2">
              <a href="/privacy-policy" className="text-white hover:text-blue-600 transition-colors duration-300">Privacy Policy</a> | 
              <a href="/terms-of-service" className="text-white hover:text-blue-600 transition-colors duration-300"> Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;