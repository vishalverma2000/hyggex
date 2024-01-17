import React from "react";
import logo from "../Resource/Hy.png";
import add from "../Resource/add button.png";

const CreateCardContainer = () => {
  return (
    <div className="flex items-center justify-between">
      <div className=" inline-block">
        <span className="text-xs font-bold text-gray-500 ml-8 ">
          Published by
        </span>
        <img src={logo} alt="" className="h-[50px] w-[150px]" />
      </div>
      <div className="flex items-center gap-1">
        <img src={add} alt="" />
        <button className="text-l font-bold from-blue-900 to-blue-800 bg-gradient-to-b bg-clip-text text-transparent">
          Create Flashcard
        </button>
      </div>
    </div>
  );
};

export default CreateCardContainer;
