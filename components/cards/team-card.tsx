import React from "react";
import { TeamMember } from "@/utils/types";
import Image from "next/image";

function TeamCard({ name, position, image, description }: TeamMember) {
  return (
    <div className="flex flex-col border-black border rounded-[30px] p-10">
      <div className="flex">
        <Image src={`${image}.svg`} alt="alt" width={98} height={98} />
        <div>
          <p className="font-medium">{name}</p>
          <p>{position}</p>
        </div>
        <div></div>
      </div>

      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TeamCard;
