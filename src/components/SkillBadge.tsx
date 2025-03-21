import { FC } from 'react';
import { skillInterface } from '@/utils/data/skillsList';
import { useTheme } from '@/context/ThemeContext';

export const SkillBadge: FC<{ data: skillInterface }> = ({ data }) => {
  const theme = useTheme()
  return (
    <li className='px-6 lg:px-[30px] flex flex-col items-center'>
      <div className='w-16 md:w-20 lg:w-100 h-16 md:h-20 lg:h-100 bg-white rounded-full shadow-gradient flex items-center justify-center'>
        <img className='w-10 h-10 md:w-12 lg:w-[60px] md:h-12 lg:h-[60px]' src={`/skills/${data.imagePath}`} alt="skill" />
      </div>
      <strong className={`${theme.theme === 'light' ? 'gradient-skill-text' : ''} mt-2 lg:mt-4 mb-2 text-xl leading-1.1`}>{data.procent}%</strong>
      <h4 className='font-light text-sm leading-[1.3] font-sans'>{data.name}</h4>
    </li>
  );
};
