import React from "react";
import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Tag from "./Tag";

import { FundListCardData } from "../data/FundListCardData";

function FundList() {
  return (
    <div>
      <Header text="صندوق‌های سرمایه گذاری آگاه" />
      <div className="md:grid grid-cols-2 gap-2">
        {FundListCardData.map((i) => (
          <Card key={i.id} {...i} />
        ))}
      </div>
    </div>
  );
}

export default FundList;
