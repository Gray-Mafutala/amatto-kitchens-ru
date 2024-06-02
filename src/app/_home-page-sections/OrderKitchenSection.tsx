"use client";

import React from "react";
import useCountDown from "../hooks/useCountDown";
import Image from "next/image";
import YellowTriangleMoika from "@/assets/images/yellow-triangle-moika.png";

const OrderKitchenSection = () => {
  const [day, hour, min, sec] = useCountDown({
    day: 4,
    hour: 9,
    min: 34,
    sec: 32,
  });

  return (
    <section
      className="section-full-w bg-order-kitchen bg-cover bg-center bg-no-repeat
      flex justify-center laptop:justify-end relative"
    >
      {/* yellow tiangle image */}
      <Image
        src={YellowTriangleMoika}
        alt=""
        className="laptop:absolute laptop:left-0 laptop:top-0 laptop:max-w-[440px]
        laptopM:max-w-[520px] laptop:w-full laptop:h-full hidden laptop:block"
      />

      <div
        className="z-[1] my-8 mobileXL:my-10 tablet:my-12 px-4 text-center
        text-white mr-0 laptop:mr-40 laptopM:mr-60 laptopL:mr-72
        flex flex-col items-center"
      >
        <h3
          className="title-2-section text-3xl mobileXL:text-4xl tablet:text-[42px]
          capitalize text-white font-commissioner"
        >
          закажи <span className="text-primary-yellow">Кухню</span>
        </h3>

        <p className="mt-12 mobileXL:mt-16 capitalize text-base tablet:text-lg text-white">
          До 31 марта
        </p>

        <h4 className="mt-2 font-semibold text-2xl tablet:text-[32px]">
          Получи
        </h4>

        <button
          className="mt-4 text-lg tablet:text-xl px-5 mobileXL:px-8
          rounded-[42px] py-3 font-medium text-dark-gray bg-primary-yellow
          hover:text-primary-yellow hover:bg-transparent
          hover:shadow-[0_0_0_2px_#ffcc29] duration-300"
        >
          Посудомоечную Машину
        </button>

        <h4 className="mt-6 font-semibold text-2xl mobileXL:3xl tablet:text-4xl">
          В подарок
        </h4>

        {/* countdown timer */}
        <div
          className="mt-4 mobileXL:mt-6 bg-primary-yellow rounded-[10px] py-2 px-4 mobileXL:px-6
          flex justify-center gap-x-2 mobileL:gap-x-3 mobileXL:gap-x-4 text-dark-gray
          text-xl mobileL:text-2xl tablet:text-3xl font-semibold"
        >
          <p className="flex flex-col items-center">
            <span className="w-9 mobileL:w-10 tablet:w-16">{day}</span>
            <span className="text-xs mobileM:text-sm mobileXL:text-base font-normal">
              Дней
            </span>
          </p>
          <span>:</span>

          <p className="flex flex-col items-center">
            <span className="w-9 mobileL:w-10 tablet:w-16">
              {hour}
            </span>
            <span className="text-xs mobileM:text-sm mobileXL:text-base font-normal">
              Часов
            </span>
          </p>
          <span>:</span>

          <p className="flex flex-col items-center">
            <span className="w-9 mobileL:w-10 tablet:w-16">{min}</span>
            <span className="text-xs mobileM:text-sm mobileXL:text-base font-normal">
              Минут
            </span>
          </p>
          <span>:</span>

          <p className="flex flex-col items-center">
            <span className="w-9 mobileL:w-10 tablet:w-16">{sec}</span>
            <span className="text-xs mobileM:text-sm mobileXL:text-base font-normal">
              Секунд
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderKitchenSection;
