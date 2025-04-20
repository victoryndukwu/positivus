import React from "react";

interface IBaseInputProps {
  label: string;
  placeholder: string;
}

function BaseInput({ label, placeholder }: IBaseInputProps) {
  return (
    <div className="flex gap-[5px] flex-col">
      <label>{label}</label>
      <input
        className="h-[59px] rounded-[14px] border bg-white pl-[30px]"
        placeholder={placeholder}
      />
    </div>
  );
}

export default BaseInput;
