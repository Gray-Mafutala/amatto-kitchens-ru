"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuLinks = [
  { title: "Главная", link: "/" },
  { title: "О нас", link: "/about" },
  { title: "Каталог", link: "/catalog" },
  { title: "Рассрочка", link: "/installment-payment" },
  { title: "Блог", link: "/blog" },
  { title: "Контакты", link: "/contacts" },
];

type Props = {
  containerStyles: string;
  closeMobileMenu?: () => void;
};

const MenuLinks = ({ containerStyles, closeMobileMenu }: Props) => {
  const pathname = usePathname();

  return (
    <menu className={containerStyles}>
      {menuLinks.map(({ title, link }) => (
        <Link
          key={title}
          onClick={closeMobileMenu}
          href={link}
          className={
            pathname === link
              ? `capitalize text-primary-yellow font-medium relative whitespace-nowrap
                after:absolute after:-bottom-1 after:left-0 after:block after:w-full
                after:h-[2px] after:bg-primary-yellow`
              : `capitalize hover:text-primary-yellow duration-300 whitespace-nowrap`
          }
        >
          {title}
        </Link>
      ))}
    </menu>
  );
};

export default MenuLinks;
