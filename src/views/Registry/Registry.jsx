import React from 'react';
// import { useQuery } from '@apollo/client';
// import GET_ALL_PEOPLE from '../../API/Query';
import AllPeopleRow from '../../Components/AllPeople/AllPeopleRow';
import './Registry.scss';


const Registry = ({ loading, data, setAvatar }) => {
  let people = []
  if (data) {
    people = (Object.entries(data.allPeople)[3][1]).map((e, i) => e);
  }
  // if (loading) return 'Loading...';
  return (
    <section className="registry" >
      <h1>Registry</h1>
      {(loading) ? <span>Loading....</span>:
      people.map((info) => <AllPeopleRow key={info.id} 
      info={info} 
      setAvatar={setAvatar}
      />)
      }

    </section>
  );
};

export default Registry;
