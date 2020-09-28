// import { element } from 'prop-types';
import React from 'react';
import { validateStrings } from '../../HELPERS/validators';
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
              <span className="cardDetailKey">{validateStrings(key)}</span>
              <span className="cardDetailValue">{validateStrings(value)}</span>
            </li>
          ))
          : array.map((vehicleCard) => (
            <li key={vehicleCard.name}>
              <span className="cardDetailKey">{validateStrings(vehicleCard.name)}</span>
              <span className="cardDetailValue">{validateStrings(vehicleCard.vehicleClass)}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Card;
