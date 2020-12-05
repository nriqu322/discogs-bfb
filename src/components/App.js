import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArtistList from '../containers/ArtistList';

const App = () => (
  <Router>
    {/* <Header /> */}
    <Switch>
      <Route exact path="/">
        <ArtistList/>
      </Route>
      <Route path="/details/:id"/>
    </Switch>
  </Router>
);

export default App;
