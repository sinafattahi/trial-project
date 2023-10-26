import React from "react";
import { Route, Routes } from "react-router-dom";
import { FundList } from "pages/FundList";
import { ROUTES } from "constants/appRoutes"; 

export default function App() {
  return (
    <Routes>
      <Route path= {ROUTES.root} Component={FundList} />
    </Routes>
  );
}
