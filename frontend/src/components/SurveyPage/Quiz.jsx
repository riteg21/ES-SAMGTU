import { useState, useEffect } from "react";
import { Question } from "./Question";
import { Link } from "react-router-dom";
import { Results } from "./Results";

export const Quiz = () => {
  const [quizData, setQuizData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const FetchDataQuiz = async () => {
      try {
        const response = await fetch("/src/data/quizData.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setQuizData(data);
      } catch (error) {
        setError(true);
      }
    };
    FetchDataQuiz();
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (quizData?.directions) {
      const initialScores = {};
      Object.keys(quizData.directions).forEach((key) => {
        initialScores[key] = 0;
      });
      setScores(initialScores);
    }
  }, [quizData]);

  const questions = quizData?.questions || [];
  const currentQuestionData = questions[currentQuestion];

  const progress = Math.round(((currentQuestion + 1) / questions.length) * 100);
  const handleAnswerSelect = (answerIndex) => {
    const selectedAnswer = currentQuestionData.answers[answerIndex];

    const newScores = { ...scores };
    Object.entries(selectedAnswer.scores).forEach(([direction, score]) => {
      newScores[direction] = (newScores[direction] || 0) + score;
    });
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  if (error) {
    return <Link to={"/404"} />;
  }

  if (isCompleted) {
    return <Results scores={scores} />;
  }

  return (
    <div className="min-h-screen p-3 sm:p-4 md:p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between text-gray-600 mb-2">
          <h4 className="font-medium text-xs sm:text-sm md:text-base">
            Вопрос {currentQuestion + 1} из {questions.length}
          </h4>
          <h4 className="font-medium text-xs sm:text-sm md:text-base">
            {progress}%
          </h4>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4 sm:mb-6 md:mb-8">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 shadow-sm sm:shadow-md md:shadow-lg shadow-blue-100">
          <Question
            question={currentQuestionData}
            handleAnswerSelect={handleAnswerSelect}
          />
        </div>
      </div>
    </div>
  );
};
