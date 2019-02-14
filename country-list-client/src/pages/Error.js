import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Error extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="c-page-title">Error</h1>

        <p className="u-text-center">Whoops, that page doesn&rsquo;t exist.</p>

        <div className="u-text-center">
          <Link to="/" className="c-btn">
            Go Home
          </Link>
        </div>
      </div>
    );
  }
}

export default Error;