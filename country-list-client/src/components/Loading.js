import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="App">
        <div className="c-loading">
          <div className="c-loading-spinner">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;