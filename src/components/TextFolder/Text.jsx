import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import './text.css';
import { Typography } from '@mui/material';


const Text = () => {
  const [ date, setDate ] = useState(new Date());
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    }
  }, []);

 const checkSalutation = () => {
    const hour = date.getHours();
  
    if (hour >= 0 && hour < 6) {
      return "I am the greatest, I said that even before I knew I was -Muhammad Ali";
    } else if (hour >= 7 && hour < 11) {
      return "Education is the passport to the future, for tomorrow belongs to those who prepare for it today! -Malcom X";
    } else if (hour >= 12 && hour < 18) {
      return "The greatness of a man is not in how much wealth he acquires, but in his integrity and his ability to affect those around him positively! -Bob Marley";
    } else {
      return "I'm not a businessman, I'm a BUSINESS, man!! -Jay-Z";
    }
  };
  return (
    <Container id='text'>
      <Typography fontSize="5.5rem" id="Title">Welcome Jeff Bozier</Typography>
      <Typography fontSize="2.5rem" id="salutation">{checkSalutation()}</Typography>
      <Typography fontSize="3.5rem" id='dateSection' className='dateTime'>{date.toLocaleDateString()}</Typography>
      <Typography fontSize="3.5rem" id='timeSection' className='dateTime'>{date.toLocaleTimeString()}</Typography>


    </Container>
  )
}

export default Text;