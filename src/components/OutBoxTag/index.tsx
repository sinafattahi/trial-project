import React from "react";

var classNames = require("classnames");
interface OutBoxTagProps {
  outBoxTagColor: "blue" | "purple";
  outBoxText: string;
}

export const OutBoxTag = ({ outBoxTagColor, outBoxText }: OutBoxTagProps) => {
  var outBoxClass = classNames(
    "absolute top-10 right-[-16px] md:top-12 px-4 text-white text-sm",
    {
      "bg-blue-500": outBoxTagColor === "blue",
      "bg-purple-500": outBoxTagColor === "purple",
    }
  );

  return (
    <div className={outBoxClass}>
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
