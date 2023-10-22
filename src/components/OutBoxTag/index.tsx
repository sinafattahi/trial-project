import React from "react";

interface outBoxTagProps {
  outBoxTagColor: string;
  outBoxText: string;
}

const OutBoxTag = ({ outBoxTagColor, outBoxText }: outBoxTagProps) => {

  const colorClass = `bg-${outBoxTagColor}-500`

  return (
    <div
      className={`${colorClass} absolute top-10 right-[-16px] md:top-12 px-4 text-white text-sm`}
    >
      {outBoxText}

      <div
        className="w-0 h-0 absolute top-0 left-0 ml-[-1px]
                      border-t-[11px] border-t-transparent
                      border-l-[10px] border-l-white
                      border-b-[11px] border-b-transparent"
      ></div>
      <div
        className="w-0 h-0  absolute b-0 border-transparent right-0
                        border-t-[8px] border-l-transparent
                        border-r-[8px] border-t-gray-700
                       "
      ></div>
    </div>
  );
};

export default OutBoxTag;
