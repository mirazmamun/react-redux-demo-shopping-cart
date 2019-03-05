import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { reduceRight } from 'async';
import store from './store/store';


// import { ApolloProvider } from 'react-apollo';
// import { ApolloClient } from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';

// import { ApolloLink } from 'apollo-client-preset'

// const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjch1ey2k06kh012492k8fhw2' });

// const middlewareAuthLink = new ApolloLink((operation, forward) => {
//   const token = localStorage.getItem('scotch_auth_gcool_token')
//   const authorizationHeader = token ? `Bearer ${token}` : null
//   operation.setContext({
//     headers: {
//       authorization: authorizationHeader
//     }
//   })
//   return forward(operation)
// })

// const httpLinkWithAuthToken = middlewareAuthLink.concat(httpLink)


// const client = new ApolloClient({
//   link: httpLinkWithAuthToken,
//   cache: new InMemoryCache()
// });

let render = () => { ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root')
);
};
render();
store.subscribe(render);
registerServiceWorker();
