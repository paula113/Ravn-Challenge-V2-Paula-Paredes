/* eslint-disable react/prop-types */
import React from 'react';
import AllPeopleRow from '../../Components/AllPeople/AllPeopleRow';
import Loader from '../../assets/loader.svg';
import './Registry.scss';
import Loading from '../../Components/Loader/Loader';

const Registry = ({ loading, data, setAvatar }) => {

  return (
    <section className="registry">
      {(loading) ? (
        <Loading Loader={Loader} />
      )
        : data.allPeople.people.map((info) => (
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
