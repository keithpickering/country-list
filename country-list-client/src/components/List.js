import React, { Component } from 'react';
import ListItem from '../components/ListItem';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: {}
    }
  }

  componentWillMount() {
    fetch('/api/getClicks/')
    .then(res => res.json())
    .then(clicks => this.setState({ clicks }));
  }

  createListItems = () => {
    let items = [];
    
    for (let i = 0; i < this.props.countries.length; i++) {
      if (this.props.countries[i] && this.state.clicks.clicks) {
        const countryId = this.props.countries[i].alpha3Code;
        items.push(
          <ListItem
            key={countryId}
            country={this.props.countries[i]}
            clicks={this.state.clicks.clicks[countryId] || 0}
          />
        );
      }
    }

    return items;
  }

  render() {
    return (
      <ul className="c-country-list">
        {this.createListItems()}
      </ul>
    );
  }
}

export default List;