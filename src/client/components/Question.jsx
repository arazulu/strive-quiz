import React from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const Question = ({ number, question, handleChange, userAnswers }) => {
  return (
    <Card className="mb-2" bg="info" style={{ maxWidth: "50vw" }}>
      <Card.Body>
        <Card.Title>
          {number}. {question}
        </Card.Title>
        <Form.Control
          name={number}
          value={userAnswers[number - 1]}
          onChange={handleChange}
        />
      </Card.Body>
    </Card>
  );
};

export default Question;
