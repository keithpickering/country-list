import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    }
  }

  addClick = () => {
    fetch('api/addClick/'+this.props.country.alpha3Code, {
      method: 'POST'
    })
    .then(res => res.json())
    .then(res => console.log(this.props.country.name + ' clicks: ' + res.clicks));
  }

  render() {
    const countryId   = this.props.country.alpha3Code;
    const countryName = this.props.country.name;
    const clickCount  = this.props.clicks;

    return (
      <li className="c-country-list__item c-country">
        <Link to={{ pathname: '/country/'+countryId }} onClick={this.addClick}>
          {countryName}
          {clickCount > 0 ?
            <span className="c-country__badge" >
              {clickCount}
            </span>
          : null}
        </Link>
      </li>
    );
  }
}

export default ListItem;