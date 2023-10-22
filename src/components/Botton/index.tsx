import React from "react";

interface buttonProps {
  label: string;
  color: "red" | "green";
  onClick?: () => void;
}

const Botton = ({ label, color, ...props }: buttonProps) => {
  const classProp =
    color === "green"
      ? "text-green-600 border-green-600 hover:text-white hover:bg-green-600"
      : "text-red-600 border-red-600 hover:text-white hover:bg-red-600";
  return (
    <button
      className={`bg-white border px-12 py-1 rounded-md w-full ${classProp}`}
    >
      {label}
    </button>
  );
};

export default Botton;
