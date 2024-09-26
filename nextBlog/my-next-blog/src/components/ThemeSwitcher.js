export default function ThemeSwitcher({ theme, setTheme }) {
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
  
    return (
      <div className="theme-button">
        <button
          className={theme === 'light' ? 'dark-mode-btn' : 'light-mode-btn'}
          onClick={toggleTheme}
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    );
  }
  