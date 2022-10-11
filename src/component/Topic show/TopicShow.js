import React from "react";
import { Button } from "react-bootstrap";
import "./topicShow.css";

const TopicShow = ({ quiz }) => {
  const { id, name, logo } = quiz;
  return (
    <div className="card-item">
      <div className="card">
        <img src={logo} alt="" />
        <div className="name-button">
          <h4>{name}</h4>
          <Button>Start Practice</Button>
        </div>
      </div>
    </div>
  );
};

export default TopicShow;
