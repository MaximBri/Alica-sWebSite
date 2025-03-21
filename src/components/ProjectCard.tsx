import { projectInterface } from '@/utils/data/projectsList';
import { FC } from 'react';
import githubSvg from '@/assets/projects/github.svg';
import link2Svg from '@/assets/projects/link2.svg';
import shareSvg from '@/assets/projects/share.svg';

export const ProjectCard: FC<{ data: projectInterface }> = ({ data }) => {
  return (
    <li className="p-4 bg-grey-light dark:bg-cards-dark rounded-[24px] border border-primary dark:border-primary-dark z-10">
      <div className="relative">
        <img
          className="w-full"
          src={`/projects/${data.imagePath}`}
          alt="screenshot"
        />
        <div className="absolute flex top-3 right-3 gap-[10px] z-10">
          {data.links.github && (
            <button className="w-[38px] h-[38px] rounded-full border border-links flex items-center justify-center">
              <img className="h-4 w-4" src={githubSvg} alt="github" />
            </button>
          )}
          {data.links.link2 && (
            <button className="w-[38px] h-[38px] rounded-full border border-links flex items-center justify-center">
              <img className="w-[18px] h-4" src={link2Svg} alt="" />
            </button>
          )}
          {data.links.link2 && (
            <button className="w-[38px] h-[38px] rounded-full border border-links flex items-center justify-center">
              <img className="w-4 h-4" src={shareSvg} alt="share" />
            </button>
          )}
        </div>
      </div>
      <h3 className="my-4 font-normal md:font-semibold text-xl md:text-2xl lg:text-3xl leading-1.1">
        {data.name}
      </h3>
      <p className="font-light font-sans text-xs lg:text-sm leading-[1.4]">
        {data.description}
      </p>
    </li>
  );
};
