import { Switch } from "../ui/switch";

import useDarkMode from "@/hooks/useDarkMode";

function ToggleButton() {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <>
            <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
        </>
    );
}

export default ToggleButton;
