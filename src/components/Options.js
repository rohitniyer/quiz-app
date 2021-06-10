import React from "react";
import "./Options.css";
const Options = ({
  options,
  optionSelected,
  item,
  correct,
  right,
  wrong,
  selectedOption,
  disabled,
}) => {
  return (
    <div className="option-container">
      {options.map((option, index) => {
        return (
          <div className="option">
            <input
              type="radio"
              id={`${index}`}
              name="option"
              value={option}
              key={index}
              onChange={optionSelected}
              disabled={disabled ? true : false}
            />
            <label className="label">{option}</label>
            {item.answer === option && correct ? right : ""}
            {selectedOption !== item.answer &&
            option === selectedOption &&
            correct
              ? wrong
              : ""}
          </div>
        );
      })}
    </div>
  );
};

export default Options;
