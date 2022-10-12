import React from 'react';
import '../stylesheets/Character.css';

function Character() {
  return (
    <div className='character'>
      <img 
        className='character__img'
        src={require('../images/char_ragnar.png')}
        alt='Ragnar' />
      <div className='character__txt'>
        <h2 className='character__name'>Ragnar Lothbrok</h2>
        <h3 className='character__features'>Viking Warrior, farmer</h3>
        <p className='character__description'>Ragnar "Lothbrok" Sigurdsson (Old Norse: Ragnarr Loðbrók, Ragnar means "keeper of the fort" and Lothbrok means "shaggy breeches") is a Viking farmer and warrior who yearns to raid the rumored riches of undiscovered England. His first wife is Lagertha, and they have two children named Gyda and Bjorn. His second wife is Aslaug, and they have four sons named Ubbe, Hvitserk, Sigurd, and Ivar. Ragnar is the younger brother of Rollo. He becomes King of Kattegat, in southern Norway</p>
      </div>
    </div>
  );
}

export default Character;
