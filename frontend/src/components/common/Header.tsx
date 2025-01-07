import { Link, useLocation } from "react-router-dom";

import ToggleButton from "./ToggleButton";

import menuContent from "@/lib/menuContent";
import { MenuPropsType } from "@/types";

function Header() {
    const location = useLocation();
    return (
        <header className="h-32 md:h-24 flex justify-between items-center bg-transparent">
            {/* Logo Section */}
            <div className="flex items-center">
                <Link to="/movie">
                    <img
                        src={`${import.meta.env.BASE_URL}/Amazon_Prime_Video_logo.svg`}
                        alt="Amazon Prime Video Logo"
                        className="mx-6 my-2 w-24"
                    />
                </Link>

                {/* Menu Items */}
                {menuContent.map((item: MenuPropsType, index: number) => {
                    const isActive = location.pathname === item.path;

                    return (
                        <>
                            <Link to={item.path} className="hidden md:block">
                                <div
                                    className={`mx-3 px-3 py-1 flex flex-col items-center justify-center rounded-md hover:bg-white hover:text-black ${
                                        isActive ? "bg-white/70 text-black" : "bg-transparent"
                                    }`}
                                >
                                    <div className="text-xl mt-1 font-normal">{item.title}</div>
                                </div>
                            </Link>

                            {/* Divider */}
                            {index === menuContent.length - 2 && (
                                <div className="border-r-2 border-gray-300 dark:border-gray-600 h-8 self-center"></div>
                            )}
                        </>
                    );
                })}
            </div>

            {/* Right Section */}
            <div className="flex items-center">
                <ToggleButton />
                <img
                    src={`${import.meta.env.BASE_URL}/account-circle.svg`}
                    alt="Account Icon"
                    className="max-h-16 max-w-16 m-4"
                />
            </div>
        </header>
    );
}

export default Header;
