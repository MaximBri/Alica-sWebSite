import { FC } from 'react';
import { blogInterface } from '@/utils/data/blogList';

export const BlogCard: FC<{ data: blogInterface }> = ({ data }) => {
  return (
    <li className='flex flex-col md:flex-row items-center justify-between w-full py-6 border-b border-blog dark:border-icons-dark gap-1'>
      <div className='flex flex-row-reverse md:flex-row gap-4 items-center'>
        <span className='rounded-full flex-shrink-0 w-10 h-10 bg-dots dark:bg-dots-dark'></span>
        <h3 className='text-sm md:text-base font-semibold leading-[1.2] uppercase'>{data.title}</h3>
      </div>
      <h4 className='font-sans text-xs md:text-sm leading-1.1 opacity-[0.6] font-light text-nowrap md:ml-4 text-left w-full md:text-right md:w-auto'>{data.date}</h4>
    </li>
  );
};
