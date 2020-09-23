/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './AllPeople.scss';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const AllPeopleRow = ({ setAvatar, info, species }) => {
  const {
    name, homeworld,
  } = info;

  return (
    <div className="AllPeopleRow" onClick={() => setAvatar(info)} role="button" tabIndex={0} onKeyPress={() => {}}>
      <div>
        <h2>{name}</h2>
        <p>
          {species.name ? species.name : 'Human'}
          {' '}
          from
          {' '}
          {homeworld.name}
        </p>
      </div>
      <ArrowForwardIosIcon className="icon" />
    </div>

  );
};

AllPeopleRow.defaultProps = {
  info: {
    name: 'unknown',
    species: {
      name: 'Human',
      classification: 'waaa',
    },
  },
};

AllPeopleRow.prototype = {
  info: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOfType([
      PropTypes.string]),
  ]),
};
export default AllPeopleRow;
