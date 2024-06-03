"use client";

import Image from "next/image";
import WomanInFrontKitchen from "@/assets/images/home-page__woman-in-front-kitchen.png";
import Input from "@/app/_components/ui/Input";
import { useState } from "react";

const BuyInInstallmentsSection = () => {
  const [formData, setFormData] = useState({
    budgetInEuro: 3000,
    periodInMonths: 6,
    percentageInitialFee: 10,
    clientName: "",
    clientTel: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // processing
  };

  const calculateMonthlyPayment = () => {
    const initialDeposit =
      (formData.budgetInEuro * formData.percentageInitialFee) / 100;
    const remainingAmount = formData.budgetInEuro - initialDeposit;
    const monthlyPayment = remainingAmount / formData.periodInMonths;
    return monthlyPayment.toFixed(2) + "€";
  };

  return (
    <section
      id="buy-in-installments"
      className="flex flex-col items-center gap-y-10 mobileXL:gap-y-16
      laptop:gap-y-20"
    >
      <h2 className="title-2-section">Покупай в рассрочку!</h2>

      <div className="w-full flex gap-x-8">
        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="w-full bg-gray-50 rounded-[10px] p-6 mobileXL:p-8"
        >
          <header className="flex flex-col gap-y-4">
            <p className="font-bold text-lg mobileXL:text-xl">
              Ваша новая кухня без денег и предоплаты!
            </p>

            <div
              className="flex flex-col mobileL:flex-row laptop:flex-col gap-y-2
              laptopM:flex-row laptopM:items-center justify-between gap-x-8
              text-base mobileXL:text-lg capitalize font-medium"
            >
              <p>
                <span className="text-primary-yellow">*</span> рассрочка 12
                месяцев
              </p>
              <p>
                <span className="text-primary-yellow">*</span> без комиссии и
                процентов
              </p>
            </div>
          </header>

          {/* body of form */}
          <div
            className="mt-12 flex flex-col gap-6 laptopM:gap-y-10 text-base
            mobileXL:text-lg"
          >
            {/* input budget */}
            <label
              className="flex flex-col gap-y-2 mobileXL:flex-row laptop:flex-col
              laptopM:flex-row laptopM:items-center justify-between gap-x-8"
            >
              <span className="w-full">Ваш Бюджет €:</span>
              <Input
                type="number"
                name="budgetInEuro"
                value={formData.budgetInEuro}
                placeholder=""
                onChange={handleInputChange}
              />
            </label>

            {/* input period in months */}
            <label
              className="flex flex-col gap-y-2 mobileXL:flex-row laptop:flex-col
              laptopM:flex-row laptopM:items-center justify-between gap-x-8"
            >
              <span className="w-full">Промежуток Рассрочки В Месяцах:</span>
              <Input
                type="number"
                name="periodInMonths"
                value={formData.periodInMonths}
                placeholder=""
                onChange={handleInputChange}
              />
            </label>

            {/* percentage initial fee */}
            <label
              className="flex flex-col gap-y-2 mobileXL:flex-row laptop:flex-col
              laptopM:flex-row laptopM:items-center justify-between gap-x-8"
            >
              <span className="w-full">Первоначальный Взнос %:</span>
              <Input
                type="number"
                name="percentageInitialFee"
                value={formData.percentageInitialFee}
                placeholder=""
                onChange={handleInputChange}
              />
            </label>
          </div>

          {/* calculation result */}
          <p
            className="mt-8 bg-gray-200 py-4 px-6 mobileXL:px-8 -mx-6 mobileXL:-mx-8
            flex flex-col mobileM:flex-row mobileM:items-center justify-between gap-x-8
            text-lg mobileXL:text-xl font-semibold whitespace-nowrap"
          >
            <span>ЕЖЕМЕСЯЧНЫЙ ПЛАТЁЖ:</span>
            <span>{calculateMonthlyPayment()}</span>
          </p>

          {/* info about client */}
          <div
            className="mt-8 flex flex-col mobileXL:flex-row laptop:flex-col laptopL:flex-row items-center
            justify-between gap-x-8 gap-y-4"
          >
            <Input
              type="text"
              name="clientName"
              value={formData.clientName}
              placeholder="Ваш Имя:"
              onChange={handleInputChange}
            />

            <Input
              type="tel"
              name="clientTel"
              value={formData.clientTel}
              placeholder="Ваш телефон:"
              onChange={handleInputChange}
            />
          </div>

          {/* btn submit */}
          <button
            type="submit"
            className="mt-6 mobileXL:mt-8 text-lg tablet:text-xl px-5 mobileXL:px-8
            tablet:px-10 rounded-[42px] py-3 font-medium text-dark-gray capitalize
            bg-primary-yellow hover:text-primary-yellow hover:bg-transparent 
            hover:shadow-[0_0_0_2px_#ffcc29] duration-300 w-full whitespace-nowrap
            truncate"
          >
            Отправить заявку на рассрочку
          </button>
        </form>

        {/* img */}
        <div className="w-full rounded-[10px] hidden laptop:block">
          <Image
            src={WomanInFrontKitchen}
            alt="женщина перед кухней"
            className="w-full h-full object-cover rounded-[10px]"
          />
        </div>
      </div>
    </section>
  );
};

export default BuyInInstallmentsSection;
