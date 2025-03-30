import { cn } from "@/utils";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import Image from "next/image";

const servicesCardVariants = {
  base: "p-[30px] rounded-[45px] border border-black h-[250px] md:h-[300px] flex justify-between ",
  variants: {
    primary: "bg-[#b9ff66] ",
    dark: "bg-[#191a23] ",
    light: "",
  },
};

const serviceTitleVariants = {
  base: "md:text-[25px] md:w-[221px] w-[160px] text-base",
  variants: {
    primary: "bg-white ",
    dark: "bg-white ",
    light: "bg-[#b9ff66]",
  },
};

const learnMoreTextVariants = {
  base: "text-base",
  variants: {
    primary: "text-black ",
    dark: "text-white ",
    light: "text-black",
  },
};

const arrowVariants = {
  base: "rounded-full",
  variants: {
    primary: "bg-black ",
    dark: "bg-white ",
    light: "bg-black",
  },
};

const arrowBGVariants = {
  base: "size-10 rounded-full grid place-items-center",
  variants: {
    primary: "text-[#b9ff66] ",
    dark: "text-black ",
    light: "text-[#b9ff66]",
  },
};

type Variants = keyof typeof servicesCardVariants.variants;

interface IServicesCardProps {
  title: string;
  variant: Variants;
  image: string;
}

function ServicesCard({
  title,
  variant = "primary",
  image,
}: IServicesCardProps) {
  return (
    <div
      className={cn(
        servicesCardVariants.base,
        servicesCardVariants.variants[variant]
      )}
    >
      <div className="flex flex-col justify-between">
        <div className="flex">
          <p
            className={cn(
              serviceTitleVariants.base,
              serviceTitleVariants.variants[variant]
            )}
          >
            {title}
          </p>
        </div>
        <div className="flex items-center ">
          <div
            className={cn(
              arrowBGVariants.base,
              arrowBGVariants.variants[variant]
            )}
          >
            <ArrowUpRight
              className={cn(
                arrowVariants.base,
                arrowVariants.variants[variant]
              )}
            />
          </div>
          <p
            className={cn(
              learnMoreTextVariants.base,
              learnMoreTextVariants.variants[variant]
            )}
          >
            Learn more
          </p>
        </div>
      </div>
      <Image
        src={`/${image}.svg`}
        alt={title}
        width={195}
        height={210}
        className="hidden md:block"
      />
      <Image
        src={`/${image}.svg`}
        alt={title}
        width={125}
        height={140}
        className=" block md:hidden"
      />
    </div>
  );
}

export default ServicesCard;