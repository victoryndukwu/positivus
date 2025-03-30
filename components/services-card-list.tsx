import React from "react";
import { services } from "@/utils/data";
import ServicesCard from "./cards/services-card";

function ServicesCardList() {
  return (
    <div className="grid md:grid-cols-2 md:grid-rows-3 gap-4 grid-cols-1 w-[90vw] md:w-full">
      {services.map((service, idx) => (
        <ServicesCard
          key={idx}
          variant={service.variant}
          title={service.title}
          image={service.image}
        />
      ))}
    </div>
  );
}

export default ServicesCardList;
