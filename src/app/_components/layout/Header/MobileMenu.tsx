"use client";

import React, { useEffect } from "react";
import MenuLinks from "./MenuLinks";
import ClientPortal from "../../common/ClientPortal";
import RightContent from "./RightContent";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

const MobileMenu = ({ isOpen, onClose }: Props) => {
  useEffect(() => {
    if (isOpen === true) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <ClientPortal>
      <div
        onClick={onClose}
        className={
          isOpen
            ? `fixed inset-0 w-full h-full bg-black/60 backdrop-blur-sm z-20`
            : `fixed inset-0 w-full h-full bg-black/60 backdrop-blur-sm z-20 translate-x-[100%]`
        }
      >
        {/* outer container to add scrollbar */}
        <div
          key={new Date().getTime()}
          onClick={(e) => e.stopPropagation()}
          className="overflow-y-auto pt-20 mobileXL:pt-28 tablet:pt-32 pb-6 px-4
          bg-white block w-full h-screen mobileL:max-w-md ml-auto
          opacity-0 translate-x-5 animate-smoothAppearHorizontal"
        >
          {/* inner container */}
          <div className="flex flex-col gap-y-8">
            {/* menu links */}
            <MenuLinks
              containerStyles="flex flex-col items-start gap-y-5"
              closeMobileMenu={onClose}
            />

            {/* right content - tel + lang */}
            <RightContent
              containerStyles="flex flex-col items-start gap-y-5 tablet:hidden"
              btnTelAddStyles="text-base py-2 px-5"
              closeMobileMenu={onClose}
            />
          </div>
        </div>
      </div>
    </ClientPortal>
  );
};

export default MobileMenu;
