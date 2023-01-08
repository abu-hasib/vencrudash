import buoy from "./assets/life-buoy.png";
import settings from "./assets/settings.png";
import { LinksType } from "./types";

const footerLinks: LinksType = [
  { icon: buoy, link: "Support" },
  { icon: settings, link: "Settings" },
];
export function SideFooter() {
  return (
    <ul className="flex flex-col gap-3">
      {footerLinks.map(({ icon, link }) => (
        <li className="flex gap-2 items-center">
          <img src={icon} alt="" />
          <a className="text-[#344054] font-medium font-sans" href={link}>
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}
