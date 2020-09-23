/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../../Components/Details/Card';
import './Details.scss';

const Details = ({ avatar, vehicle }) => (
  <section className="details">
    <h2>{avatar.name}</h2>

    {(avatar.name)
      ? (
        <>
          <Card array={Object.entries(avatar).slice(3, 7)} title="General Information" />
          <Card array={Object.entries(vehicle)[1]} title="Vehicles" />
        </>
      )
      : (
        <>
        </>
      )}
  </section>
);

export default Details;
