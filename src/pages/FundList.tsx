import React from "react";
import { useState, useEffect } from "react";
import { Card } from "components/Card";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { FundListHook } from "hook/FundListHook";
import { useAppSelector } from "hook/hooks";

export const FundList = () => {
  const FundsData = useAppSelector((state) => state.fundsList.FundsData);
  const InstrumentData = useAppSelector(
    (state) => state.fundsList.InstrumentData
  );

  const [dataIsLoading] = useState(
    FundListHook().dataIsLoading
  );

  const [loadingText, setLoadingText] = useState("در حال بارگذاری...");

  useEffect(() => {
    if (!dataIsLoading) {
      setLoadingText("");
    }
  }, [dataIsLoading]);

  return (
    <div>
      <Header text="صندوق‌های سرمایه گذاری آگاه" />
      <h3>{loadingText}</h3>
      <div className="mb-10">
        {FundsData.map((fund) => (
          <Card key={fund.id} {...fund} />
        ))}

        {InstrumentData.map((instrument) => (
          <Card
            key={instrument.id}
            {...instrument}
            issuingNav={instrument.issueNav}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};
