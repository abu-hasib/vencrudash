import { useState } from "react";
import "./App.css";
import { Sidenav } from "./Sidenav";
import { Search } from "./Search";
import { SideHeader } from "./SideHeader";
import { Featured } from "./Featured";
import { Account } from "./Account";
import logo from "./assets/logomark.png";
import brand from "./assets/logotype.png";
import { SideFooter } from "./SideFooter";

interface ISidebar {
  isOpen: boolean;
}

function Sidebar({ isOpen }: ISidebar) {
  return (
    <aside
      className={`flex flex-col gap-5 fixed left-0 top-0 z-20 w-[70%] px-3 py-4 bg-white shadow-lg h-screen transition-all ${
        isOpen ? "-translate-x-full" : ""
      }`}
    >
      <SideHeader />
      <Search />
      <Sidenav />
      <SideFooter />
      <Featured />
      <Account />
    </aside>
  );
}

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex">
      <header className="flex bg-blue-800 justify-between items-center fixed top-0 z-10 w-full px-2">
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
      <Sidebar isOpen={isOpen} />
    </div>
  );
}

export default App;
