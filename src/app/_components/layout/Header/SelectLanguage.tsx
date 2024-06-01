"use client";

import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import useOutsideClick from "@/app/hooks/useClickOutside";

const SelectLanguage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDisplay = () => setIsDropdownOpen((value) => !value);
  const handleClose = () => setIsDropdownOpen(false);

  const dropdownRef = useRef(null);
  useOutsideClick({ ref: dropdownRef, handler: handleClose });

  return (
    <div className="flex flex-col relative">
      {/* current language */}
      <button
        onMouseDown={toggleDisplay}
        className="flex items-center justify-center py-1 px-3 rounded-[54px]
        bg-gray-100 border-[0.5px] border-[#ddd] whitespace-nowrap
        hover:border-primary-yellow hover:shadow-[0_0_0_1px_#ffcc29]
        focus:border-primary-yellow focus:shadow-[0_0_0_1px_#ffcc29]
        duration-300"
      >
        <span>
          <svg className="w-[18px] h-3 fill-none">
            <path fill="#1739A2" d="M18 4H0v4h18V4z" />
            <path
              fill="#DB1C24"
              d="M18 8H0v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8z"
            />
            <path
              fill="#EBEBEB"
              d="M0 4h18V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v3z"
            />
          </svg>
        </span>
        <span className="capitalize ml-1 mr-[6px]">Ru</span>

        <span
          className={
            isDropdownOpen ? `rotate-180 duration-300` : `duration-300`
          }
        >
          <IoIosArrowDown size={16} />
        </span>
      </button>

      {/* list of languages */}
      {isDropdownOpen && (
        <ul
          ref={dropdownRef}
          className="absolute -right-[136px] tablet:right-0 -top-14 tablet:top-11 
            bg-dark-gray text-white rounded-lg
            py-4 shadow-[#0000003d_0px_3px_8px] flex flex-col gap-y-3"
        >
          {/* up-arrow */}
          <span
            className="absolute w-0 h-0 border-8 border-t-0 border-x-transparent
            border-b-dark-gray right-[119px] top-[70px] -rotate-90
            tablet:right-2 tablet:-top-[6px] tablet:rotate-0"
          ></span>

          {/* en */}
          <li
            onClick={handleClose}
            className="px-4 flex items-center gap-x-1 cursor-pointer select-none
              hover:text-primary-yellow duration-300"
          >
            <span>
              <svg className="w-[18px] h-3 fill-none">
                <rect width="18" height="12" fill="#1739A2" rx="1" />
                <path
                  fill="#EBEBEB"
                  fillRule="evenodd"
                  d="M11 9.136 15.296 12H17a1 1 0 0 0 1-1v-.803L14.704 8H18V4h-3.296L18 1.803V1a1 1 0 0 0-1-1h-1.704L11 2.864V0H7v2.864L2.704 0H1a1 1 0 0 0-1 1v.803L3.296 4H0v4h3.296L0 10.197V11a1 1 0 0 0 1 1h1.704L7 9.136V12h4V9.136z"
                  clipRule="evenodd"
                />
                <path
                  fill="#DB1C24"
                  fillRule="evenodd"
                  d="m.843 0 5.993 3.996H5.033L0 .64A1 1 0 0 1 .843 0zM0 11.351l5.034-3.355h1.803L.843 11.992a1 1 0 0 1-.843-.64zm17.027.64-5.994-3.995h1.803l5.034 3.355a1 1 0 0 1-.843.64zm-5.993-7.995h1.803L17.87.64a1 1 0 0 0-.843-.64l-5.993 3.996zM8 0h2v5h8v2h-8v5H8V7H0V5h8V0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <span className="capitalize ml-1 mr-[6px]">English</span>
          </li>

          {/* ru */}
          <li
            onClick={handleClose}
            className="px-4 flex items-center gap-x-1 cursor-pointer select-none
              text-primary-yellow"
          >
            <span>
              <svg className="w-[18px] h-3 fill-none">
                <path fill="#1739A2" d="M18 4H0v4h18V4z" />
                <path
                  fill="#DB1C24"
                  d="M18 8H0v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8z"
                />
                <path
                  fill="#EBEBEB"
                  d="M0 4h18V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v3z"
                />
              </svg>
            </span>

            <span className="capitalize ml-1 mr-[6px]">Русский</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SelectLanguage;
