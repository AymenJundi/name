import React from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import baharImage from "../assets/bahar.jpg"; // Import the image

const Hero = () => {
  return (
    <section className="relative w-full h-auto mx-auto bg-white">
      {/* Content Section */}
      <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center gap-5 pt-5`}>
        
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={baharImage}
            alt="Bahar"
            className="w-48 h-48 rounded-full border-4 border-[#1746ff] object-cover shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-center sm:text-left w-full sm:w-3/4 md:w-2/3 mt-4">
          <h1
            className={`${styles.heroHeadText} text-[#1746ff] text-3xl sm:text-5xl md:text-6xl font-bold`}
          >
            Teach a society
          </h1>

          <p
            className={`${styles.heroSubText} text-[#1746ff] text-center sm:text-left text-lg sm:text-xl md:text-2xl leading-relaxed sm:leading-normal`}
          >
            Ready to experience the difference? Apply now or schedule a tour to
            see what makes Daystar a great place for your child to grow and
            learn. Ready to experience the difference? Apply now or schedule a tour to
            see what makes Daystar a great place for your child to grow and
            learn.
          </p>

          {/* Social Links - Visible only on small devices and with color #1746ff */}
          <div className="justify-center sm:justify-start gap-4 mt-4 sm:mt-0 mb-4 sm:mb-8 flex sm:hidden text-[#1746ff]">
            <a
              href="https://www.linkedin.com/in/aymen-jundi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-xl transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-xl transition-colors duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://t.me/Kingaymen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-xl transition-colors duration-300"
            >
              <BsTelegram />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-5 justify-center sm:justify-start">
            <a
              href="#contact" // Link to the contact-us section
              className="px-6 py-3 bg-[#1746ff] text-white font-bold rounded-lg hover:bg-[#1746ff] transition w-full sm:w-auto"
            >
              Contact me
            </a>

            <a
              href="#about" // Link to the about section
              className="px-6 py-3 border-2 border-[#1746ff] text-black font-bold rounded-lg hover:bg-[#1746ff] hover:text-white transition w-full sm:w-auto mt-4 sm:mt-0"
            >
              Learn More
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "home");