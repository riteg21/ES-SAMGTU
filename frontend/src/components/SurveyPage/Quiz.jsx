import { useState, useEffect } from "react";
import { Question } from "./Question";
import { Results } from "./Results";
import { Link, useNavigate } from "react-router-dom";
import { useScore } from "../../context/ScoreForResultsContext";

export const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [directions, setDirections] = useState(null);
  const [error, setError] = useState(false);

  const navigateToResult = useNavigate();
  const { scoreHandler, score } = useScore();

  useEffect(() => {
    const FetchAllQuestions = async () => {
      try {
        const allQuestions = [];
        let page = 1;
        let totalPages = 15;
        while (page < totalPages) {
          const response = await fetch(`/api/question?questionNumber=${page}`);
          if (!response.ok) throw new Error("Failed to fetch data");
          const data = await response.json();

          allQuestions.push(...data.content);
          totalPages = data.totalPages;
          page++;
        }
        setQuizData(allQuestions);
      } catch (error) {
        setError(true);
      }
    };

    FetchAllQuestions();
  }, []);

  useEffect(() => {
    const FetchDataDirections = async () => {
      try {
        const response = await fetch("/api/directions");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setDirections(data);
      } catch (error) {
        setError(true);
      }
    };
    FetchDataDirections();
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (directions?.id) {
      const initialScores = {};
      Object.keys(directions.id).forEach((key) => {
        initialScores[key] = 0;
      });
      setScores(initialScores);
    }
  }, [directions]);

  const questions = quizData || [];
  const currentQuestionData = questions[currentQuestion];

  const progress =
    questions.length > 0 ? Math.round(((currentQuestion + 1) / 15) * 100) : 0;

  const handleAnswerSelect = (answerIndex) => {
    const selectedAnswer = currentQuestionData.answers[answerIndex];

    const newScores = { ...scores };
    Object.entries(selectedAnswer.scores).forEach(([direction, score]) => {
      newScores[direction] = (newScores[direction] || 0) + score;
    });
    setScores(newScores);

    console.log(scores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  if (error) {
    return <div>Ошибка загрузки данных</div>;
  }

  if (isCompleted) {
    scoreHandler(scores);
    navigateToResult("/result");
    return null;
  }

  return (
    <div className="min-h-screen p-3 sm:p-4 md:p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between text-gray-600 mb-2">
          <h4 className="font-medium text-xs sm:text-sm md:text-base">
            Вопрос {currentQuestion + 1} из 15
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
