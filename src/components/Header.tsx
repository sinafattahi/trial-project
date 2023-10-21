import { string } from "prop-types";
import React from "react";

interface HeaderProps {
  text: string;
}

function Header({ text }: HeaderProps) {
  return (
    <header>
      <h1 className="border-solid border-b-2 text-bold pr-5 pt-8 pb-8">
        {text}
      </h1>
    </header>
  );
}

export default Header;
