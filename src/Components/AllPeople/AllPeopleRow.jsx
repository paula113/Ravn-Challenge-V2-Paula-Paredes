import React from 'react';
// import PropTypes from 'prop-types';

const AllPeopleRow = ({ setAvatar, 
  info = { name: 'nnamdi', species: { classification: 'adding'} } }) => (
  <div onClick={() => setAvatar(info)}>
    <h4>{info.name}</h4>
    {
        // console.log(info)
    }
  </div>

);

export default AllPeopleRow;
