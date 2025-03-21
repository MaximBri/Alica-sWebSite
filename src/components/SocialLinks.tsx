import { Link } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import { socialLinks } from '@/utils/data/socialLinks';

export const SocialLinks = () => {
  const { theme } = useTheme();
  return (
    <nav className="flex items-center gap-[10px]">
      {socialLinks.map((elem, index) => {
        return (
          <Link
            to={elem.link}
            key={index}
            className={`w-[38px] h-[38px] flex items-center justify-center border border-primary dark:border-primary-dark rounded-full ${theme !== 'dark' ?'bg-icons' : 'border-0'} dark:bg-icons-bg-dark`}
          >
            {theme === 'light' ? elem.imageDark : elem.imageLight}
          </Link>
        );
      })}
    </nav>
  );
};
