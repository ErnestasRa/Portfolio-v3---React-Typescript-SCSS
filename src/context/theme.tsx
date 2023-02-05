import * as React from 'react';

type ThemeProviderType = {
    children: React.ReactNode
};

const ThemeContext = React.createContext<ContextType>({} as ContextType);

const ThemeProvider: React.FC<ThemeProviderType> = ({ children }) => {
    const [theme, setTheme] = React.useState('light');

    React.useEffect(() => {
        const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setTheme(darkMediaQuery.matches ? 'dark' : 'light');
        darkMediaQuery.addEventListener('change', (e) => {
            setTheme(e.matches ? 'dark' : 'light');
        });
    }, []);

    const toggleTheme = () => {
        const themeName = theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('themeName', themeName);
        setTheme(themeName);
    };

    return (
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };
