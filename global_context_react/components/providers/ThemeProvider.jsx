import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

function ThemeProvider({children}){
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        setTheme(oldTheme => (oldTheme === 'dark' ? 'light': 'dark'))
    };

    useEffect(() => {document.documentElement.className = theme}, [theme])

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider};