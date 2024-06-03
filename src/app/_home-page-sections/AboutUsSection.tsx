import React from "react";
import Image from "next/image";
import TatianaAvatar from "@/assets/images/tatiana-avatar.png";
import SvetlanaAvatar from "@/assets/images/svetlana-avatar.png";
import ChristianAvatar from "@/assets/images/christian-avatar.png";

const aboutUsData = [
  {
    img: TatianaAvatar,
    name: "Татьяна",
    job: "Дизайнер",
    comment:
      "Кухня должна быть одновременно красивой и удобной. Любит сложные, нестандартные и яркие проекты.",
  },
  {
    img: SvetlanaAvatar,
    name: "Светлана",
    job: "Дизайнер",
    comment:
      "Дизайнер с 20 летним опытом работы с мебелью. Работала на крупнейших молдавских фабриках, досконально разбирается в устройстве кухонь.",
  },
  {
    img: ChristianAvatar,
    name: "Кристиан",
    job: "Дизайнер",
    comment:
      "Опыт работы 5 лет. Художник, преподает в школе дизайна. Делает в кухнях акцент на эстетике и красоте.",
  },
];

const AboutUsSection = () => {
  return (
    <section
      id="about-us"
      className="section-full-w py-6 bg-gray-100 flex items-center justify-center"
    >
      <div
        className="flex flex-col items-center gap-y-10 mobileXL:gap-y-16
        tablet:gap-y-20 laptop:gap-y-24 px-5 text-center"
      >
        <h2 className="title-2-section max-w-[500px]">
          Доверьте вашу кухню профессионалам
        </h2>

        {/* about us  */}
        <div
          className="grid grid-cols-1 justify-center mobileXL:grid-cols-2
          tabletM:grid-cols-3 gap-8"
        >
          {aboutUsData.map(({ img, name, job, comment }, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={img}
                alt={name}
                className="min-w-56 min-h-56 w-64 h-64 object-contain"
              />

              {/* name and job */}
              <p className="mt-5 mb-2 flex flex-col gap-y-2">
                <span className="text-lg font-semibold"> {name} </span>
                <span className="text-sm"> {job} </span>
              </p>

              {/* comment */}
              <q className="max-w-80"> {comment} </q>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
