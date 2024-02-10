import React from "react";
import Button from "./Button";
import { list } from "../utils/constants";
import { useSelector } from "react-redux";
const ButtonList = () => {
  const darkMode = useSelector((store) => store.DarkMode.darkMode);
  return (
    <div
      className={`ButtonList flex h-10 gap-x-4 w-full overflow-x-auto whitespace-nowrap ${
        darkMode ? "dark:bg-gray-800" : ""
      } `}
    >
      {list.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
