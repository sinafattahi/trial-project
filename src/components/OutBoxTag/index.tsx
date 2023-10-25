import React from "react";
import { TYPE_OF_INVEST } from "constants/fundList";

const classNames = require("classnames");
interface OutBoxTagProps {
  fundTypeCode: 1 | 2;
  fundTypeTitle: string;
}

export const OutBoxTag = ({ fundTypeCode, fundTypeTitle }: OutBoxTagProps) => {
  const outBoxClass = classNames(
    "absolute top-10 right-[-16px] md:top-12 px-4 text-white text-sm",
    {
      "bg-purple-500": fundTypeCode === 1,
      "bg-blue-500": fundTypeCode === 2,
    }
  );

  return (
    <div className={outBoxClass}>
      {`${TYPE_OF_INVEST[fundTypeCode]}-${fundTypeTitle}`}

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
