"use client";
import { cn } from "@/utils";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion"; // <-- make sure it's "framer-motion", not "motion/react"

const buttonVariants = {
  base:
    "py-5 px-[35px] rounded-[14px] font-normal cursor-pointer text-base md:text-[20px] transition-all duration-100",
  variants: {
    primary: "bg-[#b9ff66] text-black ",
    black: "bg-[#191a23] text-white",
    outline: "border border-[#191a23] bg-white text-[#191a23]",
  },
};

type Variant = keyof typeof buttonVariants.variants;

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = "black", ...props }, ref) => {
    return (
      <motion.button
        className={cn(
          buttonVariants.base,
          buttonVariants.variants[variant],
          className
        )}
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
