import { SectionTheme } from '@/components/SectionTheme';
import { SkillBadge } from '@/components/SkillBadge';
import { skillsList } from '@/utils/data/skillsList';
import { useTheme } from '@/context/ThemeContext';
import dotDark from '@/assets/shared/radial-left-dark.png';
import dotLight from '@/assets/shared/radial-left-light.png';
import verticalGradient from '@/assets/skills/radial-skills-vertival.png';

export const Skills = () => {
  const { theme } = useTheme();
  return (
    <section className="relative flex flex-col items-center pt-10 lg:pt-60 pb-60 lg:pb-[80px]">
      <SectionTheme message="Skills" />
      <h2 className="mt-4 lg:mt-6 mb-10 sm:mb-12 lg:mb-60 text-black dark:text-white font-semibold text-3xl md:text-4xl lg:text-50 leading-1.1 text-center">
        My Skills
      </h2>
      <ul className="flex items-center gap-[10px] md:gap-5 lg:gap-[30px] flex-wrap justify-center">
        {skillsList.map((item, index) => {
          return <SkillBadge data={item} key={index} />;
        })}
      </ul>
      <img
        className={`absolute left-[-17vw] translate-y-[-20%] -z-10 ${
          theme === 'light' ? '-top-full hidden md:block' : 'top-[60%] md:-top-full'
        }`}
        src={theme === 'light' ? dotLight : dotDark}
        alt="decor"
      />
      {theme === 'light' && (
        <img
          className="absolute right-[-5vw] top-[-130%] md:hidden -z-10"
          src={verticalGradient}
          alt="decor"
        ></img>
      )}
    </section>
  );
};
