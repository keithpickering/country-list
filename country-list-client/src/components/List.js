import React, { Component } from 'react';
import ListItem from '../components/ListItem';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: {},
      search: ''
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillMount() {
    fetch('/api/getClicks/')
    .then(res => res.json())
    .then(clicks => this.setState({ clicks }));
  }

  createListItems = () => {
    let items = [];

    // Sort countries by click count
    let countries = this.props.countries;
    if (this.state.clicks.clicks) {
      countries = countries.sort((a, b) => {
        const aClicks = this.state.clicks.clicks[a.alpha3Code] || 0;
        const bClicks = this.state.clicks.clicks[b.alpha3Code] || 0;
        return bClicks - aClicks;
      });
    }
    
    for (let i = 0; i < countries.length; i++) {
      // Skip if this country doesn't match the search term
      const countryName = countries[i].name.toLowerCase();
      if (
        this.state.search.length &&
        countryName.indexOf(this.state.search.toLowerCase()) === -1
      ) {
        continue;
      }

      if (this.props.countries[i] && this.state.clicks.clicks) {
        const countryId = countries[i].alpha3Code;
        items.push(
          <ListItem
            key={countryId}
            country={countries[i]}
            clicks={this.state.clicks.clicks[countryId] || 0}
          />
        );
      }
    }

    return items;
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form>
          <label className="u-hidden-visually">
            Search Countries:
          </label>

          <input
            type="text"
            placeholder="Search Countries"
            className="o-text-input"
            value={this.state.search}
            onChange={this.handleSearch}
          />
        </form>

        <ul className="c-country-list">
          {this.createListItems()}
        </ul>
      </div>
    );
  }
}

export default List;