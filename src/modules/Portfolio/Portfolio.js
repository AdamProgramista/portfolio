import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './Portfolio.scss';
import { PortfolioItem } from './PortfolioItem';
import piggame from '../../images/piggame.png';
import todo from '../../images/todo.png';

export const Portfolio = () => {
  return (
    <ScrollableAnchor id={'portfolio'}>
      <section className='portfolio'>
        <a href='#portfolio'>
          <h1 className='portfolio__h1'>Portfolio</h1>
        </a>
        <div className='portfolio__projects'>
          <PortfolioItem 
            src={piggame}
            alt='piggame screen'
            linkToLive='#'
            linkToCode='#'
            text='React Pig Game'/>
          <PortfolioItem 
            src={todo}
            alt='todo screen'
            linkToLive='#'
            linkToCode='#'
            text='React To Do'/>
        </div>


        {/* <div className='portfolio__items'>
          <figure className='portfolio__items__figure'>
            <img src={piggame} alt='piggame screen' />
            <figcaption>Pig Game: React+CSS+RWD</figcaption>
          </figure>
          <figure className='portfolio__items__figure'>
            <img className='portfolio__items__figure__img' src={todo} alt='todo screen' />
            <figcaption>To do: React+CSS+RWD</figcaption>
          </figure>
        </div>
        <a 
          href='https://github.com/adamkulig' className='portfolio__link' target="_blank">
          More on my gitHub here!
        </a> */}
        
      </section>
    </ScrollableAnchor>
  )
}
