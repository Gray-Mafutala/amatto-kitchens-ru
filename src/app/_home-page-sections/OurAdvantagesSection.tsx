import React from "react";

import WarantyBestPriceIcon from "@/assets/images/warranty-best-price-icon.svg";
import WarantyPaymentIcon from "@/assets/images/warranty-payment-icon.svg";
import WarantyTimeIcon from "@/assets/images/warranty-time-icon.svg";
import WarantyQualityIcon from "@/assets/images/warranty-quality-icon.svg";
import Image from "next/image";

const ourAdvantages = [
  {
    icon: WarantyBestPriceIcon,
    title: "ГАРАНТИЯ ЛУЧШЕЙ ЦЕНЫ",
    outline:
      "Мы производители, поэтому сможем предложить вам лучшую стоимость под ваш запрос.",
  },
  {
    icon: WarantyPaymentIcon,
    title: "ОПЛАТА В РАССРОЧКУ",
    outline:
      "Получи сейчас желаемую кухню без аванса и первоначального взноса, оплачивайте равными платежами в течение 12 месяцев.",
  },
  {
    icon: WarantyTimeIcon,
    title: "Гарантия исполнения в срок",
    outline:
      "Произведем вашу кухню по индивидуальному проекту за 25 - 45 дней.",
  },
  {
    icon: WarantyQualityIcon,
    title: "Гарантия высокого качества",
    outline:
      "Мы гарантируем 100% качество без брака. Проводим пробный монтаж кухни в цеху, проверяя тем самым ее качество и все детали.",
  },
];

const OurAdvantagesSection = () => {
  return (
    <section
      className="flex flex-col items-center gap-y-10 mobileXL:gap-y-16
      laptop:gap-y-20"
    >
      {/* section title */}
      <h2 className="title-2-section">Наши работы</h2>

      <div className="grid grid-cols-1 mobileXL:grid-cols-2 laptopM:grid-cols-4 gap-6">
        {ourAdvantages.map(({ icon, title, outline }) => (
          <div
            key={title}
            className="w-full py-7 px-5 rounded-[10px] bg-white text-center
            shadow-[0_2px_8px_0px_#00000026] flex flex-col items-center gap-y-5
            cursor-pointer hover:scale-105 group duration-300"
          >
            <Image
              src={icon}
              alt={title}
              className="w-12 h-12 object-contain"
            />

            <h3
              className="font-playfair-display uppercase text-xl  mobileXL:text-2xl
              font-semibold group-hover:text-primary-yellow duration-300"
            >
              {title}
            </h3>

            <p className="capitalize"> {outline} </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurAdvantagesSection;
