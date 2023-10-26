import React from "react";
import { Tag } from "components/Tag";
import { OutBoxTag } from "components/OutBoxTag";
import { Button } from "components/Button";
import { AssetsComponent } from "components/AssetsComponent";
import { PriceSection } from "components/PriceSection";
import { FundData } from "types/FundList";

export const Card = ({
  id,
  name,
  isAsset = false,
  issuingNav,
  revokeNav,
  fundTypeCode,
  fundTypeTitle,
  annualEfficiency,
}: FundData) => {
  return (
    <div className="border-2 p-2 m-2 shadow-xl rounded-md md:w-2/5 md:-translate-x-[73%]">
      <div className="flex justify-between p-1 relative">
        <span>{name}</span>
        <Tag revenue={annualEfficiency} text="بازده سال" />
        <OutBoxTag fundTypeCode={fundTypeCode} fundTypeTitle={fundTypeTitle} />
      </div>
      <div className="p-2 m-2">
        <PriceSection price={issuingNav} text="قیمت خرید هر واحد" unit="ریال" />

        <PriceSection price={revokeNav} text="قیمت فروش هر واحد" unit="ریال" />
      </div>
      {isAsset ? (
        <AssetsComponent profit={0} profitPercentage={0} propertyValue={0} />
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
