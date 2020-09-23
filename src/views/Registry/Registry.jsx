/* eslint-disable react/prop-types */
import React from 'react';
// import { useQuery } from '@apollo/client';
// import GET_ALL_PEOPLE from '../../API/Query';
import AllPeopleRow from '../../Components/AllPeople/AllPeopleRow';
import './Registry.scss';

const Registry = ({ loading, data, setAvatar }) => {
  let people = [];
  if (data) {
    people = (Object.entries(data.allPeople)[3][1]).map((e) => e);
  }
  return (
    <section className="registry">
      {(loading) ? <span>Loading....</span>
        : people.map((info) => (
          <AllPeopleRow
            key={info.id}
            info={info}
            species={info.species || 'Human'}
            setAvatar={setAvatar}
          />
        ))}

    </section>
  );
};

export default Registry;
