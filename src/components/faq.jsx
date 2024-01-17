import React, { useState } from "react";
import arrow from "../Resource/arrow.png";

const Faq = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="border border-blue-900 p-4 w-[800px] rounded-[10px] flex flex-col justify-between my-4">
        <div className="flex justify-between">
          <p className="text-sm font-black">
            Can Education flashcards be used for all age groups?
          </p>
          <button onClick={toggleDropdown}>
            <img src={arrow} alt="" className="h-[20px] w-[20px]" />
          </button>
        </div>
        <div className={isDropdownOpen ? "my-4" : "hidden"}>
          <p className="text-sm font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore
            illo dolores quia nemo doloribus quaerat, magni numquam repellat
            reprehenderit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
