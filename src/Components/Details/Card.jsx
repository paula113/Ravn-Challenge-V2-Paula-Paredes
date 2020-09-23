// import { element } from 'prop-types';
import React from 'react';
import './Card.scss';
// import Row from './Row';

const Card = (prop) => {
  const {
    array, title,
  } = prop;

  const seeVehicles = (arr) => {
    // let element = [];
    if (!(typeof arr === 'undefined') && arr.length > 0) {
      console.log(arr);
      for (let i = 0; i < arr.length; i += 1) {
        return (
          <li>
            <span className="cardDetailKey">{arr[i].name}</span>
            <span className="cardDetailValue">{arr[i].vehicleClass}</span>
          </li>
        );
      }
    }
    // console.log(arr.length > 0);
    // console.log(obj[1].map(([key, value]) => key));
  };

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
          : seeVehicles(array[1])}
        {/* {console.log(obj.forEach(([key, value]) => console.log(`${key}: ${value}`)))} */}
        {/* <span>{obj.key}</span>
          <span>{obj.value}</span>
                      // <li>
            //   <span>{(obj[1][0] === undefined) ? '' : obj[1][0].name}</span>
            //   <span>{(obj[1][0] === undefined) ? '' : obj[1][0].vehicleClass}</span>
            // </li>

          */}

      </ul>
    </div>
  );
};
export default Card;
