import React from "react";
import { TeamMember } from "@/utils/types";
import Image from "next/image";
import Divider from "../divider";

function TeamCard({ name, position, image, description }: TeamMember) {
  return (
    <div className="flex flex-col border-black border rounded-[30px] p-10 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.1)]">
      <div className="flex items-end justify-start gap-5">
        <Image src={`${image}.svg`} alt="alt" width={98} height={98} />
        <div>
          <p className="font-medium">{name}</p>
          <p>{position}</p>
        </div>
        <div></div>
      </div>

      <Divider className="w-full h-[1px] my-7" color="#000000" />

      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TeamCard;
