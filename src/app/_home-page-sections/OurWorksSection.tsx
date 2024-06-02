import React from "react";
import Image from "next/image";
import GalleryImg1 from "@/assets/images/our-works-gallery-img-1.png";
import GalleryImg2 from "@/assets/images/our-works-gallery-img-2.png";
import GalleryImg3 from "@/assets/images/our-works-gallery-img-3.png";
import CircleWithYellowArrow from "@/assets/images/circle-with-yellow-arrow.svg";

const gallery = [
  GalleryImg1,
  GalleryImg2,
  GalleryImg3,
  GalleryImg1,
  GalleryImg2,
  GalleryImg3,
  GalleryImg1,
  GalleryImg2,
  GalleryImg3,
];

const OurWorksSection = () => {
  return (
    <section
      className="flex flex-col items-center"
    >
      {/* section title */}
      <h2 className="title-2-section">Наши работы</h2>

      {/* gallery */}
      <div
        className="mt-10 mobileXL:mt-16 laptop:mt-20
        grid grid-cols-1 mobileXL:grid-cols-2 laptopM:grid-cols-3
        gap-6 w-full"
      >
        {gallery.map((img, index) => (
          // card
          <div
            key={index}
            className="relative flex items-end w-full h-72 mobileXL:h-[360px] pb-8
            rounded-[10px] cursor-pointer border-2 border-transparent
            hover:border-primary-yellow duration-300 group overflow-hidden"
          >
            <Image
              src={img}
              alt=""
              className="absolute left-0 top-0 w-full h-full object-cover 
              group-hover:scale-110 duration-500 rounded-lg -z-[1]"
            />

            <div className="flex flex-col gap-y-6 w-full">
              <h3
                className="text-3xl tablet:text-4xl font-semibold text-white
                font-playfair-display ml-7"
              >
                Severin
              </h3>

              <div className="flex items-center justify-between w-full gap-x-6">
                <div
                  className="bg-black/60 rounded-r-[10px] flex flex-col
                  items-center pt-1 pb-2 pl-4 tablet:pl-7 pr-4"
                >
                  <p
                    className="text-white text-sm tablet:text-base
                    self-start flex flex-col mobileM:block mobileXL:flex
                    mobileXL:flex-col tablet:block"
                  >
                    <span
                      className="font-semibold text-primary-yellow 
                      text-2xl tablet:text-[32px] mr-2"
                    >
                      11 654
                    </span>
                    ЛЕЙ / МЕСЯЦ
                  </p>

                  <p className="lowercase text-white/70 text-sm">
                    БЕЗ ПЕРВОГО ВЗНОСА - 12 месяцев
                  </p>
                </div>

                <Image
                  src={CircleWithYellowArrow}
                  alt=""
                  className="w-10 h-10 object-contain mr-7 scale-0 group-hover:scale-100 duration-200"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="mt-6 mobileXL:mt-8 text-lg tablet:text-xl px-5 mobileXL:px-8 tablet:px-14
          rounded-[42px] py-3 font-medium text-dark-gray bg-primary-yellow
          hover:text-primary-yellow hover:bg-transparent
          hover:shadow-[0_0_0_2px_#ffcc29] duration-300"
      >
        Раскрыть Ещё
      </button>
    </section>
  );
};

export default OurWorksSection;
