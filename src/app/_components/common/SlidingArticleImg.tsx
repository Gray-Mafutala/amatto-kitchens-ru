"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

import SliderImg1 from "@/assets/images/home-page__bg-1-hero-section.jpg";
import SliderImg2 from "@/assets/images/home-page__bg-2-hero-section.jpg";
import SliderImg3 from "@/assets/images/home-page__bg-3-hero-section.jpg";

const sliders = [
  { img: SliderImg1, alt: "", link: "", id: "cover-1" },
  { img: SliderImg2, alt: "", link: "", id: "cover-2" },
  { img: SliderImg3, alt: "", link: "", id: "cover-3" },
];

const SlidingArticleImg = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide + 1 < sliders.length ? prevSlide + 1 : 0
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : sliders.length - 1
    );
  };

  const goToSpecificSlide = (numSlide: number) => setCurrentSlide(numSlide);

  useEffect(() => {
    if (autoPlay === false) return;
    const clear = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide + 1 < sliders.length ? prevSlide + 1 : 0
      );
    }, 2500);

    return () => clearInterval(clear);
  }, [autoPlay]);

  return (
    <div
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
      className="relative w-full"
    >
      {/* left button */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full
        text-white shadow-md bg-dark-gray/60 hover:text-primary-yellow
        duration-300 ease-out active:scale-95 z-10"
      >
        <BsArrowLeftCircle className="text-[1.5rem] mobileM:text-[2rem]" />
      </button>

      {/* right button */}
      <button
        onClick={goToNextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full
        text-white shadow-md bg-dark-gray/60 hover:text-primary-yellow
        duration-300 ease-out active:scale-95 z-10"
      >
        <BsArrowRightCircle className="text-[1.5rem] mobileM:text-[2rem]" />
      </button>

      {/* dots navigation */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 
        flex items-center gap-x-[6px] z-10"
      >
        {sliders.map(({ id }, index) => (
          <span
            key={id}
            onClick={() => goToSpecificSlide(index)}
            className={
              index === currentSlide
                ? "h-2 w-2 rounded-md cursor-pointer bg-primary-yellow"
                : `h-2 w-2 rounded-full cursor-pointer bg-white
                    hover:bg-primary-yellow duration-200`
            }
          ></span>
        ))}
      </div>

      {/* slides */}
      <div
        className="relative flex h-64 mobileL:h-[420px] overflow-x-hidden rounded-2xl
        overflow-hidden"
      >
        {sliders.map(({ img, alt, link, id }, index) => (
          <Link key={id} href={link}>
            <Image
              src={img}
              alt={alt}
              className={
                index === currentSlide
                  ? `absolute w-full h-full left-0 top-0 object-cover 
                    transition-all duration-500 ease-out hover:scale-110`
                  : index > currentSlide
                  ? `absolute w-full h-full left-0 top-0 object-cover 
                    translate-x-[100%] transition-transform duration-500
                    ease-in-out`
                  : `absolute w-full h-full left-0 top-0 object-cover 
                    -translate-x-[100%] transition-transform duration-500
                    ease-in-out`
              }
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SlidingArticleImg;
