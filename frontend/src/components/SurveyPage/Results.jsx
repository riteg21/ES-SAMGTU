import { useEffect, useMemo, useState } from "react";
import { DirectionItem } from "../HomePage/main/Direct/DirectionItem";
import { Link } from "react-router-dom";
import { useScore } from "../../context/ScoreForResultsContext";

export const Results = () => {
  const { score } = useScore();

  const [directions, setDirections] = useState([]);
  const [error, setError] = useState(false);
  console.log("score:", score);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/directions");
        if (!response.ok) throw new Error("Failed to response");
        const data = await response.json();
        setDirections(data);
      } catch (err) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <Link to={"/404"} />;
  }

  const sortedDirections = useMemo(() => {
    return Object.entries(score)
      .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
      .map(([key]) => key);
  }, [score]);

  const topDirections = sortedDirections.slice(0, 3);

  const topDirectionItems = useMemo(() => {
    return topDirections
      .map((key) => {
        return directions.find((item) => item.id === parseInt(key));
      })
      .filter((item) => item !== undefined);
  }, [topDirections, directions]);

  console.log(topDirectionItems);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-8 lg:py-0">
      <div className="text-center max-w-4xl mx-auto px-4 lg:px-6 mt-4 lg:mt-10">
        <div className="flex justify-center mb-4 lg:mb-6">
          <img
            src="/congratulations.svg"
            alt="Happy"
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
          />
        </div>
        <h2
          className="text-2xl font-bold text-gray-700 mb-3 
               sm:text-3xl 
               lg:text-4xl lg:mb-10"
        >
          Поздравляем!
        </h2>
        <p className="mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg font-normal text-gray-500 md:text-xl px-2 sm:px-0">
          На основе вашего опроса мы определили идеальные направления для
          поступления на ИАИТ. Эти рекомендации учитывают ваши интересы, сильные
          стороны и карьерные цели.
        </p>
      </div>

      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700 mt-8 lg:mt-20 mb-8 lg:mb-14 px-4 text-center">
        Топ рекомендуемых направлений
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 lg:gap-6 max-w-6xl mx-auto px-4 lg:px-6 mb-8 lg:mb-19 w-full">
        {topDirectionItems.map((directionItem, index) => (
          <div
            key={index}
            className="w-full sm:w-auto sm:flex max-w-sm lg:max-w-none"
          >
            <DirectionItem
              id={index}
              image={directionItem.imageURL}
              name={directionItem.name}
              code={directionItem.number}
              url={directionItem.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
