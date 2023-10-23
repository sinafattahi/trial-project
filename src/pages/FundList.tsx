import React from "react";
import {Card} from "components/Card";
import {Header} from "components/Header";

import { FUND_LIST_DATA } from "constants/fundList";
import {Footer} from "components/Footer";

export const FundList = () => {
  return (
    <div>
      <Header text="صندوق‌های سرمایه گذاری آگاه" />
      <div>
        {FUND_LIST_DATA.map((fund) => (
          <Card key={fund.id} {...fund} />
        ))}
      </div>

      <Footer />
    </div>
  );
};
