"use client"

import { motion, Variants } from "framer-motion";

export default function HeroText({ text , type }: { text: string; type : "black" | "gray" | "black-thin" }) {
  const container : Variants = {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 1.5,
      },
    },
  };


  const letter : Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.4 },
    },
  };

 

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className="inline-block overflow-hidden"
    >
      {text.split("").map((letterChar, index) => (
        <motion.span key={index} variants={letter} className={`inline-block text-7xl ${type === "black" && "font-extrabold"} ${type === "gray" && "text-gray-400"} ${type === "black-thin" && "font-semibold"}`}>
          {letterChar === " " ? "\u00A0" : letterChar}
        </motion.span>
      ))}
    </motion.span>
  );
}
