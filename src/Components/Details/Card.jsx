// import { element } from 'prop-types';
import React from 'react';
import './Card.scss';
// import Row from './Row';

const Card = (prop) => {
  const {
    array, title,
  } = prop;
  // const [vehicles, setVehicles] = useState([]);
  // const [vehicles, setVehicles] = useState([]);

  // console.log(Object.entries(avatar));
  // if (title === 'General Information') { setData(Object.entries(avatar).slice(3, 7)); }
  // if (title === 'Vehicles') { setData(Object.entries(avatar.vehicleConnection.vehicles)); }
  // if (title === 'Vehicles') { console.log((obj)); }
  const seeVehicles = (arr) => {
    let element = [];
    if (!(typeof arr === 'undefined') && arr.length > 0) {
      for (let i = 0; i < arr.length; i += 1) {
        element = arr[i];
      }
    }
    return (
      <li>
        <span className="cardDetailKey">{element.name}</span>
        <span className="cardDetailValue">{element.vehicleClass}</span>
      </li>
    );
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
