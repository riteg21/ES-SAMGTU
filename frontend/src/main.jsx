import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MainRouter } from "./Router/MainRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainRouter />
  </StrictMode>
);
