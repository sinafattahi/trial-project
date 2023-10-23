import React from "react";
import { Svg } from "components/Svg";

interface AssetsProps {
  propertyValue: number;
  profit: number;
  profitPercentage: number;
}

export const AssetsComponent = ({
  propertyValue,
  profit,
  profitPercentage,
}: AssetsProps) => {
  return (
    <div className="bg-blue-400 p-3 rounded-md m-2 text-white">
      <div className="my-2 flex justify-between">
        <span>ارزش دارایی:</span>
        <span>
          {new Intl.NumberFormat().format(propertyValue!)}{" "}
          <span className="text-xs">ریال</span>
        </span>
      </div>
      <div className="my-2 flex justify-between text-sm">
        <span>سود:</span>
        <div className="flex">
          <span>
            ({profitPercentage}%)
            {new Intl.NumberFormat().format(profit)}
            <span className="text-xs">ریال</span>
          </span>
          {profitPercentage! >= 0 ? <Svg name="up" /> : <Svg name="down" />}
        </div>
      </div>
    </div>
  );
};
