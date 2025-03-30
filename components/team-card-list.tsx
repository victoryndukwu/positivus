import React from "react";
import TeamCard from "./cards/team-card";
import { teamMembers } from "@/utils/data";

function Teamcardlist() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-2 gap-10 ">
      {teamMembers.map((member, idx) => (
        <TeamCard
          name={member.name}
          position={member.position}
          image={member.image}
          description={member.description}
          key={idx}
        />
      ))}
    </div>
  );
}

export default Teamcardlist;
