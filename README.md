# react-ab-scatter

> React component for comparing scatter plots.
>
> Demo: https://a-zhang1.github.io/home/

[![NPM](https://img.shields.io/npm/v/react-ab-scatter.svg)](https://www.npmjs.com/package/react-ab-scatter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-ab-scatter
```

## Usage

```jsx
import React, { Component } from 'react'

import Viz from 'react-ab-scatter'

class Example extends Component {
  render() {
    return <Viz data = {mockData}
                WIDTH = {1000} // scatter plot width
                HEIGHT = {600} // scatter plot height
                Y_TRANSFORM = {20} // position on canvas - y
                X_TRANSFORM = {100}/> // position on canvas - x
  }
}
```
Input data schema :
```javascript
mockData = {
    "nodes": [
      {
        "idx": 0, //index of node, Number
        "id": "id0", // UID of node
        "group": 1 //group tag of node
      },
      {
        "idx": 0,
        "id": "id1",
        "group": 2
      }
    ],
    "metricsA" : [
      {// model1 score of nodes[0], Number
        "x": ...,
        "y": ...
      },
      {// model1 score of nodes[1], Number
        "x": ...,
        "y": ...
      }
    ],
    "metricsB" : [
      {// model2 score of nodes[0], Number
          "x": ...,
          "y": ...
      },
      {// model2 score of nodes[1], Number
        "x": ...,
        "y": ...
      }
    ]
  }
```

See ./example/src/ for a complete example.

## Contribution
```{shell}
npm install # install dependencies in package.json
npm run build # create bundle in dist.js
npm start # watch watches the src/ and recompiles it into the dist/ folder when you make changes.
cd example/src && npm run build
npm start # runs the example app that links to your package.
```
The project will be running on http://localhost:3000/

## License

MIT © [A-ZHANG1](https://github.com/A-ZHANG1)
