"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

interface ImagePreviewProps {
  active: boolean;
}

function ImagePreview({ active }: ImagePreviewProps) {
  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);

  return (
    <>
      <motion.div
        className="pointer-events-none absolute flex h-[350px] w-[400px] items-center justify-center overflow-hidden bg-white"
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        <div
          className="absolute h-full w-full"
          style={{
            top: 1 * -100 + "%",
            transition: "top 0.6s cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        >
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ backgroundColor: "#cf7934" }}
          >
            {/* <Image
              className="h-auto"
              src={`/static/images/project/asa`}
              width={300}
              height={300}
              alt="image"
            /> */}
            <div className="h-[300px] w-[300px] bg-blue-500" />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="font-base pointer-events-none absolute z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 font-light text-white"
        ref={cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>
      <motion.div
        className="font-base pointer-events-none absolute z-10 flex h-16 w-16 items-center justify-center rounded-full bg-transparent font-light text-white"
        ref={cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  );
}

export default ImagePreview;
