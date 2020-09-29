import React, { useState, useEffect } from "react";
import Quiz from "./components/Quiz";
import QuizOptions from "./components/QuizOptions";
import questions from "./assets/questions";

import "./App.css";
import { post } from "../server/routes/quiz";

function App() {
  const [quiz, getQuiz] = useState(questions);
  const [answers, setUserAnswers] = useState([]);
  const [showQuiz, getShowQuiz] = useState(false);

  const handleOnChange = (event) => {
    console.log("event:", event.target);
  };

  const startQuiz = () => {
    getShowQuiz(true);
  };

  const handleSubmit = () => {
    fetch("/user", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: "",
    });
  };

  return (
    <div className="App">
      <header className="App-header">Quiz Central</header>
      <QuizOptions startQuiz={startQuiz} />
      {!showQuiz ? (
        ""
      ) : (
        <Quiz questions={quiz} submit={handleSubmit} userAnswers={answers} />
      )}
    </div>
  );
}

export default App;
