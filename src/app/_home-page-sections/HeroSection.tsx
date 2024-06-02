import React from "react";
import DOMPurify from "isomorphic-dompurify";

const advantages = [
  '<span class="text-primary-yellow">Бесплатный</span> дизайн проект',
  'Гарантия <span class="text-primary-yellow">лучшей Цены</span>',
  'Производство от <span class="text-primary-yellow">25 до 45 дней</span>',
  'Гарантийное <span class="text-primary-yellow">обслуживание 5 лет</span> ',
];

const HeroSection = () => {
  return (
    <section
      className="section-full-w animate-changeBgHeroSection bg-cover bg-center
      bg-no-repeat bg-fixed relative after:absolute after:block after:w-full
      after:h-full after:left-0 after:top-0 after:bg-black/60
      flex items-center justify-center"
    >
      <div
        className="z-[1] mb-8 px-4 text-center text-white
        mt-8 mobileXL:mt-20 tablet:mt-24 laptop:mt-32 laptopM:mt-40
        flex flex-col items-center"
      >
        <h1
          className="uppercase text-white whitespace-nowrap font-playfair-display 
          text-[32px] mobileL:text-4xl mobileXL:text-6xl tablet:text-7xl
          font-extrabold"
        >
          КУХНИ НА ЗАКАЗ
        </h1>

        <p className="text-xl tablet:text-2xl mt-3 mb-6">
          Стильная кухня от производителя по цене на 20% ниже рынка
        </p>

        {/* benefits list */}
        <ul
          className="flex flex-col items-start gap-y-4 text-base
          tablet:text-lg"
        >
          {advantages.map((advantage, index) => (
            <li key={index} className="flex items-center gap-x-4">
              {/* heart icon */}
              <span>
                <svg className="w-[22px] h-[22px] fill-none">
                  <path
                    fill="#ffcc29"
                    fillRule="evenodd"
                    d="M11 11H5.5C2.475 11 0 13.477 0 16.502c0 3.025 2.475 5.5 5.5 5.5H22.002v-16.5c0-3.026-2.476-5.501-5.5-5.501C13.475 0 11 2.475 11 5.5V11Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              {/* text */}
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(advantage),
                }}
              />
            </li>
          ))}
        </ul>

        <button
          className="mt-8 bg-primary-yellow px-4 mobileXL:px-6 py-4 rounded-[40px]
          capitalize text-dark-gray font-medium hover:bg-transparent text-sm mobileM:text-base
          hover:text-primary-yellow hover:shadow-[0_0_0_2px_#ffcc29] duration-300"
        >
          бесплатная консультация дизайнера
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
