import React from "react";

const Button = (props) => {
  return (
    <div className="hover:bg-gray-800 duration-150  hover:text-white cursor-pointer my-auto px-3 py-1 mx-auto  text-sm font-bold  bg-gray-200 rounded-lg">
      {props.name}
    </div>
  );
};

export default Button;
