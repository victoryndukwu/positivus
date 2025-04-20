import React from "react";
import BaseInput from "../inputs/baseInput";
import BaseTextArea from "../inputs/baseTextArea";
import Button from "../button/button";

function ContactUsForm() {
  return (
    <form className=" w-full flex flex-col gap-5">
      <BaseInput label="Name" placeholder="Name"/>
      <BaseInput label="Email" placeholder="Email"/>
      <BaseTextArea label="Message" placeholder="Message"/>
      <Button className="mt-[20px]">Send Message</Button>
    </form>
  );
}

export default ContactUsForm;
