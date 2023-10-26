import React from "react";
import { Card } from "components/Card";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import FundListHook from "hook/FundListHook";
import { useAppSelector } from "hook/hooks";

export const FundList = () => {
  const FundsData = useAppSelector((state) => state.fundsList.FundsData);
  const InstrumentData = useAppSelector(
    (state) => state.fundsList.InstrumentData
  );

  const IsLoading = useAppSelector((state) => state.fundsList.IsLoading);

  FundListHook();

  return (
    <div>
      <Header text="صندوق‌های سرمایه گذاری آگاه" />
      <>
        {FundsData.map((fund) => (
          <Card key={fund.id} {...fund} />
        ))}

        {InstrumentData.map((instrument) => (
          <Card key={instrument.id} {...instrument} issuingNav={instrument.issueNav}  />
        ))}
      </>

      <Footer />
    </div>
  );
};
