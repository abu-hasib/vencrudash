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
      className={`flex flex-col gap-5 fixed left-0 top-0 z-20 w-[60%] px-3 py-4 bg-white shadow-lg h-screen transition-all ${
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
