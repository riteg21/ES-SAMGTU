import { LinkToSurvey } from "./LinkToSurvey";

export const FindYourFuture = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 xl:px-28 2xl:px-110 mt-8 sm:mt-20 lg:mt-30 xl:mt-50">
      <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
        <div className="flex-1 w-full">
          <div>
            <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-none tracking-tight text-gray-800">
              Найди свое <span>будущее</span>{" "}
            </h1>
            <p className="text-base sm:text-lg font-light text-gray-500 lg:text-xl">
              Пройди интеллектуальный опросник и узнай, какое{" "}
              <br className="hidden sm:block" />
              направление обучения в ИАИТ идеально подходит именно{" "}
              <br className="hidden sm:block" />
              тебе. На основе твоих интересов, способностей и целей{" "}
              <br className="hidden sm:block" /> мы подберем оптимальный путь к
              успешной карьере.
            </p>
          </div>
          <div>
            <div className="mt-12 sm:mt-20 lg:mt-28 ms-0 sm:ms-5 flex justify-center sm:justify-start">
              <div className="text-center me-8 sm:me-12 lg:me-20">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#004282]">
                  20+
                </h2>
                <h6 className="font-light text-gray-500 text-sm sm:text-base">
                  Направлений
                </h6>
              </div>
              <div className="text-center me-8 sm:me-12 lg:me-20">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#004282]">
                  10K+
                </h2>
                <h6 className="font-light text-gray-500 text-sm sm:text-base">
                  Студентов
                </h6>
              </div>
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#004282]">
                  95%
                </h2>
                <h6 className="font-light text-gray-500 text-sm sm:text-base">
                  Точность
                </h6>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-20 mb-4 sm:mb-6">
            <LinkToSurvey />
          </div>
          <h6 className="text-gray-500 text-sm sm:text-base text-center sm:text-left">
            Всего 10 минут • Бесплатно • Конфиденциально
          </h6>
        </div>

        <div className="flex-1 w-full mt-8 sm:mt-10 lg:mt-0">
          <img
            src="/study.svg"
            alt="Students"
            className="rounded-2xl sm:rounded-3xl w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
