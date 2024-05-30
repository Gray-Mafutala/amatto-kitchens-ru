import React from "react";

const HeroSection = () => {
  return (
    <section
      className="section-full-w bg-bg-hero-section bg-no-repeat bg-cover
      bg-center flex items-center justify-center"
    >
      <div
        className="mx-auto mb-6 mt-40 px-4 text-center text-white
        flex flex-col items-center"
      >
        <h1
          className="uppercase text-white text-7xl whitespace-nowrap font-extrabold
          font-playfair-display"
        >
          КУХНИ НА ЗАКАЗ
        </h1>

        <p className="text-2xl mt-3 mb-6">
          Стильная кухня от производителя по цене на 20% ниже рынка
        </p>

        {/* benefits list */}
        <ul className="flex flex-col items-start gap-y-4 text-lg [word-spacing:2px]">
          <li>
            <span className="text-primary-yellow">Бесплатный</span> дизайн
            проект
          </li>

          <li>
            Гарантия <span className="text-primary-yellow">лучшей Цены </span>
          </li>

          <li>
            Производство от{" "}
            <span className="text-primary-yellow">25 до 45 дней</span>
          </li>

          <li>
            Гарантийное{" "}
            <span className="text-primary-yellow">обслуживание 5 лет</span>
          </li>
        </ul>

        <button
          className="mt-8 bg-primary-yellow px-6 py-4 rounded-[40px] capitalize
          text-dark-gray font-medium hover:bg-transparent hover:text-primary-yellow
          hover:shadow-[0_0_0_2px_#ffcc29] duration-300"
        >
          бесплатная консультация дизайнера
        </button>

        {/* slider dots */}
        <div className="mt-20 flex items-center justify-center gap-x-3">
          <span
            className="inline-block bg-white rounded-full min-w-3 min-h-3 w-3 h-3
            cursor-pointer hover:bg-primary-yellow duration-300"
          ></span>
          <span
            className="inline-block bg-white rounded-full min-w-3 min-h-3 w-3 h-3
            cursor-pointer hover:bg-primary-yellow duration-300"
          ></span>
          <span
            className="inline-block bg-white rounded-full min-w-3 min-h-3 w-3 h-3
            cursor-pointer hover:bg-primary-yellow duration-300"
          ></span>
          <span
            className="inline-block bg-white rounded-full min-w-3 min-h-3 w-3 h-3
            cursor-pointer hover:bg-primary-yellow duration-300"
          ></span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
