import { FC } from 'react';
import { headerLinks } from '@/utils/data/headerLinks';

export const Navbar: FC<{
  classList?: string;
  closeBurger?: () => void;
}> = ({ classList, closeBurger }) => {

  const handleLinkClick = () => {
    closeBurger?.();
  };

  return (
    <nav className={`${classList} gap-40px`}>
      {headerLinks.map((elem) => (
        <a
          key={elem.name}
          href={elem.target}
          onClick={handleLinkClick}
          className={`${classList} font-bold text-base leading-snug text-primary dark:text-primary-dark cursor-pointer`}
        >
          {elem.name}
        </a>
      ))}
    </nav>
  );
};