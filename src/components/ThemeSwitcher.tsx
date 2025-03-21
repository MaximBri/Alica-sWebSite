import { useTheme } from '@/context/ThemeContext';
import moonSvg from '@/assets/header/moon.svg';
import sunSvg from '@/assets/header/sun.svg';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="flex items-center h-[42px] w-[78px] gap-[6px] rounded-[114px] p-[6px] bg-grey-light dark:bg-grey-dark border border-1 border-primary dark:border-primary-dark relative"
      onClick={toggleTheme}
    >
      <span
        className={`absolute w-[30px] h-[30px] bg-white rounded-full transition-all duration-300 ${
          theme === 'light'
            ? 'translate-x-0 bg-switch'
            : 'translate-x-[calc(100%+4px)]'
        }`}
      ></span>

      <span className="w-[30px] h-[30px] flex items-center justify-center z-10">
        <img className="h-[17px] w-[17px]" src={sunSvg} alt="sun" />
      </span>
      <span className="w-[30px] h-[30px] flex items-center justify-center z-10">
        <img className="h-[12px] w-[12px]" src={moonSvg} alt="moon" />
      </span>
    </button>
  );
};
