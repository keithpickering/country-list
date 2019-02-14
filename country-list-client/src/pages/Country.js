import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Country extends Component {
  // Initialize state
  constructor(props) {
    super(props);
    this.state = {
      country: [],
      valid: true
    }
  }

  componentWillMount() {
    // Get this country's full info from the API
    const countryId = this.props.match.params.countryId;
    
    fetch('https://restcountries.eu/rest/v2/alpha/'+countryId)
    .then(res => res.json())
    .then(country => this.setState({ country }))
    .then(() => {
      if (!this.state.country.name)
        this.setState({ valid: false })
    });
  }

  createStatItems = (stats) => {
    let items = [];

    for (let i = 0; i < stats.length; i++) {
      items.push(
        <div key={i} className="c-stats__item">
          <dt className="c-stats__term">{stats[i].term}</dt>
          <dd className="c-stats__def">{stats[i].def}</dd>
        </div>
      );
    }

    return items;
  }

  render() {
    const country = this.state.country;

    if (this.state.valid) {
      // Get list of languages
      let languages = '';
      if (country.languages) {
        for (let i = 0; i < country.languages.length; i++) {
          languages += country.languages[i].name;
          if (i < country.languages.length - 1)
            languages += ', ';
        }
      }

      return (
        <div className="App">
          <h1 className="c-page-title">
            <img src={country.flag} alt="Flag" className="c-page-title__flag" />
            <span>{country.name}</span>
          </h1>

          <article className="c-article">
            <dl className="c-stats">
              {this.createStatItems([
                {
                  term: 'Capital',
                  def: country.capital || 'N/A'
                },
                {
                  term: 'Population',
                  def: country.population ?
                       country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                       : 'N/A'
                },
                {
                  term: 'Languages',
                  def: languages || 'N/A'
                },
                {
                  term: 'Region',
                  def: country.region || 'N/A'
                }
              ])}
            </dl>

            <div className="u-text-center">
              <Link to="/" className="c-btn">
                Go Back
              </Link>
            </div>
          </article>
        </div>
      );
    } else {
      return (
        <Redirect to="/error" />
      );
    }
  }
}

export default Country;