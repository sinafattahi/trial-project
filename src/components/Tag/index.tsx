import React from "react";

const classNames = require("classnames");
interface TagProps {
  revenue: number;
  text?: string;
}



export const Tag = ({ revenue, text }: TagProps) => {

  const tagClass = classNames(
    "flex flex-col text-white p-2 rounded-md text-xs",
    {
    "bg-green-500" : revenue >= 0,
    "bg-red-500" : revenue < 0
  })

  return (
    <div className={tagClass}>
      <h1 className="flex justify-center">{Math.abs(revenue)}%</h1>

      <h1 className="font-thin flex justify-center">{text}</h1>
    </div>
  );
};
