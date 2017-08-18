import React from 'react';
import { Route, Redirect, IndexRedirect } from 'react-router';

// ===================
// Containers
// ===================
import RootContainer from '../a_container/root';
import TestContainer from '../a_container/home/index';
import FetchDataContainer from '../a_container/home/fetchDataContainer';
import FetchUserContainer from '../a_container/home/fetchUserContainer';
import Com from '../a_component/test';

export default (
  <Route path="/" component={RootContainer}>
    <IndexRedirect to="/home" />
    <Route path="/home" component={TestContainer} />
    <Route path="/home2" component={Com} />
    <Route path="/fetch" component={FetchDataContainer} />
    <Route path="/fetchUser" component={FetchUserContainer} />
    <Redirect from='*' to='/'  />
  </Route>
);
