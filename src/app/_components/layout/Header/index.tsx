"use client";

import Link from "next/link";
import Image from "next/image";
import AmattoLogo from "@/assets/images/amatto-logo-black.svg";
import { useState } from "react";
import MenuLinks from "./MenuLinks";
import RightContent from "./RightContent";
import { IoIosMenu } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMobileMenu = () => setMobileMenu((value) => !value);
  const closeMobileMenu = () => setMobileMenu(false);

  return (
    <>
      {/* MobileMenu */}
      <MobileMenu isOpen={mobileMenu} onClose={closeMobileMenu} />

      {/* Header itself */}
      <header
        className="section-full-w z-30 bg-white flex justify-center items-center
        pt-1 pb-3 mobileXL:py-5 tablet:py-7"
      >
        <nav
          className="responsive-px flex items-center justify-between gap-x-16 w-full"
        >
          {/* site logo */}
          <Link
            href="/"
            className="hover:opacity-70 hover:scale-[1.01] duration-300"
          >
            <Image
              src={AmattoLogo}
              alt="Amatto Kitchens logo"
              className="min-w-32 w-32 mobileXL:w-36 object-contain"
            />
          </Link>

          {/* menu links */}
          <MenuLinks
            containerStyles="hidden laptopM:flex items-center gap-x-8 laptopL:gap-x-16"
            closeMobileMenu={closeMobileMenu}
          />

          {/* RightContent + btn to toggle MobileMenu */}
          <div className="flex items-center gap-x-5">
            {/* right content - tel + lang */}
            <RightContent
              containerStyles="hidden tablet:flex items-center gap-x-5"
              btnTelAddStyles="text-lg py-2 px-5"
              closeMobileMenu={closeMobileMenu}
            />

            {/* btn to toggle MobileMenu */}
            <button
              onClick={toggleMobileMenu}
              className="hover:text-primary-yellow duration-200 laptopM:hidden"
            >
              {mobileMenu ? <CgClose size={32} /> : <IoIosMenu size={32} />}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
