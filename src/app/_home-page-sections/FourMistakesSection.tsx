import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";

const fourMistakesData = [
  {
    title: "Проект самостоятельно или по бумажке?",
    outline:
      "Не удобно расположены зоны складирования, не предусмотрено место для хранения, не удобно и раздражает.",
  },
  {
    title: "Риски при покупке",
    outline:
      "Фурнитура низкого качества, нет гарантии качества, при браке нет с кого спросить, получаете не то, за что платили.",
  },
  {
    title: "Проблемы с Частным Мастером",
    outline:
      "Не соблюдение технологии изготовления, сроки и качество не указаны, через 6 месяцев требуется замена материалов.",
  },
  {
    title: "Известная компания или бренд",
    outline:
      "Известная компания или бренд имеет узнаваемый логотип, высокое качество продукции и надежную репутацию.",
  },
];

const FourMistakesSection = () => {
  return (
    <section
      className="flex flex-col items-center gap-y-10 mobileXL:gap-y-16
      laptop:gap-y-20"
    >
      {/* section title */}
      <h2 className="title-2-section max-w-[460px]">
        Четыре ошибки при выборе кухни
      </h2>

      <div
        className="grid grid-cols-1 mobileXL:grid-cols-2 laptopM:grid-cols-4
        gap-6"
      >
        {fourMistakesData.map(({ title, outline }, index) => (
          <div
            key={title}
            className="w-full py-7 px-5 rounded-[10px] bg-white text-center
            shadow-[0_2px_8px_0px_#00000026] flex flex-col items-center gap-y-5
            cursor-pointer hover:scale-105 hover:bg-primary-yellow group
            duration-300"
          >
            {index === 0 && (
              <TbCircleNumber1Filled
                className="text-5xl mobileXL:text-6xl
                text-primary-yellow group-hover:text-dark-gray"
              />
            )}

            {index === 1 && (
              <TbCircleNumber2Filled
                className="text-5xl mobileXL:text-6xl
                text-primary-yellow group-hover:text-dark-gray"
              />
            )}

            {index === 2 && (
              <TbCircleNumber3Filled
                className="text-5xl mobileXL:text-6xl
                text-primary-yellow group-hover:text-dark-gray"
              />
            )}

            {index === 3 && (
              <TbCircleNumber4Filled
                className="text-5xl mobileXL:text-6xl
                text-primary-yellow group-hover:text-dark-gray duration-300"
              />
            )}

            <h3
              className="font-playfair-display uppercase text-xl mobileXL:text-2xl
              font-semibold"
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

export default FourMistakesSection;
