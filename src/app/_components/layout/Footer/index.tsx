"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AmattoLogo from "@/assets/images/amatto-logo-black.svg";
import ViberFixedIcon from "@/assets/images/viber-icon.svg";

import FacebookIcon from "@/assets/images/social-fb.svg";
import LinkedInIcon from "@/assets/images/social-in.svg";
import InstaIcon from "@/assets/images/social-insta.svg";
import ViberIcon from "@/assets/images/social-viber.svg";
import WhatsappIcon from "@/assets/images/social-whatsapp.svg";
import YoutubeIcon from "@/assets/images/social-ytb.svg";
import ContactList from "./ContactList";

const socialLinks = [
  FacebookIcon,
  LinkedInIcon,
  InstaIcon,
  ViberIcon,
  YoutubeIcon,
  WhatsappIcon,
];

const menuLinks = [
  { title: "Главная", link: "/" },
  { title: "О нас", link: "/#about-us" },
  { title: "Каталог", link: "/#catalog" },
  { title: "Рассрочка", link: "/#buy-in-installments" },
  { title: "Блог", link: "/blog" },
  { title: "Контакты", link: "/#contacts" },
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer
      className="mt-10 tablet:mt-16 laptop:mt-20 section-full-w mobileXL:mb-6 tablet:mb-8 laptop:mb-16
      responsive-px pb-8 py-6 mobileL:py-8 mobileXL:py-10 laptop:py-14 bg-gray-50
      flex flex-col gap-y-12"
    >
      {/* button to call */}
      <Link
        href="tel:+37368159759"
        className="fixed top-[68%] right-4 w-14 h-14 p-2 bg-primary-yellow
        rounded-full drop-shadow-xl hover:drop-shadow-[1px_1px_8px_#ffcc29]
        active:scale-95 duration-300 select-none z-20"
      >
        <Image
          src={ViberFixedIcon}
          alt=""
          className="w-full h-full object-contain"
        />
      </Link>

      <div className="flex flex-col laptop:flex-row gap-x-20 gap-y-10 justify-between">
        {/* left content */}
        <div
          className="flex items-center text-center laptop:items-start
          laptop:text-left flex-col gap-y-10"
        >
          {/* site logo */}
          <Link
            href="/"
            className=" laptop:self-start hover:opacity-70 hover:scale-[1.01] duration-300"
          >
            <Image
              src={AmattoLogo}
              alt="Amatto Kitchens logo"
              className="min-w-32 w-32 mobileXL:w-60 object-contain"
            />
          </Link>

          {/* social links */}
          <div className="flex items-center gap-x-3 whitespace-nowrap">
            {socialLinks.map((icon, index) => (
              <Link
                key={index}
                href=""
                className=" hover:scale-125 active:scale-100 duration-300"
              >
                <Image
                  src={icon}
                  alt=""
                  className="min-w-8 w-8 object-contain"
                />
              </Link>
            ))}
          </div>

          {/* menu links */}
          <menu className="flex flex-col items-center laptop:items-start gap-y-3">
            {menuLinks.map(({ title, link }) => (
              <Link
                key={title}
                href={link}
                className={
                  pathname === link
                    ? `capitalize text-primary-yellow font-medium mb-2 relative
                    whitespace-nowrap after:absolute after:-bottom-1 after:left-0
                    after:block after:w-full after:h-[2px] after:bg-primary-yellow`
                    : `capitalize hover:text-primary-yellow duration-300 whitespace-nowrap`
                }
              >
                {title}
              </Link>
            ))}
          </menu>
        </div>

        {/* right content - lists */}
        <div
          id="contacts"
          className="grid grid-cols-1 mobileXL:grid-cols-2 gap-x-16 gap-y-10
          self-center laptop:self-stretch"
        >
          <ContactList />
          <ContactList />
          <ContactList />
          <ContactList />
        </div>
      </div>

      <p className="text-center">© 2024 Amatto. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
