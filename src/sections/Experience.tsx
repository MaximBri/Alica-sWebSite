import radialDark from '@/assets/shared/radial-left-dark.png';
import radialLight from '@/assets/shared/radial-left-light.png';
import { useTheme } from '@/context/ThemeContext';

export const Experience = () => {
  const { theme } = useTheme();
  return (
    <section className="relative grid grid-cols-2 lg:grid-cols-4 p-4 lg:py-6 lg:px-0 rounded-[24px] shadow-gradient mt-10 mb-60 md:mt-12 md:mb-[72px] lg:mt-60 lg:mb-[80px] bg-gradient text-center text-primary-dark leading-1.1">
      <div className="p-8 lg:px-6 lg:py-0 flex flex-col gap-2 border-r border-b lg:border-l lg:border-r-0 lg:border-b-0 border-separator">
        <h2 className="font-semibold text-3xl md:text-[35px] lg:text-[40px]">
          20
        </h2>
        <h3 className="font-semibold text-base sm:text-lg lg:text-xl">years</h3>
        <p className="font-light text-xs lg:text-sm font-sans">
          of experience as a developer
        </p>
      </div>
      <div className="p-8 lg:px-6 lg:py-0 flex flex-col gap-2 border-b border-l lg:border-b-0 border-separator">
        <h2 className="font-semibold text-3xl md:text-[35px] lg:text-[40px]">
          10
        </h2>
        <h3 className="font-semibold text-base sm:text-lg lg:text-xl">years</h3>
        <p className="font-light text-xs lg:text-sm font-sans">freelancing</p>
      </div>
      <div className="p-8 lg:px-6 lg:py-0 flex flex-col gap-2 border-t border-r lg:border-l lg:border-r-0 lg:border-t-0 border-separator">
        <h2 className="font-semibold text-3xl md:text-[35px] lg:text-[40px]">
          500+
        </h2>
        <h3 className="font-semibold text-base sm:text-lg lg:text-xl">
          Project
        </h3>
        <p className="font-light text-xs lg:text-sm font-sans">Done</p>
      </div>
      <div className="p-8 lg:px-6 lg:py-0 flex flex-col gap-2 border-l border-t lg:border-t-0 border-separator">
        <h2 className="font-semibold text-3xl md:text-[35px] lg:text-[40px]">
          100+
        </h2>
        <h3 className="font-semibold text-base sm:text-lg lg:text-xl">
          Clients
        </h3>
        <p className="font-light text-xs lg:text-sm font-sans">
          on work worldwide
        </p>
      </div>
      <img
        className={`absolute hidden md:block ${theme === 'dark' ? 'left-[-20vw]' : 'left-[-17vw]'} translate-y-[-37%] -z-10`}
        src={theme === 'light' ? radialLight : radialDark}
        alt="decor"
      />
    </section>
  );
};
