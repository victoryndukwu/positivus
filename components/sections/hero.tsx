"use client";
import React from "react";
import Image from "next/image";
import Button from "../button/button";
import { motion } from "motion/react";

function Hero() {
  const h2Variants = {
    initial: { y: 10, opacity: 0 },
    animate: { scale: 1, y: 0, transition: { duration: 1 }, opacity: 1 },
  };
  const paragraphVariants = {
    initial: { y: 10, opacity: 0 },
    animate: {
      scale: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 },
      opacity: 1,
    },
  };
  const buttonhVariants = {
    initial: { y: 10, opacity: 0 },
    animate: {
      scale: 1,
      y: 0,
      transition: { duration: 1, delay: 1 },
      opacity: 1,
    },
  };
  const imageVariants = {
    initial: { y: 10, opacity: 0 },
    animate: {
      scale: 1,
      y: 0,
      transition: { duration: 1, delay: 1.5 },
      opacity: 1,
    },
  };

  return (
    <section className="flex justify-between items-start gap-2 w-full">
      <div className="w-1/2 h-full pr-20 flex flex-col gap-[35px]">
        <motion.h2
          className="text-[60px]"
          variants={h2Variants}
          initial="initial"
          animate="animate"
        >
          Navigating the digital landscape for success
        </motion.h2>
        <motion.p
          className="text-[20px]"
          variants={paragraphVariants}
          initial="initial"
          animate="animate"
        >
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </motion.p>
        <motion.div
          className="w-full"
          variants={buttonhVariants}
          initial="initial"
          animate="animate"
        >
          <Button variant="primary" className="w-[276px]">
            Book a consultation
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="w-1/2 grid place-items-center"
        variants={imageVariants}
        initial="initial"
        animate="animate"
      >
        <Image
          src="/hero_Illustration.svg"
          alt="hero section illustration"
          width={600}
          height={515}
        />
      </motion.div>
    </section>
  );
}

export default Hero;
