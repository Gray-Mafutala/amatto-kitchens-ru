import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <main className="mt-10 flex items-center justify-center">
      <div className="bg-dark-gray px-5 mobileXL:px-8 py-5 rounded-[10px] flex flex-col gap-y-8">
        <h1
          className=" text-white whitespace-nowrap font-playfair-display 
          text-2xl mobileL:text-4xl mobileXL:text-6xl font-extrabold"
        >
          Не найдено - 404!
        </h1>

        <Link
          href="/"
          className="self-center mobileXL:mt-8 text-lg tablet:text-xl px-5
          mobileXL:px-8 tablet:px-10 rounded-[42px] py-3 font-medium
          text-dark-gray bg-primary-yellow hover:text-primary-yellow
          hover:bg-transparent hover:shadow-[0_0_0_2px_#ffcc29] duration-300
          whitespace-nowrap"
        >
          Вернуться на главную
        </Link>
      </div>
    </main>
  );
};

export default PageNotFound;
