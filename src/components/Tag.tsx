import React from "react";

interface tagProps {
  revenue: number;
  text: string;
}

function Tag({ revenue, text }: tagProps) {
  const color: string = revenue >= 0 ? "bg-green-500" : "bg-red-500";
  return (
    <div className={`${color} flex flex-col text-white px-2 rounded-sm`}>
      <h1 className="flex justify-center">{revenue}%</h1>

      <h1 className="font-thin flex justify-center">{text}</h1>
    </div>
  );
}

export default Tag;
