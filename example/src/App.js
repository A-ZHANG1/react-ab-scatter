import React from 'react'

import Viz from 'react-responsive-scatter'
// import 'react-responsive-scatter/dist/index.css'
import mockData from './mockData'

const App = () => {
  return <Viz data = {mockData}/>
}

export default App
