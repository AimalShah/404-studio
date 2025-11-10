"use client";

import Intro, { Heading } from "@/components/services/intro";
import HeroText from "@/components/text";
import { BriefcaseBusiness, MoveRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { desc } from "motion/react-client";
import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    id: 1,
    title: "Discover",
    desc: "We uncover what drives your brand through purpose clarity audience insight and business focus.",
  },
  {
    id: 2,
    title: "Request",
    desc: "We analyze your market understand your competitors and identify where you can stand out.",
  },
  {
    id: 3,
    title: "Create",
    desc: "We design a distinct identity using voice visuals and story to build emotional connection",
  },
  {
    id: 4,
    title: "Activate",
    desc: "We launch your brand across all channels creating a consistent experience that grows with you.",
  },
 
  
];

export default function Home() {
  const [visible, setVisible] = useState(true);
  const [heroContent, setHeroContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setHeroContent(true);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="min-h-screen m-0 relative">
      <AnimatePresence>
        {visible && (
          <motion.div
            exit={{
              opacity: 0,
            }}
            className="h-screen fixed z-50 w-full"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center w-full text-center">
              <h1 className="lg:text-xl  mb-6 w-full">404Tech - Creative Studio</h1>
              <motion.div
                key="loading-line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="h-[2px] bg-black origin-left rounded-full w-[70%]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="h-screen flex fixed top-0 z-40 gap-0"
        animate={{
          height: "0px",
          transition: {
            delay: 3,
          },
        }}
      >
        {[...Array(12).keys()].map((_, index) => (
          <motion.div
            key={index}
            initial={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }}
            animate={{
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
              transition: {
                delay: 1 + index * 0.1,
                ease: "easeInOut",
              },
            }}
            className="h-full bg-[#F5E901] w-[11vw] p-0 ml-[-10px]"
          />
        ))}
      </motion.div>

      {/* starting-hero-div */}
      <div className="h-screen grid place-items-center">
        {/* starting-hero-div */}
        <AnimatePresence>
          {heroContent && (
            <div className="lg:mt-32 md:mt-32 mt-18">
              <div className="flex justify-center mb-6">
                <motion.div
                  exit={{
                    opacity: 0,
                  }}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 2.5,
                      duration: 1,
                    },
                  }}
                  className="flex items-center gap-4 bg-white py-2 px-4 rounded-4xl w-fit mb-8"
                >
                  <div className="size-2 rounded-full bg-green-500"></div>
                  <p className="">Avaliable for work</p>
                </motion.div>
              </div>

              <h1 className="flex gap-4 justify-center">
                <HeroText text="Brands" type="black" />
                <HeroImage
                  rotate={-3}
                  src="https://i.pinimg.com/1200x/1f/ef/f3/1feff3400ea8e4eee54706652f58aa23.jpg"
                />
                <div className="hidden md:block lg:block">
                  <HeroText text="Grow" type="gray" />
                </div>
              </h1>
              <h1 className="flex gap-2 md:gap-3 lg:gap-4 lg:mt-4 md:mt-4 mt-2 justify-center">
                <div className="block md:hidden lg:hidden">
                  <HeroText text="Grow" type="gray" />
                </div>
                <HeroText text="Fast" type="gray" />
                <HeroImage
                  rotate={3}
                  src="https://i.pinimg.com/1200x/1f/ef/f3/1feff3400ea8e4eee54706652f58aa23.jpg"
                />
                <div className="hidden md:block lg:block">
                  <HeroText text="With" type="black-thin" />
                  <HeroText text="us" type="black-thin" />
                </div>
              </h1>
              <h1 className="flex gap-2 md:gap-3 lg:gap-4 lg:mt-4 md:mt-4 mt-2 justify-center">
                <div className="block md:hidden lg:hidden">
                  <HeroText text="With" type="black-thin" />
                </div>
                <div className="block md:hidden lg:hidden">
                  <HeroText text="us" type="black-thin" />
                </div>
              </h1>

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    ease: "linear",
                    delay: 2.2,
                    duration: 1,
                  },
                }}
                className="flex justify-center mt-[36px]"
              >
                <p className="lg:w-[60%] md:w-[60%] text-center lg:text-center md:text-center text-gray-600 ">
                  We don’t just make Brands pretty — we craft smart design that
                  fuels real business growth.
                </p>
              </motion.div>

              <div className="flex justify-center mt-6 px-4">
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                    transition: {
                      ease: "linear",
                      delay: 2.2,
                      duration: 1,
                    },
                  }}
                  className="lg:w-fit md:w-fit p-2 bg-white rounded-4xl hover:scale-110 cursor-pointer w-full"
                >
                  <button className="text-white bg-black p-4 rounded-4xl shadow-2xl flex items-center gap-4 relative lg:text-xl w-full justify-center">
                    Book a Meeting
                    <MoveRight className="font-thin" />
                  </button>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>
        {/* end-hero-div */}
      </div>
      {/* end-hero-div */}

      {/* VIDEO SECTION */}
      <div className="h-screen w-full grid place-items-center py-6 mt-12 overflow-clip px-4 lg:px-0 md:px-0">
        <div className="w-full h-full bg-black rounded-4xl grid place-items-center">
          <div className="size-24 rounded-full bg-white/80 grid place-items-center before:content-['see recent work'] relative ">
            <div className="w-42 absolute bg-white/75 top-[-50] p-2 rounded-full text-center rotate-12 translate-x-6">
              see recent work
            </div>
            <BriefcaseBusiness className="size-14" />
          </div>
        </div>
      </div>

      <Intro />

      <div className="w-full">
        <Heading text="Our Process, Explained" />
        <div className="w-full">
          <h1 className="text-2xl text-center mt-2 font-medium">Here's how it works</h1>
          <div className="w-full px-4 mt-8 flex flex-col lg:flex-row md:flex-row lg:gap-4">
            {
              STEPS.map((item,index)=> (
                <Card
                number={item.id}
                title={item.title}
                description={item.desc}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="w-full bg-gray-400/20 p-2 rounded-2xl mb-4">
      <div className="w-full bg-white h-full rounded-2xl py-2 px-6 shadow-2xl flex flex-col gap-4">
        <span className="text-4xl font-semibold">{number}</span>
        <span className="text-xl font-semibold">{title}</span>
        <p className="font-light text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function HeroImage({ src, rotate }: { src: string; rotate: number }) {
  return (
    <motion.div
      initial={{
        y: -50,
        rotate: -40,
        scale: 2,
      }}
      animate={{
        y: 0,
        rotate: rotate,
        scale: 1,
      }}
      transition={{
        delay: 0.6,
        ease: "linear",
        duration: 0.5, // optional, controls speed
      }}
      style={{
        transform: `rotate(${rotate})`,
      }}
      className="overflow-hidden lg:w-[144px] md:w-[144px] w-[58px] lg:h-auto h-[40px] lg:rounded-[36px] md:rounded-[36px] rounded-[12px] border-2  bg-black p-0 shadow-[15px_28px_15px_4px_rgba(0,_0,_0,_0.1)]"
    >
      <img src={src} />
    </motion.div>
  );
}
