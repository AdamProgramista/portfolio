import React from 'react';
import './Contact.scss';
import classNames from 'classnames';

export const SingleLink = (props) => {
  const { icon, text, link } = props;
  return (
    <a className='contact__ways--link' href={link} target="_blank">
      <div className='contact__ways__single'>
        <i className={classNames('contact__ways__single__icon', props.classIcon)}>{props.icon}</i>
        <span>{text}</span>
      </div>
    </a>
  )
}