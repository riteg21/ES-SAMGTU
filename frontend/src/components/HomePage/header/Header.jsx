export const Header = ({ onScrollToHowItWorks }) => {
  const handleHowItWorksScroll = (e) => {
    e.preventDefault();
    onScrollToHowItWorks();
  };

  return (
    <div className="w-full">
      <header className="flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-40 lg:justify-between bg-white">
        <div>
          <img
            src="/logo.svg"
            alt="Логотип"
            className="w-32 h-24 sm:w-36 sm:h-27 md:w-40 md:h-30 lg:w-48 lg:h-35"
          />
        </div>

        <div className="hidden lg:flex space-x-6 lg:space-x-10 text-gray-500 font-medium">
          <a
            href="https://samgtu.ru/bachelors/bachelors-faculty-iait"
            className="duration-200 ease-in hover:text-gray-700 transition-colors"
          >
            О нас
          </a>
          <button
            className="duration-200 ease-in hover:text-gray-700 transition-colors text-base md:text-lg lg:text-base bg-transparent border-none cursor-pointer"
            onClick={handleHowItWorksScroll}
          >
            Как это работает
          </button>
        </div>
      </header>
    </div>
  );
};
