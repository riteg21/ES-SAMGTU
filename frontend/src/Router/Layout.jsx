import { Outlet, useLocation, Link } from "react-router-dom";
import { useMemo, useRef } from "react";

export const Layout = () => {
  const headerRef = useRef(null);
  const { pathname } = useLocation();

  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  return (
    <div className="w-full min-h-screen flex flex-col" ref={headerRef}>
      {!isHomePage && (
        <div className="flex flex-col min-h-screen">
          <header className="flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-40 lg:justify-between bg-white">
            <Link to={"/"}>
              <img
                src="/logo.svg"
                alt="Логотип"
                className="w-32 h-24 sm:w-36 sm:h-27 md:w-40 md:h-30 lg:w-48 lg:h-35"
              />
            </Link>

            <div className="hidden lg:flex space-x-6 lg:space-x-10  text-gray-500 font-medium">
              <a
                href="https://samgtu.ru/bachelors/bachelors-faculty-iait"
                className="duration-200 ease-in hover:text-gray-700 transition-colors"
              >
                О нас
              </a>
              <a
                href="/"
                className="duration-200 ease-in hover:text-gray-700 transition-colors"
              >
                Как это работает
              </a>
            </div>
          </header>

          <main className="flex-1">
            <Outlet />
          </main>

          <footer className="bg-white mt-auto">
            <div className="mx-auto w-full max-w-screen-xl">
              <div className="px-7 py-6 lg:py-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
                  <div className="flex justify-center lg:justify-start">
                    <img
                      src="/logo.svg"
                      alt="Логотип СамГТУ"
                      className="w-40 h-30 sm:w-34 sm:h-18 lg:w-40 lg:h-20 lg:me-10"
                    />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8 ">
                    <div>
                      <ul className="text-gray-500 font-semibold text-sm sm:text-base">
                        <li className="mb-4">
                          443100, Самара <br />
                          Ул. Молодогвардейская, 244, главный корпус
                        </li>
                        <li className="mb-4">8 (846) 278-43-11</li>
                        <li className="mb-4">
                          <a
                            href="#"
                            className="text-blue-600 hover:text-blue-800"
                          >
                            rector@samgtu.ru
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul className="text-gray-500 font-semibold text-sm sm:text-base">
                        <li className="mb-4">
                          <h3 className="text-gray-700 font-bold mb-1">
                            Приемная комиссия
                          </h3>
                          +7 (800) 302-17-71
                        </li>
                        <li className="mb-4">
                          <h3 className="text-gray-700 font-bold mb-1">
                            Приемная комиссия
                          </h3>
                          <h3 className="text-gray-700 font-bold mb-1">
                            Заочное обучение
                          </h3>
                          +7 (846) 279-03-58
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul className="text-gray-500 font-bold text-sm sm:text-base">
                        <li className="mb-3">
                          <a
                            href="https://priem.samgtu.ru/"
                            className="hover:text-blue-800 block"
                          >
                            ПОСТУПАЮЩИМ
                          </a>
                        </li>
                        <li className="mb-3">
                          <a
                            href="https://samgtu.ru/students/students"
                            className="hover:text-blue-800 block"
                          >
                            ОБУЧАЮЩИМСЯ
                          </a>
                        </li>
                        <li className="mb-3">
                          <a
                            href="https://samgtu.ru/business/business"
                            className="hover:text-blue-800 block"
                          >
                            БИЗНЕСУ
                          </a>
                        </li>
                        <li className="mb-3">
                          <a
                            href="https://samgtu.ru/science/science"
                            className="hover:text-blue-800 block"
                          >
                            НАУКА
                          </a>
                        </li>
                        <li className="mb-3">
                          <a
                            href="https://samgtu.ru/contacts"
                            className="hover:text-blue-800 block"
                          >
                            КОНТАКТЫ
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul className="text-gray-500 font-semibold text-sm sm:text-base">
                        <li className="mb-3">
                          <a
                            href="https://samgtu.ru/bachelors/bachelors-dormitory"
                            className="hover:text-blue-800 block"
                          >
                            Общежития
                          </a>
                        </li>
                        <li className="mb-3">
                          <a
                            href="https://military.samgtu.ru/"
                            className="hover:text-blue-800 block"
                          >
                            Военный учебный центр
                          </a>
                        </li>
                        <li className="mb-3">
                          <a
                            href="https://samgtu.ru/admission/admission-faq"
                            className="hover:text-blue-800 block"
                          >
                            Часто задаваемые вопросы
                          </a>
                        </li>
                        <li className="mb-3">
                          <a
                            href="https://mail.samgtu.ru/"
                            className="hover:text-blue-800 block"
                          >
                            Почта
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <span className="text-sm text-gray-500 sm:text-center">
                    © 2014-2025{" "}
                    <a href="https://samgtu.ru/" className="hover:underline">
                      СамГТУ
                    </a>
                    . Все права защищены.
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}

      {isHomePage && <Outlet />}
    </div>
  );
};
