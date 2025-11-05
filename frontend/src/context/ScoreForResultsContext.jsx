import { createContext, useContext, useEffect, useState } from "react";

const ScoreToResultContext = createContext();

export const useScore = () => {
  return useContext(ScoreToResultContext);
};

export const ScoreToResultProvider = ({ children }) => {
  const [score, setScore] = useState();

  const scoreHandler = (score) => {
    setScore(score);
  };

  const scoreToDB = async () => {
    const response = await fetch("/api/result", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(score),
    });

    return await response.json();
  };

  useEffect(() => {
    scoreToDB();
  }, [score]);

  const value = {
    scoreHandler,
    score,
  };
  return (
    <ScoreToResultContext.Provider value={value}>
      {children}
    </ScoreToResultContext.Provider>
  );
};
