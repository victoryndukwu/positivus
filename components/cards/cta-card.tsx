import React from "react";
import Button from "../button/button";
import Image from "next/image";

function CTACard() {
  return (
    <div className="flex justify-between items-center rounded-[45px] bg-[#F3F3F3] p-[60px] h-[347px] w-[90vw] md:w-full">
      <div className="flex flex-col gap-[26px]">
        <p className="text-[20px] md:text-[30px] font-semibold">
          Let’s make things happen
        </p>
        <p className="md:w-1/2 ">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <div className="md:w-1/2">
          <Button>Get your free proposal</Button>
        </div>
      </div>
      <Image
        src="/cta-card-illustration.svg"
        width={359}
        height={394}
        alt="call to action illustration"
        className="hidden md:block"
      />
    </div>
  );
}

export default CTACard;
