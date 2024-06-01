import Image from "next/image";
import React from "react";
import GalleryImg1 from "@/assets/images/home-page__section-2-img-1.png";
import GalleryImg2 from "@/assets/images/home-page__section-2-img-2.png";
import GalleryImg3 from "@/assets/images/home-page__section-2-img-3.png";
import GalleryImg4 from "@/assets/images/home-page__section-2-img-4.png";
import GalleryImg5 from "@/assets/images/home-page__section-2-img-5.png";

const StillDecideSection = () => {
  return (
    <section className="flex flex-col items-center gap-y-12">
      <h2 className="title-2-section max-w-[728px]">
        Все еще не можете определиться с выбором кухни?
      </h2>

      <div
        className="grid grid-cols-1 mobileL:grid-cols-2 mobileXL:grid-cols-3
        tablet:grid-cols-4 laptop:grid-cols-5 gap-6
        capitalize text-white font-semibold text-lg tablet:text-xl"
      >
        {/* img1 */}
        <div className="rounded-lg w-56 flex items-end pb-8 relative pt-60 px-5">
          <Image
            src={GalleryImg1}
            alt="Получите консультацию и эскиз мебели"
            className="absolute left-0 top-0 w-full h-full object-contain -z-[1]"
          />

          <p>
            Получите консультацию и{" "}
            <span className="text-primary-yellow">эскиз мебели</span>
          </p>
        </div>

        {/* img2 */}
        <div className="rounded-lg w-56 min-h-[370px] relative">
          <Image
            src={GalleryImg2}
            alt="Подберем материалы сочетая цену и качество"
            className="absolute left-0 top-0 w-full h-full object-contain -z-[1]"
          />

          <p className="px-5 pb-8 pt-60">
            Подберем материалы{" "}
            <span className="text-primary-yellow">сочетая цену и качество</span>
          </p>
        </div>

        {/* img3 */}
        <div className="rounded-lg w-56 min-h-[370px] relative">
          <Image
            src={GalleryImg3}
            alt="Подберем фурнитуру для удобства и комфорта"
            className="absolute left-0 top-0 w-full h-full object-contain -z-[1]"
          />

          <p className="px-5 pb-8 pt-60">
            Подберем фурнитуру для{" "}
            <span className="text-primary-yellow">удобства и комфорта</span>
          </p>
        </div>

        {/* img4 */}
        <div className="rounded-lg w-56 min-h-[370px] relative">
          <Image
            src={GalleryImg4}
            alt="Разработаем бесплатно 3D проект"
            className="absolute left-0 top-0 w-full h-full object-contain -z-[1]"
          />

          <p className="px-5 pb-8 pt-60">
            Разработаем{" "}
            <span className="text-primary-yellow">бесплатно 3D</span> проект
          </p>
        </div>

        {/* img5 */}
        <div className="rounded-lg w-56 min-h-[370px] relative">
          <Image
            src={GalleryImg5}
            alt="Поможем сэкономить 20% от стоимости"
            className="absolute left-0 top-0 w-full h-full object-contain -z-[1]"
          />

          <p className="px-5 pb-8 pt-60">
            Поможем <span className="text-primary-yellow">сэкономить 20%</span>{" "}
            от стоимости
          </p>
        </div>
      </div>
    </section>
  );
};

export default StillDecideSection;
