import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_yelggji",
        "template_a0rp9xj",
        {
          from_name: form.name, // Corrected key
          to_name: "Aymen Jundi",
          from_email: form.email,
          to_email: "aymenjundi11@gmail.com",
          message: form.message,
        },
        "LVywTz8YEPON3mC4E"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for reaching out! I'll get back to you soon.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden justify-center items-center"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#1746ff] p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText} text-white`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-white`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="mb-4 text-white font-medium">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-white py-4 px-6 placeholder:text-secondary text-[#1746ff] rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-4 text-white font-medium">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-white py-4 px-6 placeholder:text-secondary text-[#1746ff] rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-4 text-white font-medium">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-white py-4 px-6 placeholder:text-secondary text-[#1746ff] rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-white py-3 px-8 outline-none w-fit text-[#1746ff] font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="">
        {/* <EarthCanvas /> */}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");