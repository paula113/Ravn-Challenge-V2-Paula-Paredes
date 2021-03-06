import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import GET_ALL_PEOPLE from './API/Query';
import Registry from './views/Registry/Registry';
import Details from './views/Details/Details';
import './App.scss';

const App = () => {
  const { loading, error, data } = useQuery(GET_ALL_PEOPLE);
  const [avatar, setAvatar] = useState({});
  if (error) {
    return (
      <p className="errorMessage">
        Error!
        {error.message}
      </p>
    );
  }

  return (
    <main className="mainBoard">
      <Registry loading={loading} data={data} setAvatar={setAvatar} />
      <Details avatar={avatar} vehicle={avatar.vehicleConnection || ''} />
    </main>
  );
};

export default App;
