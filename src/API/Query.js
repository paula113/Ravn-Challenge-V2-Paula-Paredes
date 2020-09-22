import { gql } from '@apollo/client';

const GET_ALL_PEOPLE = gql`
{
    allPeople{
      
        pageInfo{
         hasNextPage,
         hasPreviousPage
       }
      totalCount,
       people {
        id,
        name,
        eyeColor,
        hairColor,
        skinColor,
        birthYear,
        homeworld{
         name, 
        }
       vehicleConnection{
        vehicles{
          vehicleClass
        }
       }
      }
    }
  }
`;

export default GET_ALL_PEOPLE;
