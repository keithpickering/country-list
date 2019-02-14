import React, { Component } from 'react';

class Country extends Component {
  // Initialize state
  constructor(props) {
    super(props);
    this.state = {
      country: []
    }
  }

  componentWillMount() {
    // Get this country's full info from the API
    const countryId = this.props.match.params.countryId;
    
    fetch('https://restcountries.eu/rest/v2/alpha/'+countryId)
    .then(res => res.json())
    .then(country => this.setState({ country }));
  }

  // Return number of clicks from the Node backend
  getClicks = () => {
    fetch('/api/getClicks/' + this.props.match.params.countryId)
    .then(res => res.json())
    .then(res => this.setState({ clicks: res.clicks }))
    .catch(err => console.error(err));
  }

  // Return country info


  render() {
    const country = this.state.country;

    return (
      <div className="App">
        <h1>{ country.name }</h1>
      </div>
    );
  }
}

export default Country;