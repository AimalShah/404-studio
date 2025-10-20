"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  const leftBarAnim = {
    close: {
      y: 0,
      rotate: 0,
    },
    open: {
      y: 5,
      rotate: 45,
    },
  };
  const rightBarAnim = {
    close: {
      y: 0,
      rotate: 0,
    },
    open: {
      y: -5,
      rotate: -45,
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3500);
    return () => clearInterval(timer);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            y: -80,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
            },
          }}
          className="py-4 px-8 flex justify-between items-center fixed top-0 w-full z-50"
        >
          <div className="w-fit p-1 bg-white/50 rounded-2xl shadow-2xl cursor-pointer">
            <h1 className="font-bold flex gap-2 items-center bg-white rounded-2xl p-2">
              <svg
                width="30"
                height="30"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 0C17.9086 0 1.85399e-05 17.9252 0 40.0371C0 43.892 0.546654 47.6189 1.5625 51.1465C1.93487 50.9809 2.34647 50.8868 2.78027 50.8867H27C30.866 50.8867 34 47.7527 34 43.8867V18.9434C34 15.7021 36.6278 13.0742 39.8691 13.0742C41.8868 13.0743 43.7628 14.1113 44.8369 15.8193L63.9209 46.166C66.8523 50.8275 63.5026 56.8923 57.9961 56.8926H50.1113C46.2454 56.8926 43.1114 60.0267 43.1113 63.8926V78.584C43.1113 79.0665 43.0355 79.5313 42.8965 79.9678C63.6357 78.4822 80 61.174 80 40.0371C80 17.9252 62.0914 0 40 0ZM3.70996 56.8926C9.27789 68.8824 20.5995 77.651 34.126 79.6436C34.0449 79.3034 34 78.9489 34 78.584V63.8926C33.9999 60.0267 30.8659 56.8926 27 56.8926H3.70996Z"
                  fill="black"
                />
              </svg>
              <span>404TECH</span>
            </h1>
          </div>

          <button
            onClick={() => setMenuToggle(!menuToggle)}
            className="py-4 cursor-pointer size-12 px-4 rounded-4xl bg-white grid  gap-1 place-items-center"
          >
            <motion.div
              variants={leftBarAnim}
              initial="close"
              animate={menuToggle ? "open" : "close"}
              className="w-4 h-[2px] bg-black"
            />
            <motion.div
              variants={rightBarAnim}
              initial="close"
              animate={menuToggle ? "open" : "close"}
              className="w-4 h-[2px] bg-black"
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
