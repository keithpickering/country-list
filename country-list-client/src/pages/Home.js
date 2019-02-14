import React, { Component } from 'react';
import List from '../components/List';

class Home extends Component {
  // Initialize state
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      visibleCountries: []
    }
  }

  // Fetch country list
  componentWillMount() {
    fetch('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code;flag')
    .then(res => res.json())
    .then(countries => this.setState({ countries }));
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Countries</h1>

        <List countries={this.state.countries} />
      </div>
    );
  }
}

export default Home;