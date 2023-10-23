import React from "react";

var classNames = require("classnames");

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  color: "red" | "green";
  type?: "submit" | "reset" | "button";
  disable: boolean;
  mode: "Filled" | "OutLine";
}

export const Button = ({
  label,
  color,
  disable = false,
  mode = "OutLine",
  children,
  ...props
}: ButtonProps) => {
  let btnClass: string = "";

  const btnDisabledClass =
    "bg-gray-200 border border-black px-12 py-1 rounded-md w-full";

  const btnOutlineClass = classNames(
    "bg-white border px-12 py-1 rounded-md w-full hover:text-white",
    {
      "text-red-600 border-red-600  hover:bg-red-600": color === "red",
      "text-green-600 border-green-600  hover:bg-green-600": color === "green",
    }
  );

  const btnFilledClass = classNames(
    "hover:bg-white border px-12 py-1 rounded-md w-full ",
    {
      "hover:text-red-600 border-red-600  bg-red-600": color === "red",
      "hover:text-green-600 border-green-600  bg-green-600": color === "green",
    }
  );

  if (disable) {
    btnClass = btnDisabledClass;
  } else {
    if (mode === "OutLine") {
      btnClass = btnOutlineClass;
    } else {
      btnClass = btnFilledClass;
    }
  }

  return (
    <button disabled={disable} className={btnClass} {...props}>
      {children}
    </button>
  );
};
