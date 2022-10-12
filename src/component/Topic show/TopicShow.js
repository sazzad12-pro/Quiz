import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./topicShow.css";

const TopicShow = ({ quiz }) => {
  const { id, name, logo } = quiz;
  return (
    <div className="card-item">
      <div className="card">
        <img src={logo} alt="" />
        <div className="name-button">
          <h4>{name}</h4>
          <Button>
            <Link
              className="text-white text-decoration-none"
              to={`topics/${id}`}
            >
              Start Practice
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopicShow;
