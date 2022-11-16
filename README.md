# react-responsive-scatter

> React component for comparing scatter plots

[![NPM](https://img.shields.io/npm/v/react-responsive-scatter.svg)](https://www.npmjs.com/package/react-responsive-scatter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-responsive-scatter
```

## Usage

```jsx
import React, { Component } from 'react'

import Viz from 'react-responsive-scatter'

class Example extends Component {
  render() {
    return <Viz data = {mockData}/>
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

## License

MIT © [A-ZHANG1](https://github.com/A-ZHANG1)
