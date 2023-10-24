import React from "react";
import axios from "axios";
import { Card } from "components/Card";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { RealData } from "types/FundList";
import { useState , useEffect } from "react"
// import { FUND_LIST_DATA } from "constants/fundList";


export const FundList = () => {
  const [data, setData] = useState<RealData[]>([])

  useEffect(()=>{
    axios
    .get("https://testapi.io/api/Ali6600/getFunds")
    .then(function (response) {
      setData(response.data.fundTypes);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });


  },[])

  
  return (
    <div>
      <Header text="صندوق‌های سرمایه گذاری آگاه" />
      <div>
        {data.map((fund) => (
          <Card key={fund.id} {...fund} />
        ))}
      </div>

      <Footer />
    </div>
  );
};
