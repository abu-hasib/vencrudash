import buoy from "./assets/life-buoy.png";
import settings from "./assets/settings.png";
import { LinksType } from "./types";

const footerLinks: LinksType = [
  { icon: buoy, link: "Support" },
  { icon: settings, link: "Settings" },
];
export function SideFooter() {
  return (
    <ul className="flex flex-col gap-6">
      {footerLinks.map(({ icon, link }) => (
        <li className="flex gap-2 items-center">
          <div className="w-[20px] h-[20px]">
            <img
              className="object-cover max-w-full max-h-full"
              src={icon}
              alt="icon"
            />
          </div>
          <a className="text-[#344054] text-sm font-medium font-sans" href={link}>
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}
