import { useState } from 'react';

import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Button } from '@/components/Button';
import { BurgerMenu } from '@/components/BurgerMenu';
import { Navbar } from '@/components/Navbar';
import { createPortal } from 'react-dom';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const changeMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex items-center justify-between h-[80px] xl:h-100 max-w-[92vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-[75vw] 2xl:max-w-[66vw] mx-auto">
      {createPortal(
        <BurgerMenu isOpen={menuOpen} onClick={changeMenuOpen} />,
        document.body
      )}
      <div className="flex gap-2 items-center">
        <button
          className="sm:hidden flex flex-col gap-[5px] text-black w-[30px] h-[20px] p-3 pl-0 box-content"
          onClick={changeMenuOpen}
        >
          <div className="w-full h-[3px] bg-black dark:bg-white"></div>
          <div className="w-full h-[3px] bg-black dark:bg-white"></div>
          <div className="w-full h-[3px] bg-black dark:bg-white"></div>
        </button>

        <ThemeSwitcher />
      </div>
      <Navbar classList="hidden sm:flex" />

      <Button classList="px-[20px] py-[10px]" text="Contact Me" />
    </header>
  );
};
