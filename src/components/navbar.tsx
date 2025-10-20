"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

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
          className="py-4 px-8 flex justify-between items-center fixed top-0 w-full"
        >
          <h1 className="font-bold">404-TECH</h1>

          <div className="py-2 px-4 rounded-4xl bg-gray-300">menu</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
