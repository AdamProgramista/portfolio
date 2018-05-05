import React from 'react';
import './Contact.scss';
import classNames from 'classnames';

export const SingleContact = (props) => {
  const { icon, text } = props;
  return (
    <div className='contact__ways__single'>
      <i className={classNames('contact__ways__single__icon', props.classIcon)}>{props.icon}</i>
      <span>{text}</span>
    </div>
  )
}