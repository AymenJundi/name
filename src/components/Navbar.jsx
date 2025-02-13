import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);

      let currentActive = "";
      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is partially or fully visible in the viewport
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentActive = id;
          } else if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            currentActive = id;  // Keeps the section active if it's partially visible
          }
        }
      });
      setActive(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full fixed top-0 z-20 flex items-center justify-between py-5 transition-all duration-300 ${
        scrolled ? "blue-glow shadow-lg border-none" : "blue-glow border-none"
      }`}
      style={{ borderRadius: "0px" }}
    >
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive(" ");
          window.scrollTo(0, 0);
        }}
      >
        <p className="text-white text-[18px] sm:text-[28px] font-bold cursor-pointer">
          Dr.Bahar Adam&nbsp;
        </p>
      </Link>

      <div className="flex items-center gap-10">
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(({ id, title }) => (
            <li key={id} className="relative">
              <a
                href={`#${id}`}
                onClick={() => setActive(id)}
                className={`text-white text-[22px] sm:text-[23px] font-medium cursor-pointer transition-all duration-300 relative ${
                  active === id ? "underline underline-offset-4" : ""
                }`}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden sm:flex gap-4">
          <a
            href="https://www.linkedin.com/in/aymen-jundi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl sm:text-xl hover:text-[#00c8ff] transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl sm:text-xl hover:text-[#00c8ff] transition-colors duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://t.me/Kingaymen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl sm:text-xl hover:text-[#00c8ff] transition-colors duration-300"
          >
            <BsTelegram />
          </a>
        </div>
      </div>

      <div className="sm:hidden flex justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="object-contain w-[28px] h-[28px]"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[#0045af] absolute top-20 right-4 mx-4 my-2 min-w-[140px] z-10`}
          style={{ borderRadius: "0px" }}
        >
          <ul className="list-none flex flex-col gap-4">
            {navLinks.map(({ id, title }) => (
              <li key={id} className="relative">
                <a
                  href={`#${id}`}
                  onClick={() => {
                    setToggle(false);
                    setActive(id);
                  }}
                  className={`text-white font-medium text-[18px] sm:text-[16px] cursor-pointer transition-all duration-300 relative ${
                    active === id ? "underline underline-offset-4" : ""
                  }`}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;