import { useRef, useState } from "react";
import { Blocks } from "lucide-react";
import { motion } from "motion/react";

export default function SideCard({
  className,
  color,
  text,
  constraintsRef,
}: {
  className: string;
  color: string;
  text: string;
  constraintsRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [isDragging, setIsDragging] = useState(false);
  return (
    <motion.div
    initial={{
        filter : "blur(10px)"
    }}
    whileInView={{
        filter : "blur(0px)",
        transition : {
            delay : 0.5,
            duration : 1
        }
    }}
    viewport={{
        once : true
    }}
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.1} 
      onDragStart={() => setIsDragging(true)}
      onDragEnd={(event, info) => {
        setIsDragging(false);
      }}
      animate={
        !isDragging
          ? {
              x: 0,
              y: 0,
               transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
              },
            }
          : {}
      }
      className={`w-fit p-2 bg-gray-400/25 rounded-full shadow-2xl ${className} cursor-grab`}
    >
      <div className="bg-white p-2 rounded-full flex items-center gap-2">
        <div
          style={{
            backgroundColor: color,
          }}
          className={`p-[6px] rounded-full w-fit`}
        >
          <Blocks className="text-white size-4  " />
        </div>
        <p>{text}</p>
      </div>
    </motion.div>
  );
}
