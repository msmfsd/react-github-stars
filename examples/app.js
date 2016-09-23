import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactGithubStars from '../src/ReactGithubStars'

class App extends Component {
  render() {
    return (
      <div>
        <ReactGithubStars username="torvalds" defaultColor={true} displayBorder={true} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.body);
