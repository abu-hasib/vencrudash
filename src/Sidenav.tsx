import home from "./assets/home.png";
import chart from "./assets/bar-chart-2.png";
import layers from "./assets/3-layers.png";
import check from "./assets/check-square.png";
import flag from "./assets/flag.png";
import users from "./assets/users.png";
import { LinksType } from "./types";

const navLinks: LinksType = [
  { icon: home, link: "Home" },
  { icon: chart, link: "Dashboard" },
  { icon: layers, link: "Projects" },
  { icon: check, link: "Tasks" },
  { icon: flag, link: "Reporting" },
  { icon: users, link: "Users" },
];

export function Sidenav() {
  return (
    <nav>
      <ul className="flex flex-col gap-3">
        {navLinks.map(({ icon, link }) => (
          <li className="flex ">
            <div className="flex gap-2 items-center">
              <img src={icon} alt="" />
              <a className="text-[#344054] font-medium" href={link}>{link}</a>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
