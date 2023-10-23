import React from "react";
import { CardDataMode } from "types/FundList";
import { Tag } from "components/Tag";
import { OutBoxTag } from "components/OutBoxTag";
import { Button } from "components/Button";
import { AssetsComponent } from "components/AssetsComponent";
import { PriceSection } from "components/PriceSection";

export const Card = ({
  id,
  name,
  revenue,
  isAsset,
  buyPrice,
  salePrice,
  outBoxText,
  outBoxTagColor,
  propertyValue = 0,
  profit = 0,
  profitPercentage = 0,
}: CardDataMode) => {
  return (
    <div className="border-2 p-2 m-2 shadow-xl rounded-md md:w-2/5 md:-translate-x-[73%]">
      <div className="flex justify-between p-1 relative">
        <span>{name}</span>
        <Tag revenue={revenue} text="بازده سال" />
        <OutBoxTag outBoxTagColor={outBoxTagColor} outBoxText={outBoxText} />
      </div>
      <div className="p-2 m-2">
        <PriceSection price={buyPrice} text="قیمت خرید هر واحد" unit="ریال" />
        <PriceSection price={salePrice} text="قیمت فروش هر واحد" unit="ریال" />
      </div>
      {isAsset ? (
        <AssetsComponent
          profit={profit}
          profitPercentage={profitPercentage}
          propertyValue={propertyValue}
        />
      ) : (
        <></>
      )}
      {isAsset ? (
        <div className="m-2 flex gap-2">
          <Button color="green" disable={false} mode="outLine">
            خرید
          </Button>
          <Button color="red" disable={false} mode="outLine">
            فروش
          </Button>
        </div>
      ) : (
        <div className="m-2">
          <Button disable={false} mode="outLine" color="green">
            خرید
          </Button>
        </div>
      )}
    </div>
  );
};
