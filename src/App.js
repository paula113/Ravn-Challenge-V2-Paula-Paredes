import React, { useState } from 'react';
// import {
//   BrowserRouter as Router, Route, Switch,
// } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import GET_ALL_PEOPLE from './API/Query';
import Registry from './views/Registry/Registry';
import Details from './views/Details/Details';
import './App.scss';

const App = () => {
  const { loading, error, data } = useQuery(GET_ALL_PEOPLE);
  const [avatar, setAvatar] = useState({});
  if (error) return `Error! ${error.message}`;

  return (
    <main className="mainBoard">
      <Registry loading={loading} data={data} setAvatar={setAvatar} />
      <Details avatar={avatar} vehicle={avatar.vehicleConnection || ''} />
    </main>
  );
};

export default App;
