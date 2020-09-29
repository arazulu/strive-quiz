import React from "react";
import Question from "./Question";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Quiz = ({ questions, handleSubmit }) => {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <section>progress bar goes here</section>
      <Form onSubmit={handleSubmit}>
        {questions.map((curr, idx) => {
          return (
            <Question
              key={idx}
              number={curr.number}
              question={curr.question}
              onChange={""}
            />
          );
        })}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </main>
  );
};

export default Quiz;
