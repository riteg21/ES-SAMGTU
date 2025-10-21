export const Header = ({ onScrollToHowItWorks }) => {
  const handleHowItWorksScroll = (e) => {
    e.preventDefault();
    onScrollToHowItWorks();
  };
  return (
    <div className="w-full">
      <header className="flex items-center justify-center px-4 py-1 sm:px-6 lg:px-40 lg:py-4 lg:justify-between bg-white">
        <div>
          <img
            src="/logo.svg"
            alt="Логотип"
            className="w-25 h-25 sm:w-10 sm:h-10 lg:w-auto lg:h-auto"
          />
        </div>

        <div className="hidden md:flex space-x-6 lg:space-x-10 text-gray-500 font-medium">
          <a
            href="https://samgtu.ru/bachelors/bachelors-faculty-iait"
            className="duration-200 ease-in hover:text-gray-700 transition-colors"
          >
            О нас
          </a>
          <button
            href="/"
            className="duration-200 ease-in hover:text-gray-700 transition-colors"
            onClick={handleHowItWorksScroll}
          >
            Как это работает
          </button>
        </div>
      </header>
    </div>
  );
};
