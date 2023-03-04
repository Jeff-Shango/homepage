import React, { useState, useEffect } from 'react';
import './backgroundstyles.css';
import '../TextFolder/Text';
import backgroundMorning from '../../assets/morning.gif';
import backgroundAfternoon from '../../assets/afternoon.gif';
import backgroundEvening from '../../assets/evening.gif';
import backgroundNight from '../../assets/night.gif';

const Background = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
  const date = new Date();
  const hour = date.getHours();
  if (hour >= 0 && hour < 6) {
    setBackgroundImage(backgroundNight);
  } else if (hour >= 7 && hour < 12) {
    setBackgroundImage(backgroundMorning);
  } else if (hour >= 12 && hour < 18) {
    setBackgroundImage(backgroundAfternoon);
  } else {
    setBackgroundImage(backgroundEvening);
  }
}, []);
  return (
    <div id='background' style={{ backgroundImage: `url(${backgroundImage})`}}></div>
  )
}
export default Background