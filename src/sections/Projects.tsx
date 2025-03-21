import { useState } from 'react';

import { SectionTheme } from '@/components/SectionTheme';
import { useTheme } from '@/context/ThemeContext';
import { ProjectCard } from '@/components/ProjectCard';
import {
  projectInterface,
  projectsList,
  projectType,
} from '@/utils/data/projectsList';
import dotDark from '@/assets/shared/radial-right-dark.png';
import dotLight from '@/assets/shared/radial-right-light.png';
import linesDark from '@/assets/projects/lines-projects-dark.png';
import circlesLight from '@/assets/projects/circles-projects-light.png';

export interface projectFilterInterface {
  title: string;
  filterValue: projectType;
}

export const projectFilters: projectFilterInterface[] = [
  { title: 'All', filterValue: '' },
  { title: 'E-commerse', filterValue: 'commerce' },
  { title: 'Mobile', filterValue: 'mobile' },
  { title: 'Business & Corporate', filterValue: 'business' },
  { title: 'Games & Entertainment', filterValue: 'games' },
];

export const Projects = () => {
  const { theme } = useTheme();
  const [filter, setFilter] = useState<projectType>(
    projectFilters[0].filterValue
  );
  let projects: projectInterface[] = [];
  filter !== ''
    ? projectsList.forEach((item) =>
        item.types.includes(filter) ? projects.push(item) : ''
      )
    : (projects = projectsList);
  return (
    <section
      id="works"
      className="relative flex flex-col items-center pt-10 md:pt-60 lg:pt-[100px]"
    >
      <SectionTheme message={'Works'} />
      <h2 className="text-3xl md:text-[40px] lg:text-50 mt-4 lg:mt-6 mb-6 sm:mb-10 lg:mb-[56px] font-semibold leading-1.1 tracking-custom text-black dark:text-white text-center">
        My recent Works
      </h2>
      <nav className="flex flex-wrap border-b border-links w-full items-center justify-center pb-4 lg:pb-8 gap-[10px]">
        {projectFilters.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => setFilter(item.filterValue)}
              className={`text-nowrap bg-buttons dark:bg-buttons-dark px-4 py-[10px] rounded-[6px] font-semibold leading-1.1 text-sm ${
                filter === item.filterValue ? 'bg-switch' : ''
              }`}
            >
              {theme === 'dark' ? (
                item.title
              ) : (
                <span
                  className={`${
                    filter !== item.filterValue ? 'gradient-text' : 'text-white'
                  } text-nowrap`}
                >
                  {item.title}
                </span>
              )}
            </button>
          );
        })}
      </nav>
      <ul className="pt-10 lg:pt-[56px] pb-60 md:pb-[80px] lg:pb-100 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-10">
        {projects.map((item, index) => {
          return <ProjectCard data={item} key={index} />;
        })}
      </ul>
      <img
        className={`absolute md:top-[-150px] -z-10 ${
          theme === 'light' ? 'right-[-7vw] md:right-[-17vw] top-[23%]' : 'top-[51%] right-[-17vw]'
        }`}
        src={theme === 'light' ? dotLight : dotDark}
        alt="decor"
      />
      <img
        src={theme === 'light' ? circlesLight : linesDark}
        className={`absolute -z-10 hidden md:block ${
          theme === 'light'
            ? 'top-[32%] left-[-17vw]'
            : 'top-[40%] left-[0vw] scale-150'
        }`}
        alt="decor"
      ></img>
    </section>
  );
};
