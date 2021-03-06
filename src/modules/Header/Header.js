import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './Header.scss';

export const Header = () => {
  return (
    <ScrollableAnchor id={'header'}>
      <header className='header'>
        <h1>Hi there!</h1>
          <h2>
            <span>My name is Adam and</span><br />
            <span>I will be great<br />front-end developer!</span>
          </h2>
        <a href='#aboutme' className='header__button-link'>What?!<br />Show me more!</a>
      </header>
    </ScrollableAnchor>
  )
}
