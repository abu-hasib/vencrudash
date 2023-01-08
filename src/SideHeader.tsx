import logo from "./assets/logomark.png";
import brand from "./assets/logotype.png";

export function SideHeader() {
  return (
    <header>
      <div className="flex gap-1 items-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <img src={brand} alt="" />
        </div>
      </div>
    </header>
  );
}
