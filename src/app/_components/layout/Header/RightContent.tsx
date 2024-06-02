import Link from "next/link";
import SelectLanguage from "./SelectLanguage";

type Props = {
  containerStyles: string;
  btnTelAddStyles: string;
  closeMobileMenu?: () => void;
};

const RightContent = ({
  containerStyles,
  btnTelAddStyles,
  closeMobileMenu,
}: Props) => {
  return (
    <div className={containerStyles}>
      {/* btn to call */}
      <Link
        href="tel:+37368159759"
        onClick={closeMobileMenu}
        className={`bg-primary-yellow rounded-[40px] whitespace-nowrap select-none
        hover:bg-transparent hover:text-primary-yellow hover:shadow-[0_0_0_2px_#ffcc29]
        duration-300 ${btnTelAddStyles}`}
      >
        +373 68 159 759
      </Link>

      {/* btn to select language */}
      <SelectLanguage />
    </div>
  );
};

export default RightContent;
