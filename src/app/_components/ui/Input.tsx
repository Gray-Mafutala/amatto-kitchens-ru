import { HTMLInputTypeAttribute } from "react";

type Props = {
  type: HTMLInputTypeAttribute;
  name: string;
  value: string | number;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addStyles?: string;
};

const Input = (props: Props) => {
  return (
    <input
      {...props}
      className={`rounded-[40px] border border-gray-100 outline-none
      text-base mobileXL:text-lg px-4 mobileXL:px-6 py-2 w-full
      hover:border-primary-yellow focus:border-primary-yellow
      focus:shadow-[0_0_0_1px_#ffcc29] duration-300 ${props.addStyles}`}
    />
  );
};

export default Input;
