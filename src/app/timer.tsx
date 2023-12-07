// used https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks, 
// https://dev.to/yuridevat/how-to-create-a-timer-with-react-7b9, 
// and https://stackoverflow.com/questions/40885923/countdown-timer-in-react for reference

'use client';
import React, { useState } from 'react';
import { Box, Button, Input, HStack } from '@chakra-ui/react';


const timer = () => {
  // define state variables. hours, minutes, and seconds are the time in hours, minutes, and seconds respectively. total is the total time in seconds. interval_name is the interval that the timer is running on. time is a boolean that is true if the timer is running.
  // This code is based off of the code from stopwatch.tsx. 
  const [hours, set_hours] = useState('');
  const [minutes, set_minutes] = useState('');
  const [seconds, set_seconds] = useState('');
  const [total, set_total] = useState(0);
  // debugging reccomended this useState<number | null>(null). It allows interval_name to either hold a number or null. Because the timer has not yet started, there is not yet an interval ID so it will start null and then get a number. This is good practice when a value is undefined initially.
  const [interval_name, set_interval] = useState<number | null>(null);
  const [time, start_time] = useState(false);

  const startTimer = () => {
    // Calculate the total time in seconds from hours, minutes, and seconds input
    set_total((parseInt(hours) || 0) * 3600 + (parseInt(minutes) || 0) * 60 + (parseInt(seconds) || 0));
    start_time(true);
    // https://developer.mozilla.org/en-US/docs/Web/API/setInterval. Reccomended to use this function:
    // this is the same function as explained in stopwatch.tsx. 
    const interval = setInterval(() => {
      set_total((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          start_time(false);
        }
        return prev - 1;
      });
    }, 1000);
    set_interval(interval as unknown as number);
  };

  // pause or resume the timer. If the interval is not null, clear the interval and set the interval to null. Otherwise, start the timer. This will display the pause and resume buttons.
  const pause_or_resume_timer = () => {
    if (interval_name) {
      clearInterval(interval_name);
      set_interval(null);
    } else {
      startTimer();
    }
  };

  // clear the timer. If the interval is not null, clear the interval and set the interval to null. Also reset all values and set the time to false. This will display the start button.
  const clear_timer = () => {
    if (interval_name) {
      clearInterval(interval_name);
      set_interval(null);
    }
    // reset all values when you clear the timer.
    set_total(0);
    set_hours('');
    set_minutes('');
    set_seconds('');
    start_time(false);
  };

  // https://www.w3schools.com/js/js_date_methods.asp. Read this documentation online for how to store time in xx:xx:xx
  const formatTime = () => {
    const h = Math.floor(total / 3600).toString().padStart(2, '0');
    const m = Math.floor((total % 3600) / 60).toString().padStart(2, '0');
    const s = (total % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  // General CSS stuff. Found onChange={(e)} documentation at https://www.geeksforgeeks.org/how-to-create-a-countdown-timer-using-reactjs/
  return (
    <Box textAlign="center">
      {!time && (
        <HStack spacing={4} mb={4}>
          {/* This is an input field for entering hours, minutes, and seconds. Its value is controlled by the state variables, and it triggers the set_hours, set_minutes, and set_seconds function when the user types in it. It only accepts numbers.*/}
          <Input placeholder="Hours" value={hours} onChange={(e) => set_hours(e.target.value)} type="number" />
          <Input placeholder="Minutes" value={minutes} onChange={(e) => set_minutes(e.target.value)} type="number" />
          <Input placeholder="Seconds" value={seconds} onChange={(e) => set_seconds(e.target.value)} type="number" />
        </HStack>
      )}
      {/* HStack used for design and centered the text.*/}
      <HStack spacing={4} justifyContent="center">
        {time ? (
          <Box fontSize="2xl">{formatTime()}</Box>
        ) : (
          <Button colorScheme="green" onClick={startTimer} disabled={!hours && !minutes && !seconds} mr={2}>
            Start
          </Button>
        )}
        {time && (
          <Button colorScheme="yellow" onClick={pause_or_resume_timer}>
            {/* The pause function will be used to stop the timer and the resume will be used to resume it. See the pause_or_resume timer function above.*/}
            {interval_name ? 'Pause' : 'Resume'}
          </Button>
        )}
        <Button colorScheme="red" onClick={clear_timer}>
          Clear
        </Button>
      </HStack>
    </Box>
  );
};

export default timer;
