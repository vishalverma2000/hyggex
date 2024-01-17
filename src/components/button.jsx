import React from "react";

const Button = ({ src, onClick, hw }) => {
  return (
    <div>
      <button>
        <img src={src} alt="" className={hw} onClick={onClick} />
      </button>
    </div>
  );
};

export default Button;
