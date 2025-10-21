import { LinkToSurvey } from "./LinkToSurvey";

export const HowItWorks = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 xl:px-24 2xl:px-32">
      <div className="pt-8 sm:pt-12 lg:pt-16 xl:pt-20 text-center pb-8 sm:pb-12 lg:pb-16 flex flex-col">
        <div>
          <h1 className="mb-3 sm:mb-4 text-xl sm:text-2xl lg:text-3xl font-bold leading-none tracking-tight text-gray-800">
            Как это работает?
          </h1>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg lg:text-xl font-normal text-gray-500 sm:px-8 lg:px-16 xl:px-32">
            Простой и понятный процесс, который поможет определиться с будущим
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 sm:gap-8 md:gap-6 lg:gap-8 xl:gap-12 mt-8 sm:mt-12 lg:mt-16">
          <div className="flex flex-col items-center text-center max-w-xs mx-auto w-full p-4 sm:p-6">
            <div className="rounded-full bg-[#004282] text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              1
            </div>
            <h2 className="font-bold text-gray-700 text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">
              Пройди опросник
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Ответь на вопросы о своих интересах, сильных сторонах и карьерных
              предпочтениях
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-xs mx-auto w-full p-4 sm:p-6">
            <div className="rounded-full bg-[#004282] text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              2
            </div>
            <h2 className="font-bold text-gray-700 text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">
              Получи анализ
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Наш алгоритм проанализирует твои ответы и сопоставит с
              требованиями разных направлений
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-xs mx-auto w-full p-4 sm:p-6">
            <div className="rounded-full bg-[#004282] text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              3
            </div>
            <h2 className="font-bold text-gray-700 text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">
              Выбери путь
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Получи персонализированные рекомендации по специальностям вуза
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 xl:mt-20">
          <LinkToSurvey />
        </div>
      </div>
    </div>
  );
};
