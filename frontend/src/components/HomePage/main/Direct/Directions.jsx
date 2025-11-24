import { DirectionItem } from "./DirectionItem";
import { useEffect, useState } from "react";

export const Directions = () => {
  const [directions, setDirections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/directions");
        if (!response.ok) throw new Error("Failed to response");
        const data = await response.json();
        setDirections(data);
      } catch (err) {
        console.error("Error fetching directions:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderSkeletons = () => {
    return Array.from({ length: 11 }).map((_, index) => (
      <div
        key={`skeleton-${index}`}
        className="w-full max-w-xs sm:max-w-sm lg:w-80 mx-auto sm:mx-2 lg:mx-4 bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg overflow-hidden border border-gray-100 animate-pulse"
      >
        <div className="relative h-32 sm:h-44 lg:h-48 bg-gray-200 animate-pulse">
          <svg
            className="w-11 h-11 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
        </div>

        <div className="p-3 sm:p-5 lg:p-6">
          <div className="mb-2 sm:mb-4">
            <div className="h-5 bg-gray-300 rounded-full w-3/4 mb-3 sm:mb-4"></div>
            <div className="w-8 sm:w-12 h-1 bg-gray-300 rounded-full"></div>
          </div>

          <div className="space-y-1 sm:space-y-3 mb-3 sm:mb-6">
            <div className="flex items-center">
              <div className="w-3 h-3 sm:w-5 sm:h-5 mr-1 sm:mr-3 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div className="h-3 bg-gray-300 rounded-full w-24"></div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-2 sm:mt-4 pt-2 sm:pt-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 mr-1 bg-gray-400 rounded-full flex-shrink-0"></div>
              <div className="h-2 bg-gray-400 rounded-full w-12"></div>
            </div>

            <div className="h-2 bg-gray-400 rounded-full w-16"></div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="bg-white py-20 sm:py-30 lg:py-40 mt-10 sm:mt-15 lg:mt-20 px-4 sm:px-6 lg:px-40">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="mb-3 sm:mb-4 text-xl sm:text-2xl lg:text-3xl font-bold leading-none tracking-tight text-gray-800">
          Какие направление есть?
        </h1>
        <p className="mb-4 sm:mb-6 text-base sm:text-lg lg:text-xl font-normal text-gray-500 sm:px-8 lg:px-16 xl:px-32">
          В нашем вузе найдуться специальности на все случаи жизни
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-y-4 sm:gap-y-3 lg:gap-y-8 -mx-2 sm:-mx-10 lg:-mx-10">
        {loading
          ? renderSkeletons()
          : directions.map((s) => (
              <DirectionItem
                id={s.id}
                image={s.imageURL}
                name={s.name}
                code={s.number}
                url={s.url}
              />
            ))}
      </div>
    </div>
  );
};
