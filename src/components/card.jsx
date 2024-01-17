import React, { useState } from "react";
import bulb from "../Resource/bulb.png";
import volume from "../Resource/volume.png";
import CardBtnContainer from "./card-btn-container";
const Card = () => {
  const [expressionNumber, setExpressionNumber] = useState(1);

  const updateExpression = () => {
    // Generate a random number between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    setExpressionNumber(randomNumber);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="rounded-medium p-8 m-8 w-[600px] h-[350px] bg-gradient-to-tr from-blue-500 via-blue-700 to-blue-900 flex items-center justify-center relative">
        <div className=" absolute top-8 left-9">
          <img src={bulb} alt="" className="h-[30px] w-[30px]" />
        </div>
        <div className=" absolute top-8 right-9">
          <img src={volume} alt="" className="h-[30px] w-[30px]" />
        </div>
        <h2 className="text-white font-semibold text-3xl">
          {expressionNumber} + {3 * expressionNumber} + 7x -{" "}
          {2 * expressionNumber} - 3
        </h2>
      </div>
      <CardBtnContainer changeNum={updateExpression} maxAttempts={10} />
    </div>
  );
};
export default Card;
