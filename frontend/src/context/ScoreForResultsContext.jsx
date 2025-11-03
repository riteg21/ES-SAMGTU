import { createContext, useContext, useState } from "react";

const ScoreToResultContext = createContext();

export const useScore = () => {
  return useContext(ScoreToResultContext);
};

export const ScoreToResultProvider = ({ children }) => {
  const [score, setScore] = useState();

  const scoreHandler = (score) => {
    setScore(score);
  };

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
