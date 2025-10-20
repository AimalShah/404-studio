"use client";


import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Paragraph({ paragraph }: { paragraph: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");
  console.log(words)
  return (
    <motion.p
      ref={container}
      style={{ opacity: scrollYProgress }}
      className="mx-auto font-primary flex text-3xl text-center leading-[0.8] py-[40px] md:max-w-[100%] lg:max-w-[90%] xl:maw-w-[60%] sm:max-w-full text-black flex-wrap break-words tracking-wide justify-center"
    >
      {words.map((word: string, i: number) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </motion.p>
  );
}

function Word({ children, progress, range } : {children : string; progress :MotionValue<number>; range : number[]; }) {
  const opacity = useTransform(progress, range, [0, 1]);
  return <span className="relative mr-[8px] mt-[11px]">
    <span className="absolute opacity-[20%]">{children}</span>
    <motion.span style={{opacity : opacity}}>{children}</motion.span>
  </span>;
}