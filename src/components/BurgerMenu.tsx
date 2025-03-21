import { FC } from 'react';
import { Navbar } from './Navbar';

export const BurgerMenu: FC<{ onClick: () => void; isOpen: boolean }> = ({
  onClick,
  isOpen,
}) => {
  return (
    <div
      className={`fixed ${
        !isOpen ? 'translate-x-[-100%]' : 'translate-x-[0%]'
      } flex flex-col items-center transition-transform duration-300 top-0 left-0  h-[100vh] max-w-[400px] w-screen z-50 bg-contacts dark:bg-burger-dark px-5 py-10`}
    >
      <button
        onClick={onClick}
        className="absolute p-3 top-5 right-5 flex items-center justify-center w-[50px] h-[50px]"
      >
        <div className="w-10 h-[3px] bg-black dark:bg-white absolute transform rotate-45 rounded-sm"></div>
        <div className="w-10 h-[3px] bg-black dark:bg-white absolute transform -rotate-45 rounded-sm"></div>
      </button>
      <Navbar closeBurger={onClick} classList="flex flex-col text-center gap-2 text-xl" />
    </div>
  );
};
