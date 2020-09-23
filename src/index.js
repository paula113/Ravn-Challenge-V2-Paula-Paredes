import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { InMemoryCache, ApolloClient, ApolloProvider } from '@apollo/client';
// import Registry from './views/Registry/Registry';
// import { ApolloProvider } from '@apollo/react-hooks';
import NavBar from './Components/NavBar/NavBar';

import App from './App';
import * as serviceWorker from './serviceWorker';

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <NavBar />
    {/* <Registry /> */}
    <App />
  </ApolloProvider>
);
render(ApolloApp(App), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
