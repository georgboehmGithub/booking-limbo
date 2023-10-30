import classNames from "classnames";
import React from "react";

type Props = {
  text: string;
  type: "primary" | "cancel" | "navigation";
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ onClick, text, type }) => (
  <button
    className={classNames(
      "border appearance-none block py-3.5 px-4 h-full",
      {
        "bg-blue-600 hover:bg-blue-800 text-white": type === "primary",
        "bg-red-600 hover:bg-red-800 text-white": type === "cancel",
        "bg-gray-700 hover:text-white text-gray-200": type === "navigation",
      },
      {
        "rounded-md border-gray-300": type === "primary" || type === "cancel",
        "border-black": type === "navigation",
      },
      {
        "w-40": type === "primary" || type === "cancel",
        "w-full h-full": type === "navigation",
      },
      "font-inter text-14px"
    )}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
