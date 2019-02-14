import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './App.scss';

// Pages
import Home from './pages/Home';
import Country from './pages/Country';

class App extends Component {
  render() {
    const App = () => (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/country/:countryId' component={Country} />
      </Switch>
    );

    return (
      <Switch>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Switch>
    );
  }
}

export default App;