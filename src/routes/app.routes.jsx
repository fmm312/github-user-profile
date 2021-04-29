import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UserFind from '../pages/UserFind';
import Profile from '../pages/Profile';

const AppRoute = () => {
  return (
    <Switch>
        <Route 
          path="/"
          component={UserFind} 
          exact    
        />
        <Route 
          path="/profile"
          component={Profile} 
          exact    
        />
    </Switch>
  );
}

export default AppRoute;