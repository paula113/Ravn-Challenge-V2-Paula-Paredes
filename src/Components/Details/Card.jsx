// import { element } from 'prop-types';
import React from 'react';
import './Card.scss';

const Card = (prop) => {
  const {
    array, title,
  } = prop;

  return (
    <div className="cardDetails">
      <h2>{title}</h2>
      <ul>
        {(title === 'General Information')
          ? array.map(([key, value]) => (
            <li key={key}>
              <span className="cardDetailKey">{key}</span>
              <span className="cardDetailValue">{value}</span>
            </li>
          ))
          : array.map((vehicleCard) => (
            <li key={vehicleCard.name}>
              <span className="cardDetailKey">{vehicleCard.name}</span>
              <span className="cardDetailValue">{vehicleCard.vehicleClass}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Card;
