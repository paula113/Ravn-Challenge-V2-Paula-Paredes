import React from 'react';
import { useQuery } from '@apollo/client';
import GET_ALL_PEOPLE from '../API/Query';

const Registry = ({ onDogSelected }) => {
  const { loading, error, data } = useQuery(GET_ALL_PEOPLE);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h1>Registry</h1>
      <select name="dog" onChange={onDogSelected}>
        {
            console.log(data)
        // data.dogs.map((dog) => (
        //   <option key={dog.id} value={dog.breed}>
        //     {dog.breed}
        //   </option>
        // ))
        }
      </select>
    </div>
  );
};

export default Registry;
