import { SectionTheme } from '@/components/SectionTheme';
import { SocialLinks } from '@/components/SocialLinks';
import photo from '@/assets/about/image.png';
import { useTheme } from '@/context/ThemeContext';

export const About = () => {
  const { theme } = useTheme();
  return (
    <section
      id="about"
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10 pb-60 md:py-[80px] lg:py-100 text-black dark:text-white"
    >
      <div>
        <SectionTheme message={'About me'} />
        <h2 className="font-semibold text-3xl md:text-4xl lg:text-50 leading-1.1 mt-4 mb-6 lg:mt-6 lg:mb-10 ">
          More than 20 Years of Programming Experience
        </h2>
        <p className="font-sans font-light text-sm leading-[1.43]">
          I'm Alice, a Frontend Developer with over 20 years of programming
          experience and 10 years of freelancing. I excel at tackling complex
          technical challenges and crafting intuitive, high-performance
          interfaces that enhance user experiences.{' '}
        </p>
        <p className="mt-4 mb-6 lg:my-6 font-sans font-light text-sm leading-[1.43]">
          My diverse background in the industry enables me to deliver innovative
          solutions that connect people across the digital world.
        </p>
        <div className="flex flex-col gap-4 lg:gap-10 sm:flex-row items-center">
          <button className="gradient-border-button text-white border-0 z-10 relative">
            {theme === 'light' ? (
              <span className="rounded-10 bg-viola dark:bg-viola-dark">
                <p className="button-text font-semibold text-base leading-1.1 px-10 py-4 lg:px-[56px] lg:py-[19px] bg-switch dark:bg-white text-nowrap">
                  Download CV
                </p>
              </span>
            ) : (
              <p className="button-text font-semibold text-base leading-1.1 px-10 py-4 lg:px-[56px] lg:py-[19px] dark:bg-white text-nowrap">
                Download CV
              </p>
            )}
          </button>
          <SocialLinks />
        </div>
      </div>
      <img className='mx-auto lg:mx-0 lg:ml-auto' src={photo} alt="about" />
    </section>
  );
};
