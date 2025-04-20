import React from "react";
import Image from "next/image";
import { currentYear, navItems } from "@/utils/data";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Divider from "./divider";

function Footer() {
  return (
    <footer className="container">
      <div className=" p-[60px] rounded-t-[45px] bg-[#191A23] text-white">
        <div className="flex items-center justify-between">
          <Image
            src={"logo-white.svg"}
            alt="positivus logo"
            width={180}
            height={29}
          />
          <div>
            <ul className="md:flex gap-4 hidden">
              {navItems.map((item) => (
                <li key={item} className="text-[20px]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-5">
            <Linkedin className="size-[30px]" />{" "}
            <Facebook className="size-[30px]" />{" "}
            <Twitter className="size-[30px]" />{" "}
          </div>
        </div>
        <div className="mt-10">
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
        </div>
        <Divider className="my-[50px]" />
        <p className="text-sm">
          © {currentYear} Positivus. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
