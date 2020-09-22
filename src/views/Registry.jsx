import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_DOGS = gql`
  query {
    allPeople{
      
        pageInfo{
         hasNextPage,
         hasPreviousPage
       }
      totalCount
       people {
        id,
        name,
        birthYear,
        eyeColor,
        gender,
        hairColor,
        height,
        mass
        }
    }
    }
`;

const Registry = ({ onDogSelected }) => {
  const { loading, error, data } = useQuery(GET_DOGS);

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
