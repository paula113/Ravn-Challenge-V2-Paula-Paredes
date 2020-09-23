/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../../Components/Details/Card';
import './Details.scss';

const Details = ({ avatar, vehicle }) => {
  const validateAvatar = (info, vehicles) => {
    switch (vehicles.length > 0) {
      case (true):
        return (
          <>
            <Card array={info} title="General Information" />
            <Card array={vehicles} title="Vehicles" />
          </>
        );
      default:
        return <Card array={info} title="General Information" />;
    }
  };
  return (
    <section className="details">
      <h2>{avatar.name}</h2>

      {(Object.entries(vehicle)[1])
        ? validateAvatar(Object.entries(avatar).slice(3, 7), (Object.entries(vehicle)[1]).flat().filter((ele) => ele !== 'vehicles'))
        : (
          <>
          </>
        )}
    </section>
  );
};

export default Details;
