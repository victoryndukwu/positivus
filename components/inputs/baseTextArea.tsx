import React from "react";

interface IBaseTextAreaProps {
  label: string;
  placeholder: string;
}

function BaseTextArea({ label, placeholder }: IBaseTextAreaProps) {
  return (
    <div className="flex gap-[5px] flex-col">
      <label htmlFor="">{label}</label>
      <textarea
        name=""
        id=""
        className="rounded-[14px] border bg-white h-[196px] pl-[30px] pt-[18px]"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

export default BaseTextArea;
