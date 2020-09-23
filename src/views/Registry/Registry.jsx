/* eslint-disable react/prop-types */
import React from 'react';
import AllPeopleRow from '../../Components/AllPeople/AllPeopleRow';
import Loader from '../../assets/loader.svg';
import './Registry.scss';

const Registry = ({ loading, data, setAvatar }) => {
  let people = [];
  if (data) {
    people = (Object.entries(data.allPeople)[3][1]).map((e) => e);
  }
  return (
    <section className="registry">
      {(loading) ? (
        <span className="lodingWrapper">
          <img src={Loader} alt="Loder" />
          Loading
        </span>
      )
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
