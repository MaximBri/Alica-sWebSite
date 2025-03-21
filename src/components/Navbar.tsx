import { headerLinks } from '@/utils/data/headerLinks';
import { FC } from 'react';

export const Navbar: FC<{
  classList?: string;
  closeBurger?: () => void;
}> = ({ classList, closeBurger }) => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(hash.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      if (closeBurger) closeBurger();
      window.history.pushState(null, '', hash);
    }
  };
  return (
    <nav className={`${classList} gap-40px`}>
      {headerLinks.map((elem, index) => {
        return (
          <a
            className={`${classList} font-bold text-base leading-snug text-primary dark:text-primary-dark`}
            href={elem.link}
            onClick={(e) => handleScroll(e, elem.link)}
            key={index}
          >
            {elem.name}
          </a>
        );
      })}
    </nav>
  );
};
