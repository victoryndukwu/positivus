import React from "react";
import Button from "../button/button";
import Image from "next/image";

function Hero() {
  return (
    <section className="flex justify-between items-start gap-2 w-full">
      <div className="w-1/2 h-full pr-20 flex flex-col gap-[35px]">
        <h2 className="text-[60px]">
          Navigating the digital landscape for success
        </h2>
        <p className="text-[20px]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <div className="w-full">
          <Button variant="primary" className="w-[276px]">
            Book a consultation
          </Button>
        </div>
      </div>
      <div className="w-1/2 grid place-items-center">
        <Image
          src="/hero_Illustration.svg"
          alt="hero section illustration"
          width={600}
          height={515}
        />
      </div>
    </section>
  );
}

export default Hero;
