import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("left", "spring", 0.5, 1)}
        className="mt-4 text-[#1746ff] text-[18px] max-w-3xl leading-[30px]"
      >
        I'm Dr. Aymen Jundi, a dedicated researcher and doctor with a passion for advancing medical knowledge and improving patient care. With years of experience in clinical research, my work focuses on exploring innovative treatments and methodologies to enhance the quality of life for patients across diverse fields.
        <br />
        <br />
        My journey as a researcher has led me to collaborate with esteemed institutions and contribute to groundbreaking studies aimed at addressing critical healthcare challenges. I am deeply committed to the scientific method and always seek new opportunities to push the boundaries of knowledge.
        <br />
        <br />
        Through my work, I strive to bridge the gap between research and practical applications, ensuring that my findings can make a tangible impact on healthcare practices and patient outcomes. I am excited to continue my research endeavors and contribute to the ongoing advancement of medicine.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");