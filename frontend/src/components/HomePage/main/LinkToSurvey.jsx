import { Link } from "react-router-dom";

export const LinkToSurvey = () => {
  return (
    <Link
      to={"/survey"}
      className="inline-flex items-center justify-center gap-2 text-white bg-blue-700 hover:bg-blue-800 font-bold rounded-lg px-12 py-5"
    >
      Начать опросник
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </Link>
  );
};
