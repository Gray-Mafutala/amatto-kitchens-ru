import Image from "next/image";
import React from "react";
import DOMPurify from "isomorphic-dompurify";
import GalleryImg1 from "@/assets/images/home-page__section-2-img-1.png";
import GalleryImg2 from "@/assets/images/home-page__section-2-img-2.png";
import GalleryImg3 from "@/assets/images/home-page__section-2-img-3.png";
import GalleryImg4 from "@/assets/images/home-page__section-2-img-4.png";
import GalleryImg5 from "@/assets/images/home-page__section-2-img-5.png";

const gallery = [
  {
    img: GalleryImg1,
    title:
      'Получите консультацию и <span class="text-primary-yellow">эскиз мебели</span>',
  },

  {
    img: GalleryImg2,
    title:
      'Подберем материалы <span class="text-primary-yellow">сочетая цену и качество</span>',
  },

  {
    img: GalleryImg3,
    title:
      'Поможем <span class="text-primary-yellow">сэкономить 20%</span> от стоимости',
  },

  {
    img: GalleryImg4,
    title:
      'Разработаем <span class="text-primary-yellow">бесплатно 3D</span> проект',
  },
];

const StillDecideSection = () => {
  const removeSpanTags = (text: string) => {
    return text.replace(/<\/?span[^>]*>/g, "");
  };

  return (
    <section
      className="flex flex-col items-center gap-y-10 mobileXL:gap-y-16
      laptop:gap-y-20"
    >
      {/* section title */}
      <h2 className="title-2-section max-w-[728px]">
        Все еще не можете определиться с выбором кухни?
      </h2>

      {/* gallery */}
      <div
        className="grid grid-cols-1 mobileXL:grid-cols-2 laptopL:grid-cols-4 gap-6
        capitalize text-white font-semibold text-lg tablet:text-xl"
      >
        {/* gallery */}
        {gallery.map(({ img, title }, index) => (
          <div
            key={index}
            className="relative flex items-end w-full h-[360px] pb-8 px-4
            rounded-[10px] cursor-pointer border-2 border-transparent
            hover:border-primary-yellow duration-300 group overflow-hidden"
          >
            <Image
              src={img}
              alt={removeSpanTags(title)}
              className="absolute left-0 top-0 w-full h-full object-cover 
              group-hover:scale-110 duration-500 rounded-lg -z-[1]"
            />

            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(title),
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StillDecideSection;
