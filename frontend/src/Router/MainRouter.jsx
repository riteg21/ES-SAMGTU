import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "../components/HomePage/Home";
import { Quiz } from "../components/SurveyPage/Quiz";
import { Results } from "../components/SurveyPage/Results";
import { Error404 } from "../components/404";
export function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Quiz />} />
          <Route path="/survey/results" element={<Results />} />
          <Route path="/404" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}
