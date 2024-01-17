import React from "react";
import Card from "../components/card";
import MenuList from "../components/menu-list";

const CardContainer = () => {
  return (
    <div>
      <h1 className="my-[50px] text-2xl from-blue-900 to-blue-800 bg-gradient-to-b bg-clip-text text-transparent">
        Relations and Functions ( Mathematics ){" "}
      </h1>
      <MenuList />
      <Card />
    </div>
  );
};

export default CardContainer;
