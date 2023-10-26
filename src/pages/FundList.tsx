import React from "react";
import { Card } from "components/Card";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import FundListHook from "hook/FundListHook";
import { useAppSelector, useAppDispatch } from "hook/hooks";

import {
  selectFundsData,
  selectInstrumentData,
  selectIsLoading,
} from "store/slices";

export const FundList = () => {
  const FundsData = selectFundsData();
  const InstrumentData = selectInstrumentData();
  const IsLoading = selectIsLoading();

  console.log(FundsData);

  FundListHook();

  return (
    <div>
      <Header text="صندوق‌های سرمایه گذاری آگاه" />
      <>
        {FundsData.map((fund) => (
          <Card key={fund.id} {...fund} />
        ))}

        {InstrumentData.map((fund) => (
          <Card key={fund.id} {...fund} />
        ))}
      </>

      <Footer />
    </div>
  );
};
