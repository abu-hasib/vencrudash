import { Sidenav } from "./Sidenav";
import { Search } from "./Search";
import { SideHeader } from "./SideHeader";
import { Featured } from "./Featured";
import { Account } from "./Account";
import { SideFooter } from "./SideFooter";

interface ISidebar {
  isOpen: boolean;
}
export function Sidebar({ isOpen }: ISidebar) {
  return (
    <aside
      className={`flex flex-col gap-5 fixed lg:translate-x-0 lg:left-auto left-0 top-0 z-20 w-[60%] lg:w-[280px] px-4 py-6 bg-white shadow-lg h-screen transition-all ${
        isOpen ? "" : "-translate-x-full"
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
