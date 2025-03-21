import { useState } from 'react';

import { SectionTheme } from '@/components/SectionTheme';
import { useTheme } from '@/context/ThemeContext';
import { blogList } from '@/utils/data/blogList';
import { BlogCard } from '@/components/BlogCard';

export const Blog = () => {
  const addItemsOnClick = 5;
  const theme = useTheme();
  const [countItems, setCountItems] = useState<number>(addItemsOnClick);

  const addCountItems = () => {
    if (countItems + addItemsOnClick > blogList.length)
      setCountItems(blogList.length);
    else setCountItems(countItems + addItemsOnClick);
  };

  return (
    <section
      id="blog"
      className="flex flex-col items-center pt-10 pb-60 md:py-20 lg:py-100"
    >
      <SectionTheme message="Blog" />
      <h2 className="mt-4 lg:mt-6 mb-10 lg:mb-60 font-semibold text-3xl md:text-4xl lg:text-50 leading-1.1 text-center">
        Insights & Code:<br></br>My Frontend Journey
      </h2>
      <ul className="w-full">
        {blogList.slice(0, countItems).map((item, index) => {
          return <BlogCard data={item} key={index} />;
        })}
      </ul>
      {countItems < blogList.length && (
        <div className='bg-icons dark:bg-cards-dark w-min mt-10 lg:mt-60'>
          <button
            className="gradient-border-button border-0 text-white rounded-[5px] z-10 relative px-10 py-[15px] lg:px-[56px] lg:py-[19px]"
            onClick={addCountItems}
          >
            {theme.theme === 'light' ? (
              <span className="rounded-10  bg-viola dark:bg-viola-dark z-0">
                <p className="button-text font-semibold text-base leading-1.1 bg-switch dark:bg-white z-20">
                  More
                </p>
              </span>
            ) : (
              <p className="button-text font-semibold text-base leading-1.1 dark:bg-white z-20">
                More
              </p>
            )}
          </button>
        </div>
      )}
    </section>
  );
};
