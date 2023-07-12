import React from "react";
import "./circle.scss";

function Circle({ point }) {
  const percent = (Math.floor(point) / 10) * 100;
  return (
    <div className={`c100 p${percent} green`}>
      <span>{point}</span>
      <div className="slice">
        <div className="bar"></div>
        <div className="fill"></div>
      </div>
    </div>
  );
}

export default Circle;
