import { FC } from 'react';
import { headerLinks } from '@/utils/data/headerLinks';

export const Navbar: FC<{
  classList?: string;
  closeBurger?: () => void;
}> = ({ classList, closeBurger }) => {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();
    closeBurger?.();
    window.location.hash = target;
  };

  return (
    <nav className={`${classList} gap-40px`}>
      {headerLinks.map((elem) => (
        <a
          key={elem.name}
          href={elem.target}
          onClick={(e) => handleLinkClick(e, elem.target)}
          className={`${classList} font-bold text-base leading-snug text-primary dark:text-primary-dark cursor-pointer z-10`}
        >
          {elem.name}
        </a>
      ))}
    </nav>
  );
};
