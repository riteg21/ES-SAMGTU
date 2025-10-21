export const Question = ({ question, handleAnswerSelect }) => {
  if (!question) {
    return (
      <div className="w-full text-center py-8">
        <p className="text-gray-500">Вопрос не загружен</p>
      </div>
    );
  }

  if (!question.answers || !Array.isArray(question.answers)) {
    return (
      <div className="w-full text-center py-8">
        <p className="text-gray-500">Варианты ответов не найдены</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-4 sm:mb-6 md:mb-8">
        <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 break-words leading-tight">
          {question.question || "Вопрос не указан"}
        </h3>
      </div>
      <div className="space-y-3 sm:space-y-4 md:space-y-5">
        {question.answers.map((answer, index) => (
          <div key={index} className="flex justify-center">
            <button
              onClick={() => handleAnswerSelect(index)}
              className="py-3 px-4 sm:py-4 sm:px-5 md:py-5 text-sm sm:text-base md:text-lg font-semibold text-gray-600 focus:outline-none bg-white rounded-xl sm:rounded-2xl border border-gray-200 hover:bg-blue-600 hover:text-white w-full transition-all duration-300 ease-in-out hover:shadow-lg active:scale-110 break-words"
            >
              {answer.text || `Вариант ${index + 1}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
