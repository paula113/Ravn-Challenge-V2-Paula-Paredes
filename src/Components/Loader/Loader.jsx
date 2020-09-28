/* eslint-disable react/prop-types */
import React from 'react';
import './Loader.scss';

const Loading = ({ Loader }) => (
  <span className="lodingWrapper">
    <img src={Loader} alt="Loader" />
    Loading
  </span>
);
export default Loading;
