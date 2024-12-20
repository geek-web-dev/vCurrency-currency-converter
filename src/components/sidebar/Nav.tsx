import { BadgeDollarSign, Home, Settings, Smile } from "lucide-react";
import NavLink from "./NavLink";

const Nav = () => {
  return (
    <nav className="flex flex-col gap-2">
      <NavLink to={"/"} Icon={Home} title={"home"} />
      <NavLink
        to={"/exchange-list"}
        Icon={BadgeDollarSign}
        title={"exchange list"}
      />
      <NavLink to={"/about"} Icon={Smile} title={"about"} />
      <NavLink to={"/settings"} Icon={Settings} title={"settings"} />
    </nav>
  );
};

export default Nav;
