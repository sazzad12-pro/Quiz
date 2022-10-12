import React from "react";
import { useLoaderData } from "react-router-dom";
import ShowQuiz from "../ShowQuiz/ShowQuiz";
import "./Quiz.css";

const Quiz = () => {
  const quizData = useLoaderData();
  // console.log(quizData.data);
  return (
    <div>
      <h1 className="name-quiz">Quiz Of {quizData.data.name}</h1>
      {quizData.data.questions.map((question) => (
        <ShowQuiz key={question.id} quizQuestion={question}></ShowQuiz>
      ))}
    </div>
  );
};

export default Quiz;
