import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import TopicShow from "../Topic show/TopicShow";
import "./Topic.css";

const Topics = () => {
  const quizes = useLoaderData();

  return (
    <div>
      <Header></Header>
      <div className="card-container">
        {quizes.data.map((quiz) => (
          <TopicShow key={quiz.id} quiz={quiz}></TopicShow>
        ))}
      </div>
    </div>
  );
};

export default Topics;
