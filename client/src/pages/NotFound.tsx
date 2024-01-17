import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-4 items-center justify-center h-screen text-center p-10">
      <h1 className="text-4xl lg:text-6xl">Страница не найдена</h1>
      <p className="text-1xl lg:text-2xl">
        Страница не существует либо была удалена. Возможно требуется авторизация
      </p>
      <Link
        to="/"
        className="text-2xl text-blue-800 hover:underline lg:text-3xl"
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;
