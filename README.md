[![Build Status](https://travis-ci.org/msmfsd/react-github-stars.svg?branch=master)](https://travis-ci.org/msmfsd/react-github-stars)

# react-github-stars
**react-github-stars** is a React component to display a Github users total amount of stars across all their repos

## Installation
You can install this package via `npm`:
```bash
npm install react-github-stars --save
```

## Usage
The ReactGithubStars component renders a simple star icon and number count of total repo stars for a valid Github username.

```js
import React, { Component } from 'react';
import { ReactGithubStars } from 'react-github-stars';

class App extends Component {
  render() {
    return (
      <div>
        <ReactGithubStars
            username="torvalds"
            defaultColor={true}
            displayBorder={true} />
      </div>
    );
  }
}
```

#### Properties
* **username**: a Github username - required.
* **defaultColor**: if true the star icon and count will be black-grey, if false the star will be yellow and the count will be white - required.
* **displayBorder**: if true the content will have white background, padding and a black-grey border - required.

---

## Contributing
Feel free to open an issue or post a pull request, remember to lint your code before sending pull requests.

## License
MIT License
