import React from "react";
import {Card} from "components/Card";
import {Header} from "components/Header";

import { FundListCardData } from "constants/FUND_LIST_DATA";
import {Footer} from "components/Footer";

export const FundList = () => {
  return (
    <div>
      <Header text="صندوق‌های سرمایه گذاری آگاه" />
      <div>
        {FundListCardData.map((fund) => (
          <Card key={fund.id} {...fund} />
        ))}
      </div>

      <Footer />
    </div>
  );
};
