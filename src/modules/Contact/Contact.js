import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { FaEnvelopeO, FaPhone, FaGithub, FaFacebook } from 'react-icons/lib/fa'
import './Contact.scss';
import { fb_link, github_link } from '../../links/links';
import { SingleContact } from './SingleContact';
import { SingleLink } from './SingleLink';

export const Contact = () => {
  return (
    <ScrollableAnchor id={'contact'}>
      <section className='contact'>
        <a href='#contact'>
          <h1 className='contact__h1'>Contact</h1>
        </a>
        <div className='contact__ways'>
          <SingleContact
            text='+48 660 395 550'
            icon={<FaPhone />} 
            classIcon='FaPhone'/>
          <SingleContact
            text='adamkulig92@poczta.fm'
            icon={<FaEnvelopeO />} 
            classIcon='FaEnvelopeO'/>
          <SingleLink
            text='GitHub'
            icon={<FaGithub />} 
            classIcon='FaGithub'
            link={github_link}/>  
          <SingleLink
            text='Facebook'
            icon={<FaFacebook />} 
            classIcon='FaFacebook'
            link={fb_link}/>  
        </div>
      </section>
    </ScrollableAnchor>
  )
}