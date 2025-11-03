import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MainRouter } from "./Router/MainRouter.jsx";
import { ScoreToResultProvider } from "./context/ScoreForResultsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScoreToResultProvider>
      <MainRouter />
    </ScoreToResultProvider>
  </StrictMode>
);
