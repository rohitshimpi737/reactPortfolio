import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import { ReactTyped } from "react-typed";

const Header = ({ isDarkMode }) => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.profile_img1} alt="" className="rounded-full w-32" />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Rohit Shimpi
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo text-center"
      >
        I'm a&nbsp;
        <br />
        <ReactTyped
          className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo text-blue-500"
          strings={[
            "Full Stack Developer",
            "Java Spring Boot Developer",
            "Backend Developer",
            "MERN Stack Developer",
          ]}
          typeSpeed={80} // Smoother typing effect
          backSpeed={40} // Slightly slower backspacing
          startDelay={500} // Delay before first text appears
          backDelay={2000} // Text stays visible for longer before deleting
          loop
          showCursor={true}
          cursorChar="|"
        />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx:auto font-Ovo"
      >
        I design and code beautifully simple things, and I love what I do. I am
        a frontend web developer based in Pune, India. I have a passion for web
        design and love to create for web and mobile devices.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          contact me
          <Image src={assets.right_arrow_white} className="w-4" alt="" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          my resume
          <Image src={assets.download_icon} className="w-4" alt="" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
