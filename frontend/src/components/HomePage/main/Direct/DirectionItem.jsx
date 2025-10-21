import { Link } from "react-router-dom";

export const DirectionItem = ({ id, image, name, code, url }) => {
  return (
    <Link
      className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 w-full max-w-xs sm:max-w-sm lg:w-80 mx-auto sm:mx-2 lg:mx-4 border border-gray-100 block"
      to={url}
    >
      <div className="relative h-32 sm:h-44 lg:h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />

        <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
          <span className="bg-white bg-opacity-90 text-gray-800 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold shadow-md border border-gray-200">
            {code}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-10 sm:h-14 lg:h-16 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="p-3 sm:p-5 lg:p-6">
        <div className="mb-2 sm:mb-4">
          <h3 className="text-sm sm:text-xl font-bold text-gray-800 leading-tight mb-2 line-clamp-3 min-h-[48px] sm:min-h-[72px] lg:min-h-[84px]">
            {name}
          </h3>
          <div className="w-8 sm:w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
        </div>

        <div className="space-y-1 sm:space-y-3 mb-3 sm:mb-6">
          <div className="flex items-center text-gray-600">
            <svg
              className="w-3 h-3 sm:w-5 sm:h-5 mr-1 sm:mr-3 text-blue-500 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
            </svg>
            <span className="text-xs sm:text-sm">Бакалавриат</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2 sm:mt-4 pt-2 sm:pt-4 border-t border-gray-100">
          <div className="flex items-center text-gray-500">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs">4 года</span>
          </div>

          <div className="flex items-center text-gray-500">
            <span className="text-xs">Очная форма</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
