import React from "react";
interface HeaderProps {
  text: string;
}

export const Header = ({ text }: HeaderProps) => {
  return (
    <header>
      <h1 className="border-solid border-b-2 text-bold pr-5 py-8">{text}</h1>
    </header>
  );
};
