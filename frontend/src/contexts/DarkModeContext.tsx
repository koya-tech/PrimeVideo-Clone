import { createContext } from "react";

interface DarkModeContextType {
    darkMode: boolean;
    toggleDarkMode: (checked: boolean) => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export default DarkModeContext;
