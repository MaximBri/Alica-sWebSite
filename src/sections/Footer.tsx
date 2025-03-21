import { Navbar } from '@/components/Navbar';
import { SocialLinks } from '@/components/SocialLinks';

export const Footer = () => {
  return (
    <footer className="bg-contacts dark:bg-transparent">
      <div className="relative py-4 flex flex-col items-center max-w-[92vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-[75vw] 2xl:max-w-[66vw] mx-auto">
        <Navbar classList="py-[6px] flex text-xs leading-[1.5]" />
        <div className="mt-6 lg:mt-0 lg:absolute top-4 right-0">
          <SocialLinks />
        </div>
        <span className="mt-6 lg:mt-60 leading-[1.4] text-xs font-light">
          Copyright © 2025
        </span>
      </div>
    </footer>
  );
};
