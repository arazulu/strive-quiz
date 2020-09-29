import React from "react";
import Button from "react-bootstrap/Button";

const QuizOptions = ({ startQuiz }) => {
  return (
    <div>
      <Button variant="primary" onClick={startQuiz}>
        Take a quiz!
      </Button>
      <Button variant="primary">Create New Quiz</Button>
    </div>
  );
};

export default QuizOptions;
