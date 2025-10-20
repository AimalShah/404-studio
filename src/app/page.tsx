"use client";

import HeroText from "@/components/text";
import { BriefcaseBusiness, MoveRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center"
          >
            <h1 className="text-xl mb-6">404Tech - Creative Studio</h1>
            <motion.div
              key="loading-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-[2px] bg-black origin-left rounded-full w-[70%]"
            />
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
            <div className="mt-32">
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
                  className="flex items-center gap-4 bg-white py-2 px-4 rounded-4xl w-fit"
                >
                  <div className="size-2 rounded-full bg-green-500"></div>
                  <p className="">Avaliable for work</p>
                </motion.div>
              </div>

              <h1 className="flex gap-4">
                <HeroText text="Brands" type="black" />
                <HeroImage
                  rotate={-10}
                  src="https://i.pinimg.com/1200x/1f/ef/f3/1feff3400ea8e4eee54706652f58aa23.jpg"
                />
                <HeroText text="Grow" type="gray" />
                <HeroText text="Fast" type="gray" />
              </h1>
              <h1 className="flex gap-4 mt-4 justify-center">
                <HeroImage
                  rotate={10}
                  src="https://i.pinimg.com/736x/64/fb/22/64fb22dfd72155bbe0a8859ebe84dc01.jpg"
                />
                <HeroText text="With" type="black-thin" />
                <HeroText text="us" type="black-thin" />
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
                <p className="w-[60%] text-center text-gray-600 ">
                  We don’t just make Brands pretty — we craft smart design that
                  fuels real business growth.
                </p>
              </motion.div>

              <div className="flex justify-center mt-6">
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
                  className="w-fit p-2 bg-white rounded-4xl hover:scale-110 cursor-pointer"
                >
                  <button className="text-white bg-black p-4 rounded-4xl shadow-2xl flex items-center gap-4 relative">
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

      <div className="h-screen w-full grid place-items-center py-6 mt-12">
        <div className="w-4xl h-full bg-black rounded-4xl grid place-items-center">
          <div className="size-24 rounded-full bg-white/80 grid place-items-center before:content-['see recent work'] relative ">
          <div className="w-42 absolute bg-white/75 top-[-50] p-2 rounded-full text-center rotate-12 translate-x-6">see recent work</div>
            <BriefcaseBusiness  className="size-14"/>
          </div>
        </div>
      </div>

      <div className="mt-48 h-screen">
        <div className="relative flex items-center gap-2 justify-center">
          <div
            className="w-[69px] h-[1px]"
            style={{
              background:
                "linear-gradient(90deg, #54545400 0%, #00000080, #00000080 100%)",
            }}
          ></div>
          <h1 className="italic text-[#545454] text-lg">Hello</h1>
          <div
            className="w-[69px] h-[1px]"
            style={{
              background:"linear-gradient(270deg, #54545400 0%, #00000080, #00000080 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function HeroImage({ src, rotate }: { src: string; rotate: number }) {
  return (
    <motion.img
      initial={{
        y: -50,
        rotate: -50,
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
      src={src}
      style={{
        transform: `rotate(${rotate})`,
      }}
      className="w-24 h-16 rounded-2xl border-2 hover:scale-95"
    />
  );
}
