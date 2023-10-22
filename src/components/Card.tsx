import React from "react";
import { cardDataMode } from "../data/FundListCardData";
import Tag from "./Tag";
import OutBoxTag from "./OutBoxTag";
import Button from "./Botton";

function Card({
  id,
  name,
  revenue,
  isAsset,
  buyPrice,
  salePrice,
  outBoxText,
  outBoxTagColor,
  propertyValue,
  profit,
  profitPercentage,
}: cardDataMode) {
  return (
    <div className="border-2 p-2 m-2 shadow-xl rounded-md">
      <div className="flex justify-between p-1 relative">
        <span>{name}</span>
        <Tag revenue={revenue} text="بازده سال" />
        <OutBoxTag outBoxTagColor={outBoxTagColor} outBoxText={outBoxText} />
      </div>
      <div className="p-2 m-2">
        <div className="m-2 flex justify-between text-sm">
          <span>قیمت خرید هر واحد:</span>
          <span>
            {buyPrice} <span className="text-xs">ریال</span>
          </span>
        </div>
        <div className="m-2 flex justify-between text-sm">
          <span>قیمت فروش هر واحد:</span>
          <span>
            {salePrice} <span className="text-xs">ریال</span>
          </span>
        </div>
      </div>

      {isAsset ? (
        <div>
          <div className="bg-blue-400 p-3 rounded-md m-2 text-white">
            <div className="my-2 flex justify-between">
              <span>ارزش دارایی:</span>
              <span>
                {propertyValue} <span className="text-xs">ریال</span>
              </span>
            </div>
            <div className="my-2 flex justify-between text-sm">
              <span>سود:</span>
              <span>
                ({profitPercentage}%)
                {profit}
                <span className="text-xs">ریال</span>
              </span>
            </div>
          </div>
          <div className="m-2 flex gap-2">
            <Button color="green" label="خرید" />
            <Button color="red" label="فروش" />
          </div>
        </div>
      ) : (
        <div className="m-2">
          <Button color="green" label="خرید" />
        </div>
      )}
    </div>
  );
}

export default Card;
