import React, { useState } from "react";
import "./Card.css";
import Question from "./Question";
import data from "../data/data";
const Card = () => {
  const [count, setCount] = useState(0);
  console.log("value of count is", count);
  return (
    <div className="card">
      <h1 className="questionno">{`Question No: ${count + 1}/10`}</h1>
      <Question
        item={data[count]}
        setCount={setCount}
        count={count}
        data={data}
      />
    </div>
  );
};

export default Card;
