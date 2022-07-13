import React from 'react';
import './Header.css';
import CTA from './CTA';
import r1 from '../../assets/r1.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Rohit Thapa</h1>
        <h5 className='text-light'>Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={r1} alt='me' />
        </div>
        <a href='#footer' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
