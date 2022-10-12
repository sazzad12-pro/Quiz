import React from "react";
import "./showquiz.css";

const ShowQuiz = ({ quizQuestion }) => {
  console.log(quizQuestion);
  const { question } = quizQuestion;

  return (
    <div className="question-container">
      <div className="question-item">
        <h5 className="text-center">Quiz:{question}</h5>

        <i className="fa-regular fa-eye"></i>
      </div>
      <div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {quizQuestion.options[0]}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {quizQuestion.options[1]}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {quizQuestion.options[2]}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {quizQuestion.options[3]}
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShowQuiz;
