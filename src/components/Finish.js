import React from "react";
import "./Finish.css";
const Finish = ({ totalscore }) => {
  console.log("im inside finish component");
  return (
    <div className="finish-container">
      <p>your totalscore is {`${totalscore}`}</p>
    </div>
  );
};

export default Finish;
