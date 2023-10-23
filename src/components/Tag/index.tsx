import React from "react";

interface TagProps {
  revenue: number;
  text?: string;
}

export const Tag = ({ revenue, text }: TagProps) => {
  const color: string = revenue >= 0 ? "bg-green-500" : "bg-red-500";
  return (
    <div className={`${color} flex flex-col text-white p-2 rounded-md text-xs`}>
      <h1 className="flex justify-center">{Math.abs(revenue)}%</h1>

      <h1 className="font-thin flex justify-center">{text}</h1>
    </div>
  );
};
