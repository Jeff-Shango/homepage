import React from 'react'
import Background from './components/BackgroundFolder/Background';
import NavLinks from './components/NavbarFolder/NavLinks';
import Text from './components/TextFolder/Text';
import "bootstrap/dist/css/bootstrap.min.css";
import './app.css'

const App = () => {
  return (
    <div id='container'>
      <NavLinks/>
      <Background/>
      <Text/>
    </div>
  )
}

export default App;

// components:
// navbar,
// background w/ functions 
// text w/ functions 
