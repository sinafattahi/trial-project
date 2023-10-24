import React from "react";

var classNames = require("classnames");

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  color: "red" | "green";
  type?: "submit" | "reset" | "button";
  disable: boolean;
  mode: "filled" | "outLine";
}

export const Button = ({
  label,
  color,
  disable = false,
  mode = "outLine",
  children,
  ...props
}: ButtonProps) => {
  const btnClass = classNames({
    "opacity-50 bg-gray-200 border border-black px-12 py-1 rounded-md w-full":
      disable === true,
    "bg-white border px-12 py-1 rounded-md w-full hover:text-white text-red-600 border-red-600  hover:bg-red-600":
      color === "red" && mode === "outLine" && disable === false,
    "bg-white border px-12 py-1 rounded-md w-full hover:text-white text-green-600 border-green-600  hover:bg-green-600":
      color === "green" && mode === "outLine" && disable === false,
    "hover:bg-white border px-12 py-1 rounded-md w-full hover:text-red-600 border-red-600  bg-red-600":
      color === "red" && mode === "filled" && disable === false,
    "hover:bg-white border px-12 py-1 rounded-md w-full hover:text-green-600 border-green-600  bg-green-600":
      color === "green" && mode === "filled" && disable === false,
  });

  return (
    <button
      disabled={disable}
      className={btnClass}
      aria-label={label}
      {...props}
    >
      {children}
    </button>
  );
};
