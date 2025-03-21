import { FC } from 'react';

export const SectionTheme: FC<{ message: string }> = ({ message }) => {
  return (
    <span className="border border-primary dark:border-primary-dark rounded-[19px] bg-grey-light dark:bg-grey-dark  w-min text-center inline-block">
      <p className='w-min text-nowrap section__title font-semibold button text-base leading-1.1 dark:bg-white text-center py-2 px-4 rounded-[19px]' >{message}</p>
    </span>
  );
};
