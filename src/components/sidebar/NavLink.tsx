import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NavLink = ({
  to,
  Icon,
  title,
}: {
  to: string;
  Icon: LucideIcon;
  title: string;
}) => {
  return (
    <Link
      className="p-2 flex items-center gap-2 rounded-md duration-150 bg-[--sidebar-s] hover:bg-[--primary] text-[--text-p] hover:text-white"
      to={to}
    >
      <Icon strokeWidth={1.25} />
      {title}
    </Link>
  );
};

export default NavLink;
