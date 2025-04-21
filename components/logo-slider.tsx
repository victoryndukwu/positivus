"use client";
import React from "react";
import Image from "next/image";
import { logos } from "@/utils/data";
import { motion } from "framer-motion";

function LogoSlider() {
  return (
    <motion.div
      animate={{
        x: "-90%",
      }}
      transition={{
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      }}
      className="flex md:gap-24 gap-10 w-full justify-center overflow-hidden flex-none pr-24"
    >
      {logos.map((logo, idx) => (
        <Image
          src={`${logo}.svg`}
          height={48}
          width={111}
          alt={logo}
          key={idx}
        />
      ))}
    </motion.div>
  );
}

export default LogoSlider;
