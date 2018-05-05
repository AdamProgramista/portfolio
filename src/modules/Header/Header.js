import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <h1>Hi there!</h1>
        <h2>
          <span>My name is Adam and</span><br />
          <span>I will be great<br />front-end developer!</span>
        </h2>
      <a href='#aboutme' className='header__button-link'>What?!<br />Show me more!</a>
    </header>
  )
}
