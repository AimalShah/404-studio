"use client";

import AccordionSection from "@/components/accordion";
import FounderSection from "@/components/founder-section";
import ProjectCard from "@/components/project-card";
import ProjectSection from "@/components/project-section";
import Intro, { Heading } from "@/components/services/intro";
import ProcessMethod from "@/components/services/process-method";
import HeroText from "@/components/text";
import VideoSection from "@/components/video-section";
import { projects } from "@/utils/projects";
import {
  BriefcaseBusiness,
  InstagramIcon,
  Linkedin,
  MoveRight,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

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
            className="h-screen fixed z-50 w-full hidden lg:block"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 lg:flex flex-col items-center w-full text-center hidden ">
              <h1 className="lg:text-xl  mb-6 w-full">
                404Tech - Creative Studio
              </h1>
              <motion.div
                key="loading-line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="h-[2px] bg-black origin-left rounded-full w-[70%] hidden lg:block"
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
                <p className="lg:w-[60%] md:w-[60%] text-center lg:text-center md:text-center text-gray-600 px-2 lg:px-0">
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

      <VideoSection/>
      <Intro />
      <ProcessMethod />
      <ProjectSection/>
      <FounderSection/>

      <div className="mt-40 min-h-screen">
        <Heading text="FAQ" />
        <h1 className="text-5xl text-center mt-10">
          Your Questions, Answered.
        </h1>

        <div className="lg:w-[85rem] mx-auto grid lg:grid-cols-6 gap-8 mt-20 lg:p-0 px-8">

          <div className="col-span-3 ">
          <div className="bg-[#E3E3E3] p-2 rounded-4xl rotate-[-5deg] ">
            <div className="w-full bg-white rounded-4xl lg:p-12 p-6 space-y-6">
              <div className="flex gap-4">
                <div className="lg:w-fit lg:block w-full justify-center flex items-center">
                  <img
                    src={"pale.jpeg"}
                    className="lg:size-18 w-[72px] h-[72px] rounded-full object-cover"
                  />
                </div>
                <div className="lg:text-2xl font-medium font-poppins">
                  <span className="lg:block">Have more questions?</span>
                  <span>Book a free discovery call</span>
                </div>
              </div>
              <div className="lg:w-full md:w-fit p-2 bg-white rounded-4xl cursor-pointer w-full shadow-[-4px_0px_21px_1px_rgba(0,_0,_0,_0.35)]">
                <button className="text-white bg-black p-4 rounded-4xl shadow-2xl flex items-center gap-4 relative  w-full justify-center cursor-pointer">
                  Book a Meeting
                  <MoveRight className="font-thin" />
                </button>
              </div>
              <div className="text-[#00000088] font-poppins text-center font-medium">
                or, email me at{" "}
                <span className="text-black">amiriqbalkhan001@gmail.com</span>
              </div>
            </div>
          </div>

          </div>
          <div className="col-span-3 lg:mt-0 mt-2 border-t ">
            <AccordionSection/>
          </div>
        </div>
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
