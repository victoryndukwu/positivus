import React from "react";
import Image from "next/image";
import Button from "./button/button";
import { Menu } from "lucide-react";
import { navItems } from "@/utils/data";

function Navbar() {
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
        <div>
          <ul className="md:flex gap-4 hidden">
            {navItems.map((item) => (
              <li key={item} className="text-[20px]">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex gap-4">
          <Button variant="outline">Request a quote</Button>
        </div>

        <div className="md:hidden">
          <Menu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
