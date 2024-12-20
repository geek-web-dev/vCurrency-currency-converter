import { useState } from "react";
import { cn } from "../../libs/utils";
import { Menu } from "lucide-react";
import Nav from "./Nav";
import { APP_NAME } from "../../constants";
import Footer from "./Footer";

export const Sidebar = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => setisOpen((p) => !p);

  return (
    <div className="lg:pl-64">
      <div
        className={cn(
          "bg-[--sidebar-p] shadow-xl w-64 fixed left-0 top-0 h-full lg:translate-x-0 -translate-x-full transition-transform duration-150 rounded-r-md z-40",
          isOpen ? "translate-x-0" : ""
        )}
      >
        <div
          className="dark:bg-white bg-black dark:text-black text-white p-1 rounded-r-full absolute right-0 top-2 translate-x-full lg:hidden cursor-pointer"
          onClick={toggle}
        >
          <Menu size={18} />
        </div>

        <div className="h-full flex flex-col justify-between p-4 pt-8">
          <div>
            <h1 className="font-bold text-3xl mb-8 ml-2 text-[--text-p]">
              {APP_NAME[0]}
              <span className="text-[--primary]">{APP_NAME[1]}</span>
              {APP_NAME.slice(2)}
            </h1>

            <Nav />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};
