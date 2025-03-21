import { useState } from 'react';

import { SectionTheme } from '@/components/SectionTheme';
import { SocialLinks } from '@/components/SocialLinks';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { useTheme } from '@/context/ThemeContext';
import { contactIconsList } from '@/utils/data/contactsIconsList';
import dotDark from '@/assets/contacts/radial-right-dark.png';
import dotLight from '@/assets/contacts/radial-right-light.png';
import radialDotDark from '@/assets/contacts/radial-contacts-dark.png';

export const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const { theme } = useTheme();

  const sendForm = () => {
    // Логика отправки формы
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <section id="contacts" className="bg-contacts dark:bg-transparent relative">
      <div className="flex flex-col items-center pt-10 pb-11 md:py-[70px] lg:py-100 max-w-[92vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-[75vw] 2xl:max-w-[66vw] mx-auto">
        <SectionTheme message="Get in Touch!" />
        <h2 className="py-6 md:pb-10 lg:pt-6 lg:pb-60 text-center font-semibold text-3xl md:text-4xl lg:text-50 leading-1.1">
          Let’s Start Working<br></br>Together
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10">
          <div className="flex flex-col gap-6 w-full items-center">
            <ul className="flex flex-col gap-4 w-full items-center">
              <li className="opacity-60 md:opacity-100 max-w-[72%] md:max-w-none w-full bg-contacts-gradient-light dark:bg-contacts-gradient-dark p-4 lg:px-6 lg:py-[26px] rounded-2xl flex items-center gap-4 md:gap-6">
                <div
                  className={`w-[38px] h-[38px] flex items-center justify-center border border-primary dark:border-primary-dark rounded-full ${
                    theme !== 'dark' ? 'bg-icons' : 'border-0'
                  } dark:bg-icons-bg-dark`}
                >
                  {theme === 'light'
                    ? contactIconsList[0].light
                    : contactIconsList[0].dark}
                </div>
                <div className="flex flex-col gap-1 leading-1.1">
                  <h4 className="font-sans text-xs font-light opacity-[0.6]">
                    Phone
                  </h4>
                  <a
                    className="font-semibold text-base"
                    href="tel:+12345678901"
                  >
                    +1 234 567 8901
                  </a>
                </div>
              </li>
              <li className="opacity-60 md:opacity-100 max-w-[72%] md:max-w-none w-full bg-contacts-gradient-light dark:bg-contacts-gradient-dark px-6 py-[26px] rounded-2xl flex items-center gap-6">
                <div
                  className={`w-[38px] h-[38px] flex items-center justify-center border border-primary dark:border-primary-dark rounded-full ${
                    theme !== 'dark' ? 'bg-icons' : 'border-0'
                  } dark:bg-icons-bg-dark`}
                >
                  {theme === 'light'
                    ? contactIconsList[1].light
                    : contactIconsList[1].dark}
                </div>
                <div>
                  <h4 className="font-sans text-xs font-light opacity-[0.6]">
                    Email
                  </h4>
                  <a
                    className="font-semibold text-base"
                    href="mailto:email@email.com"
                  >
                    email@email.com
                  </a>
                </div>
              </li>
              <li className="opacity-60 md:opacity-100 max-w-[72%] md:max-w-none w-full bg-contacts-gradient-light dark:bg-contacts-gradient-dark px-6 py-[26px] rounded-2xl flex items-center gap-6">
                <div
                  className={`w-[38px] h-[38px] flex items-center justify-center border border-primary dark:border-primary-dark rounded-full ${
                    theme !== 'dark' ? 'bg-icons' : 'border-0'
                  } dark:bg-icons-bg-dark`}
                >
                  {theme === 'light'
                    ? contactIconsList[2].light
                    : contactIconsList[2].dark}
                </div>
                <div>
                  <h4 className="font-sans text-xs font-light opacity-[0.6]">
                    Linkedin
                  </h4>
                  <a
                    className="font-semibold text-base"
                    href="https://linkedin.com"
                    target="_blank"
                  >
                    @linkedin.com
                  </a>
                </div>
              </li>
            </ul>
            <SocialLinks />
          </div>
          <form action={sendForm} className="flex flex-col gap-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="font-sans text-sm placeholder:color-placeholder font-light px-4 py-[18px] rounded-10 border border-links w-full bg-white dark:bg-buttons-dark"
              type="text"
              placeholder="Your name"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="font-sans text-sm placeholder:color-placeholder font-light px-4 py-[18px] rounded-10 border border-links w-full bg-white dark:bg-buttons-dark"
              type="email"
              placeholder="Your email"
            />
            <input
              value={phone}
              onChange={(e) => setPhone((e.target.value))}
              className="font-sans text-sm placeholder:color-placeholder font-light px-4 py-[18px] rounded-10 border border-links w-full bg-white dark:bg-buttons-dark"
              type="phone"
              placeholder="Your phone"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="resize-none h-[118px] font-sans text-sm placeholder:color-placeholder font-light px-4 py-[18px] rounded-10 border border-links w-full bg-white dark:bg-buttons-dark"
              placeholder="Your message"
            ></textarea>
            <label className="flex items-center p-4 gap-5 font-sans text-xs text-placeholder dark:text-white">
              <Checkbox
                isChecked={isChecked}
                setIsChecked={handleCheckboxChange}
              />
              I consent to the processing of my personal data.
            </label>
            <nav className="flex w-full gap-4 items-center justify-between">
              <span className="min-w-[150px] lg:min-w-[225px] w-[35%] button-wrapper rounded-10 p-[6px] whitespace-nowrap bg-grey-light dark:bg-grey-dark border border-primary dark:border-primary-dark h-[47px] md:h-[68px] inline-block">
                <button className="gradient-border-button-bg border-0 text-white rounded-[5px] z-10 px-2 relative py-2 md:py-[15px] lg:py-[19px] h-full w-full">
                  {theme === 'light' ? (
                    <span className="rounded-10  bg-viola dark:bg-viola-dark z-0">
                      <p className="button-text font-semibold text-base leading-1.1 bg-switch dark:bg-white z-20 tracking-custom">
                        Download CV
                      </p>
                    </span>
                  ) : (
                    <p className="button-text font-semibold text-base leading-1.1 dark:bg-white z-20 tracking-custom">
                      Download CV
                    </p>
                  )}
                </button>
              </span>
              <Button
                onClick={sendForm}
                classListWrapper="w-[20%] md:w-[60%] text-sm lg:text-base flex-grow h-[47px] md:h-[68px]"
                classList="w-full h-full py-2 md:py-[19px]"
                text="Send"
              />
            </nav>
          </form>
        </div>
      </div>
      <img
        src={theme === 'light' ? dotLight : dotDark}
        className="hidden lg:block absolute right-[-1vw] top-[-80%] -z-10"
        alt="decor"
      />
      {theme === 'dark' && (
        <img
          className="xs:hidden absolute top-[-26%] w-[100vw]"
          src={radialDotDark}
          alt="decor"
        ></img>
      )}
    </section>
  );
};
