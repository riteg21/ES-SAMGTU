import { Link } from "react-router-dom";
import { DirectionItem } from "./DirectionItem";
import { useEffect, useState } from "react";

export const Directions = () => {
  const [directions, setDirections] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("src/data/cardOfDirection.json");
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
  console.log(directions);
  return (
    <div className="bg-white py-20 sm:py-30 lg:py-40 mt-10 sm:mt-15 lg:mt-20 px-4 sm:px-6 lg:px-40">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-8 justify-items-center">
        {directions.map((s) => (
          <DirectionItem
            key={s.id}
            id={s.id}
            image={s.image}
            name={s.name}
            code={s.number}
            url={s.url}
          />
        ))}
      </div>
    </div>
  );
};
