import React, { useState } from "react";
import Options from "../components/Options";
import Finish from "../components/Finish";
import "./Question.css";
let totalscore = 0;
const Question = ({ item, setCount, count, data }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [submit, isSubmit] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [toggle, setToggle] = useState(true);
  //   const [previousData, setPreviousData] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [finish, setFinish] = useState(false);
  //   console.log("previousdata is", previousData);

  const optionSelected = (e) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
  };

  const right = <i className="fa fa-check" aria-hidden="true"></i>;
  const wrong = <i className="fa fa-times" aria-hidden="true"></i>;

  const submitHandler = () => {
    if (selectedOption !== "") {
      isSubmit(true);
      setDisabled(true);
      // setPreviousData([...previousData, { ...item, yourAnswer: selectedOption }]);
      // console.log("value of correct is", correct);
      setCorrect(true);
      if (item.answer === selectedOption && toggle) {
        console.log("inside if");
        setToggle(!toggle);
        totalscore = totalscore + 1;
      }
    }
  };

  //   console.log("final value of count is", count);

  const onNext = () => {
    if (count < 10 && submit) {
      setDisabled(false);
      isSubmit(false);
      setCorrect(false);
      setCount(count + 1);
      setToggle(!toggle);
      return;
    }
  };

  //   const onPrevious = () => {
  //     if (count > 0) {
  //       setCorrect(false);
  //       setCount(count - 1);
  //     }
  //   };
  console.log("totalscore is ", totalscore);
  const onFinish = () => {
    console.log("finish has been clickd");
    setFinish(true);
  };

  return (
    <div className="question-container">
      <div className="question">
        <span>{item.question}</span>
      </div>
      <div className="options">
        <form>
          <p className="para">Please select the from the following option:</p>
          <Options
            key={item.id}
            options={item.options}
            item={item}
            optionSelected={optionSelected}
            right={right}
            wrong={wrong}
            correct={correct}
            selectedOption={selectedOption}
            checked={true}
            disabled={disabled}
          />
        </form>
        <div className="btn-container">
          <button type="submit" className="submit-btn" onClick={submitHandler}>
            Show Answer
          </button>
        </div>
      </div>

      <div className={`${count + 1 < data.length ? "buttons" : "hide-btn"}`}>
        {/* {item.id !== 1 ? <button onClick={onPrevious}>Previous</button> : ""} */}
        {count + 1 < data.length ? (
          <button className="next-btn" onClick={onNext}>
            Next
          </button>
        ) : (
          ""
        )}
      </div>
      {count + 1 === data.length ? (
        <div className="btn-container">
          <button className="finish-btn" onClick={onFinish}>
            Finish
          </button>
        </div>
      ) : (
        ""
      )}
      {finish ? <Finish totalscore={totalscore} /> : ""}
    </div>
  );
};

export default Question;
