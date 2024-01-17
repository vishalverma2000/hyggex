import React from "react";

const MenuList = () => {
  return (
    <div>
      <ul className="flex gap-12 justify-center ">
        <li className="border-b-2 border-blue-900 p-[10px] font-extrabold text-blue-900">
          <a href="/">Study</a>
        </li>
        <li className="border-b-1 transparent p-[10px]">
          <a href="/">Quiz</a>
        </li>
        <li className="border-b-1 transparent p-[10px]">
          <a href="/">Test</a>
        </li>
        <li className="border-b-1 transparent p-[10px]">
          <a href="/">Game</a>
        </li>
        <li className="border-b-1 transparent p-[10px]">
          <a href="/">Other</a>
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
