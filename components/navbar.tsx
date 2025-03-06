import React from "react";
import Image from "next/image";

function Navbar() {
  const navItems: string[] = [
    "About Us",
    "Services",
    "Use Cases",
    "Pricing",
    "Blog",
  ];
  return (
    <nav>
      <div className="container flex justify-between items-center py-4">
        <div className="flex gap-2">
          <Image
            src={"logo.svg"}
            alt="positivus logo"
            width={35}
            height={35}
          ></Image>
          <h1 className="text-[40px]">Positivus</h1>
        </div>
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li key={item} className="text-primary">{item}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
