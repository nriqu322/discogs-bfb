import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArtistList from '../containers/ArtistList';
import SearchForm from '../containers/SearchForm';

const App = () => (
  <Router>
    {/* <Header /> */}
    <Switch>
      <Route exact path="/">
        <SearchForm />
        <ArtistList />
      </Route>
      <Route path="/details/:id"/>
    </Switch>
  </Router>
);

export default App;
