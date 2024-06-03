"use client";

import { useState } from "react";
import Input from "@/app/_components/ui/Input";

const GetFreeKitchenDesignSection = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // processing
  };

  return (
    <section
      className="section-full-w py-12 bg-primary-yellow bg-subscription-section-mask
      bg-no-repeat bg-center bg-cover flex items-center justify-center"
    >
      <div className="flex flex-col items-center px-4 text-center">
        <h2
          className="text-2xl mobileL:text-3xl mobileXL:text-4xl tablet:text-[42px]
          !leading-tight max-w-[760px] font-playfair-display font-bold"
        >
          Получите бесплатно дизайн проект кухни и консультацию дизайнера
        </h2>

        <p className="mt-6 text-lg mobileXL:text-xl">
          Вы узнаете точную
          <span className="font-bold">стоимость вашей кухни</span>и получите{" "}
          <span className="font-bold whitespace-nowrap">3D-проект</span>
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-4 mobileM:flex-row mobileM:items-center
          gap-x-8"
        >
          <Input
            type="tel"
            name="phoneSubscription"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ваш телефон"
            addStyles="!border-transparent !border-2 hover:!border-dark-gray
            focus:!border-dark-gray"
          />

          <button
            className="bg-dark-gray px-8 py-3 text-white font-medium
            rounded-[28px] hover:bg-transparent hover:text-dark-gray
            hover:shadow-[0_0_0_2px_#39373a] duration-300 select-none"
          >
            Записаться
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetFreeKitchenDesignSection;
