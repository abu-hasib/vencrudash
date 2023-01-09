import home from "./assets/home.png";
import homeIcon from "./assets/home.svg";
import chart from "./assets/bar-chart-2.png";
import layers from "./assets/3-layers.png";
import check from "./assets/check-square.png";
import flag from "./assets/flag.png";
import users from "./assets/users.png";
import { LinksType } from "./types";

const navLinks: LinksType = [
  { icon: homeIcon, link: "Home" },
  { icon: chart, link: "Dashboard" },
  { icon: layers, link: "Projects" },
  { icon: check, link: "Tasks" },
  { icon: flag, link: "Reporting" },
  { icon: users, link: "Users" },
];

// ollkl

export function Sidenav() {
  return (
    <nav>
      <ul className="flex flex-col gap-6">
        {navLinks.map(({ icon, link }) => (
          <li className="flex ">
            <div className="flex gap-2 items-center">
              <div className="w-[20px] h-[20px]">
                <img className="object-cover max-w-full max-h-full" src={icon} alt="icon" />
              </div>
              <a className="text-[#344054] text-sm font-medium" href={link}>{link}</a>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
