import React from "react";

interface TestimonialProps {
  text: string;
  name: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ text, name, title }) => {
  return (
    <div className="text-white    h-[335px] w-[606px]">
      <div className="border border-[#b9ff66] rounded-[45px] px-[50px] py-12">
        <p className="text-lg font-light ">&quot;{text}&quot;</p>
      </div>
      {/* <div className="absolute bottom-0 left-6 w-6 h-6 border border-l border-[#b9ff66] bg-black rotate-45 translate-y-1/2"></div> */}
      <div className="mt-12 ml-20">
        <p className="text-lime-400 font-bold">{name}</p>
        <p className="text-gray-400">{title}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
