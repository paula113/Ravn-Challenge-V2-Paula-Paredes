/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../../Components/Details/Card';
import './Details.scss';

const validateAvatarVehicle = (GeneralInfo, vehicles) => {
  switch (vehicles.length > 0) {
    case (true):
      // console.log(vehicle);

      return (
        <>
          <Card array={GeneralInfo} title="General Information" />
          <Card array={vehicles} title="Vehicles" />
        </>
      );
    default:
      return <Card array={GeneralInfo} title="General Information" />;
  }
};

const Details = ({ avatar, vehicle }) => (
  <section className="details">
    <h2>{avatar.name}</h2>

    {(avatar.name)
      ? validateAvatarVehicle(Object.entries(avatar).slice(3, 7), (Object.entries(vehicle)[1]).flat().filter((ele) => ele !== 'vehicles'))
      : (
        <>
        </>
      )}
  </section>
);

export default Details;
