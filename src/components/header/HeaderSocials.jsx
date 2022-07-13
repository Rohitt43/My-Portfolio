import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.linkedin.com/in/roet-thapa-55b33414b/'
        target='_blank'
      >
        <BsLinkedin />
      </a>
      <a href='https://github.com/Roet43' target='_blank'>
        <FaGithub />
      </a>
      <a href='https://dribbble.com/baibhavkc11' target='_blank'>
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
