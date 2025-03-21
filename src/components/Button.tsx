import { FC } from 'react';

export const Button: FC<{
  text: string;
  classList?: string;
  classListWrapper?: string;
  px?: number;
  py?: number;
  onClick?: () => void;
}> = ({ text, onClick, classList, classListWrapper }) => {
  return (
    <span
      className={`${classListWrapper} button-wrapper rounded-10 p-[6px] whitespace-nowrap bg-grey-light dark:bg-grey-dark border border-primary dark:border-primary-dark h-min inline-block w-min`}
    >
      <button
        onClick={onClick}
        className={`${classList} button leading-1.1 text-base rounded-10 text-primary-dark tracking-0.3 font-semibold`}
      >
        {text}
      </button>
    </span>
  );
};
