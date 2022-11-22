import React from 'react'

import Viz from 'react-responsive-scatter'
// import 'react-responsive-scatter/dist/index.css'
import mockData from './mockData'

const App = () => {
  return <Viz data = {mockData}
   WIDTH = {1000}
   HEIGHT = {600}
   Y_TRANSFORM = {20}
   X_TRANSFORM = {100}/>
}

export default App
