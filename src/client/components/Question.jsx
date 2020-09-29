import React from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const Question = ({ number, question }) => {
  return (
    <Card className="mb-2" bg="info" style={{ maxWidth: "50vw" }}>
      <Card.Body>
        <Card.Title>
          {number}. {question}
        </Card.Title>
        <Form.Control onChange={console.log("change input")} />
      </Card.Body>
    </Card>
  );
};

export default Question;
