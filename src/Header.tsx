import { Dispatch, SetStateAction } from "react";
import logo from "./assets/logomark.png";
import brand from "./assets/logotype.png";

interface IHeader {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export function Header({ isOpen, setOpen }: IHeader) {
  return (
    <header className="lg:hidden flex bg-white shadow-sm justify-between items-center fixed top-0 z-10 w-full h-[63px] px-2">
      <div className="flex gap-1 items-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <img src={brand} alt="" />
        </div>
      </div>
      <div className="cursor-pointer" onClick={() => setOpen(!isOpen)}>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12.5H17M3 6.5H21M3 18.5H21"
            stroke="#667085"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </header>
  );
}
