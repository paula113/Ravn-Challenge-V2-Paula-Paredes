import React, { useState }  from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import GET_ALL_PEOPLE from './API/Query'
import { useQuery } from '@apollo/client';
import Registry from './views/Registry/Registry';
import Details from './views/Details/Details';
import './App.scss';

// import { from } from '@apollo/react-hooks';

const App = () => {
  const { loading, error, data } = useQuery(GET_ALL_PEOPLE);
  const [avatar, setAvatar] = useState({})

  if (error) return `Error! ${error.message}`;

  return(
  <main className='main-board'>
    <Registry loading={loading} data={data} setAvatar={setAvatar}/>
    <Details data={data} avatar={avatar}/>
  </main>
  // <Router>
  //   <Switch>
  //     <Route exact path="/" component={Registry} />
  //     <Route exact path="/Details" component={Details} />
  //   </Switch>
  // </Router>
)};

export default App;
