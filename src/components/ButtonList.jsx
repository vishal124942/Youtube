import React from "react";
import Button from "./Button";
import { list } from "../utils/constants";
const ButtonList = () => {
  return (
    <div className="ButtonList flex h-10 gap-x-4 w-full overflow-x-auto whitespace-nowrap ">
      {list.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
