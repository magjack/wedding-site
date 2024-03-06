import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <Typography variant="h4">Countdown to {targetDate.toString()}:</Typography>
      {Object.keys(timeLeft).length > 0 ? (
        <Typography variant="h6">
          {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
        </Typography>
      ) : (
        <Typography variant="h6">Time's up!</Typography>
      )}
    </div>
  );
};

export default Countdown;
