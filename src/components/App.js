import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    {/* <Header /> */}
    <Switch>
      <Route exact path="/">

      </Route>
      <Route path="/details/:id"/>
    </Switch>
  </Router>
);

export default App;
