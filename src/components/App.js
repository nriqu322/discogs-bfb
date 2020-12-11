import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ArtistList from '../containers/ArtistList';
import SearchForm from '../containers/SearchForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <SearchForm />
        <ArtistList />
      </Route>
    </Switch>
    <Footer />
  </Router>
);

export default App;
