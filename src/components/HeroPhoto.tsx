import { FC } from 'react';
import photo from '@/assets/hero/photo.png';
import jsSvg from '@/assets/hero/javascript.svg';
import djangoSvg from '@/assets/hero/django.svg';
import reactSvg from '@/assets/hero/react.svg';
import { useTheme } from '@/context/ThemeContext';

export const HeroPhoto: FC<{ classList: string }> = ({ classList }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`${classList} relative justify-center lg:justify-end flex-shrink-0`}
    >
      <div className="w-[260px] lg:w-[360px] xl:w-[420px] relative flex-shrink-0">
        <img
          className="w-full z-30 h-[340px] lg:h-[505px] xl:h-[590px]"
          src={photo}
          alt="person"
        />
        <span className="animate-slow-moving-1 flex items-center justify-center w-[64px] h-[64px] lg:w-[80px] lg:h-[80px] xl:w-100 xl:h-100 absolute left-0 top-[32%] xl:top-[47%] rounded-full z-20 shadow-iconsMobile xl:shadow-icons bg-white translate-x-[-55%]">
          <img
            className="w-[35px] h-[40px] xl:w-[60px] xl:h-[60px]"
            src={jsSvg}
            alt="javascript"
          />
        </span>
        <span className="animate-slow-moving-2 flex items-center justify-center w-[64px] h-[64px] lg:w-[80px] lg:h-[80px] xl:w-100 xl:h-100  absolute right-0 bottom-[6%] rounded-full z-20 shadow-iconsMobile xl:shadow-icons bg-white translate-x-[25%]">
          <img
            className="w-[35px] h-[40px] xl:w-[60px] xl:h-[60px]"
            src={djangoSvg}
            alt="django"
          />
        </span>
        <span className="animate-slow-moving-3 flex items-center justify-center w-[64px] h-[64px] lg:w-[80px] lg:h-[80px] xl:w-100 xl:h-100  absolute right-[-10%] top-[10%] lg:top-[20%] rounded-full z-20 shadow-iconsMobile xl:shadow-icons bg-white translate-x-[65%]">
          <img
            className="w-[35px] h-[40px] xl:w-[60px] xl:h-[60px]"
            src={reactSvg}
            alt="react"
          />
        </span>
        <div
          className={`absolute rotate-[-18deg] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[260px] lg:w-[360px] xl:w-[420px] h-[340px] lg:h-[505px] xl:h-[590px] border ${
            theme === 'light' ? 'border-icons bg-icons' : ''
          } dark:border-primary-dark rounded-[56px] xl:rounded-[100px] dark:bg-icons-bg dark:border-0 z-[-10]`}
        ></div>
        <div
          className={`absolute rotate-[-8deg] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[260px] lg:w-[360px] xl:w-[420px] h-[340px] lg:h-[505px] xl:h-[590px] border ${
            theme === 'light' ? 'border-icons bg-icons' : ''
          } dark:border-primary-dark rounded-[56px] xl:rounded-[100px] dark:bg-icons-bg dark:border-0 z-[-10]`}
        ></div>
      </div>
    </div>
  );
};
