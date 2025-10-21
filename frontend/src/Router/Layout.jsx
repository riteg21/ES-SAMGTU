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
          <header className="flex items-center justify-center px-4 py-1 sm:px-6 lg:px-40 lg:py-4 lg:justify-between bg-white">
            <Link to={"/"}>
              <img
                src="/logo.svg"
                alt="Логотип"
                className="w-25 h-25 sm:w-10 sm:h-10 lg:w-auto lg:h-auto"
              />
            </Link>

            <div className="hidden md:flex space-x-6 lg:space-x-10 text-gray-500 font-medium">
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
              <div className="px-4 py-6 lg:py-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
                  <div className="flex-shrink-0 me-8">
                    <img
                      src="/logo.svg"
                      alt="Логотип СамГТУ"
                      className="w-30 h-30 md:w-30 md:h-30"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-8 md:grid-cols-4 flex-1">
                    <div>
                      <ul className="text-gray-500 font-semibold">
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
                      <ul className="text-gray-500 font-semibold">
                        <li className="mb-4">
                          <h3 className="text-gray-700 font-bold">
                            Приемная комиссия
                          </h3>
                          +7 (800) 302-17-71
                        </li>
                        <li className="mb-4">
                          <h3 className="text-gray-700 font-bold">
                            Приемная комиссия
                          </h3>
                          <h3 className="text-gray-700 font-bold">
                            Заочное обучение
                          </h3>
                          + 7 (846) 279-03-58
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-gray-500 font-bold">
                        <li className="mb-4">
                          <a
                            href="https://priem.samgtu.ru/"
                            className="hover:text-blue-800"
                          >
                            ПОСТУПАЮЩИМ
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href="https://samgtu.ru/students/students"
                            className="hover:text-blue-800"
                          >
                            ОБУЧАЮЩИМСЯ
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href="https://samgtu.ru/business/business"
                            className="hover:text-blue-800"
                          >
                            БИЗНЕСУ
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href="https://samgtu.ru/science/science"
                            className="hover:text-blue-800"
                          >
                            НАУКА
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href="https://samgtu.ru/contacts"
                            className="hover:text-blue-800"
                          >
                            КОНТАКТЫ
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-gray-500 font-semibold">
                        <li className="mb-4">
                          <a
                            href="https://samgtu.ru/bachelors/bachelors-dormitory"
                            className="hover:text-blue-800"
                          >
                            Общежития
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href="https://military.samgtu.ru/"
                            className="hover:text-blue-800"
                          >
                            Военнный учебный центр
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href="https://samgtu.ru/admission/admission-faq"
                            className="hover:text-blue-800"
                          >
                            Часто задаваемые вопросы
                          </a>
                        </li>
                        <li className="mb-4">
                          <a
                            href="https://mail.samgtu.ru/"
                            className="hover:text-blue-800"
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
