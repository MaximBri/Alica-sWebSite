import { useEffect, useState } from 'react';

import { SocialLinks } from '@/components/SocialLinks';
import { Button } from '@/components/Button';
import { HeroPhoto } from '@/components/HeroPhoto';
import { useTheme } from '@/context/ThemeContext';
import dotDark from '@/assets/hero/radial-hero-dark.png';
import dotLight from '@/assets/hero/radial-hero-light.png';
import dotMobileLight from '@/assets/hero/radial-right-light.png'
import circlesDark from '@/assets/shared/circles-header-dark.png';
import circlesLight from '@/assets/shared/circles-header-light.png';

export const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const { theme } = useTheme();
  const words = ['Frontend', 'Backend'];

  // Настройки
  const typingSpeed = 100; // Скорость печати
  const pauseDuration = 600; // Пауза после завершения слова

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        setText('');
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? pauseDuration : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentWordIndex]);

  const showCursor = text !== words[currentWordIndex];

  return (
    <section className="flex relative mt-10 lg:mt-6 gap-4 justify-between">
      <div className="flex flex-col w-full lg:max-w-[min(750px,80%)] flex-shrink text-center lg:text-left">
        <h2 className=" text-[26px] md:text-[28px] lg:text-[32px] xl:text-[40px] font-semibold leading-1.1 mb-4 lg:mb-[32px]">
          I am Alice!
        </h2>
        <h1 className="font-semibold leading-1.1 text-[40px] md:text-[44px] lg:text-[48px] xl:text-[60px] tracking-custom lg:mr-[50px]">
          Senior developer with experience in<br></br>
          <strong className="gradient-text">
            {text}
            {showCursor && `|`}
          </strong>
        </h1>
        <HeroPhoto classList="flex lg:hidden mt-8 w-full items-center" />
        <p className="text-sm lg:text-base my-8 lg:my-10 font-sans leading-[1.4] font-light break-words lg:mr-10">
          I unravel intricate technical challenges to design and build seamless,
          high-performance interfaces that empower users and elevate digital
          experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-[16px] lg:gap-5 xl:gap-10">
          <Button
            classList="px-10 py-4 lg:px-[56px] lg:py-[19px] text-sm lg:text-base"
            text="Contact Me"
          />
          <SocialLinks />
        </div>
      </div>
      <HeroPhoto classList="hidden lg:flex" />
      <img
        className={`absolute right-[-10vw] md:right-[-17vw] top-[-10vw] -z-10 ${
          theme === 'light' ? 'hidden md:block' : ''
        }`}
        src={theme === 'dark' ? dotDark : dotLight}
        alt="decor"
      />
      <img
        className={`absolute right-[-18vw] top-[-20dvh] -z-10 hidden lg:block`}
        src={theme === 'dark' ? circlesDark : circlesLight}
        alt="decor"
      />
      {theme === 'light' && <img className='absolute right-[-5vw] top-[-10%] md:hidden -z-10' src={dotMobileLight} alt="decor" />}
    </section>
  );
};
