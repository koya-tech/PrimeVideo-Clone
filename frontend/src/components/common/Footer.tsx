import { Link, useLocation } from "react-router-dom";

import useDarkMode from "@/hooks/useDarkMode";
import menuContent from "@/lib/menuContent";
import { MenuPropsType } from "@/types";

function Footer() {
    const location = useLocation();
    const { darkMode } = useDarkMode();

    return (
        <footer className="flex justify-around fixed dark:bg-pvBenthicBlack bg-white bottom-0 left-0 right-0 py-4 z-50 md:hidden">
            {menuContent.map(({ title, path, icon, blackicon }: MenuPropsType) => {
                const isActive = location.pathname === path;
                const borderClass = isActive ? "border-b-4 border-pvGrey dark:border-pvPetrel" : "";

                return (
                    <Link key={title} to={path}>
                        <div
                            className={`flex flex-col items-center justify-center p-2 ${borderClass}`}
                        >
                            <img src={darkMode ? icon : blackicon} alt="" className="w-6" />
                            <div className="text-xs mt-1 font-normal">{title}</div>
                        </div>
                    </Link>
                );
            })}
        </footer>
    );
}

export default Footer;
