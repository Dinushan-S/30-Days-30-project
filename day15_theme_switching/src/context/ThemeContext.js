import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvide = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme((prevTheme) => !prevTheme);
    }

    return (
        <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvide, ThemeContext };