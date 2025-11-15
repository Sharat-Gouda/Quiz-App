import React, { useState, useRef } from "react";
import "../../assets/Quiz.css";
import { data } from "../../assets/data.js";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  const question = data[index];
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        const correctRef = option_array[question.ans - 1];
        if (correctRef && correctRef.current) {
          correctRef.current.classList.add("correct");
        }
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return;
      }
      const nextIndex = index + 1;
      setIndex(nextIndex);
      setLock(false);
      option_array.forEach((option) => {
        if (option && option.current) {
          option.current.classList.remove("wrong");
          option.current.classList.remove("correct");
          return null;
        }
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setScore(0);
    setResult(false);
    setLock(false);
    option_array.forEach((option) => {
      if (option && option.current) {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      }
    });
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {result ? (
        <></>
      ) : (
        <>
          <h2>
            {index + 1}. {question.questions}
          </h2>
          <ul>
            <li
              ref={Option1}
              onClick={(e) => {
                checkAns(e, 1);
              }}
            >
              {question.Option1}
            </li>
            <li
              ref={Option2}
              onClick={(e) => {
                checkAns(e, 2);
              }}
            >
              {question.Option2}
            </li>
            <li
              ref={Option3}
              onClick={(e) => {
                checkAns(e, 3);
              }}
            >
              {question.Option3}
            </li>
            <li
              ref={Option4}
              onClick={(e) => {
                checkAns(e, 4);
              }}
            >
              {question.Option4}
            </li>
          </ul>
          <button onClick={next}>Next</button>
          <div className="index">
            {index + 1} of {data.length}
          </div>
        </>
      )}

      {result ? (
        <>
          <h2 className="score">
            You Scored {score} out of {data.length} <br />
            <button onClick={reset}>Reset</button>
          </h2>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Quiz;
