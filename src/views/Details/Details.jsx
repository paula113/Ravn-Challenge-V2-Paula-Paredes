import React from 'react';
import './Details.scss'

const Details = ({avatar}) => (
  <section className='details'>
    <h1>{avatar.name}</h1>
    {
      console.log(avatar)
    }
  </section>
);

export default Details;
