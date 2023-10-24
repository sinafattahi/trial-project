import React from "react";

interface PriceSectionProps {
  unit: string;
  text: string;
  price: number;
}

export const PriceSection = ({ unit, text, price }: PriceSectionProps) => {
  return (
    <div className="p-2 flex justify-between text-sm">
      <span>{text}:</span>
      <span>
        {new Intl.NumberFormat().format(price)}{" "}
        <span className="text-xs">{unit}</span>
      </span>
    </div>
  );
};
