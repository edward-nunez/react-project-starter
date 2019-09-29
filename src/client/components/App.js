import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './home/HomePage';
import NotFoundPage from './NotFoundPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
