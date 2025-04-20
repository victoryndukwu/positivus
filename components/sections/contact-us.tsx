import React from "react";
import SectionTitle from "./section-title";
import ContactUsForm from "../forms/contact-us-form";
import Image from "next/image";

function ContactUs() {
  return (
    <section className="w-full flex flex-col gap-20 mb-[140px]">
      <SectionTitle
        title={"Contact Us"}
        description={
          "Connect with Us: Let's Discuss Your Digital Marketing Needs"
        }
      />
      <div className="flex bg-[#F3F3F3] rounded-[45px] pl-25 pt-[60px] pb-[80px] gap-10">
        <div className="w-3/5 ">
          <ContactUsForm />
        </div>
        <div className="  flex">
          <Image
            src={"/contact-us-illustration.svg"}
            width={500}
            height={800}
            alt="contact us illustration"
            className="h-full w-full self-end"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
