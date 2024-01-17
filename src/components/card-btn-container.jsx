import React, { useState } from "react";
import fullscreen from "../Resource/fullscreen2.png";
import left from "../Resource/left.png";
import restart from "../Resource/restart.png";
import right from "../Resource/right.png";
import Button from "../components/button";

const CardBtnContainer = ({ changeNum }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleIncrement = () => {
    if (currentPage < 10) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleDecrement = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const runBothFunctions1 = () => {
    changeNum();
    handleDecrement();
  };

  const runBothFunctions2 = () => {
    changeNum();
    handleIncrement();
  };

  return (
    <div>
      <div className="w-[500px] flex justify-between items-center">
        <div>
          <Button src={restart} hw={"h-[30px] w-[30px]"} />
        </div>
        <div className="flex gap-4 items-center">
          <Button
            src={left}
            onClick={runBothFunctions1}
            hw={"h-[50px] w-[50px]"}
          />
          <span className="font-bold">{currentPage}/10</span>
          <Button
            src={right}
            onClick={runBothFunctions2}
            hw={"h-[50px] w-[50px]"}
          />
        </div>
        <div>
          <Button src={fullscreen} hw={"h-[30px] w-[30px]"} />
        </div>
      </div>
    </div>
  );
};

export default CardBtnContainer;
