import React from 'react'
import Background from './components/BackgroundFolder/Background';
import NavLinks from './components/NavbarFolder/NavLinks';
import Text from './components/TextFolder/Text';
import "bootstrap/dist/css/bootstrap.min.css";
import './app.css'
import {CalendarComponent} from '@syncfusion/ej2-react-calendars'

const App = () => {
  const dateValue: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 13);
  const startDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 6);
  const endDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), 25);
  return (
    <div id='container'>
      <NavLinks/>
      <Background/>
      <Text/>
      <CalendarComponent id='calendarWid' value={dateValue} min={startDate} max={endDate}></CalendarComponent>
    </div>
  )
}

export default App;

// components:
// navbar,
// background w/ functions 
// text w/ functions 
