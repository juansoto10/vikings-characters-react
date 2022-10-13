import React from 'react';
import '../stylesheets/Character.css';

function Character(props) {
  return (
    <div className='character'>
      <img 
        className='character__img'
        src={require(`../images/char_${props.image}.png`)}
        alt='Ragnar' />
      <div className='character__txt'>
        <h2 className='character__name'>{props.name}</h2>
        <h3 className='character__features'>{props.features}</h3>
        <p className='character__description'>{props.description}</p>
      </div>
    </div>
  );
}

export default Character;
