import React, { useState } from "react";
import Faq from "./faq";
const FaqContainer = () => {
  return (
    <div className="my-16">
      <span className=" text-4xl font-extrabold  from-blue-900 to-blue-800 bg-gradient-to-b bg-clip-text text-transparent ">
        FAQ
      </span>
      <Faq />
      <Faq />
      <Faq />
    </div>
  );
};

export default FaqContainer;
