'use client';
import React, { useState, useEffect } from 'react';
import { Button, Box, Input } from '@chakra-ui/react';

const pomodoro = () => {
  // define all of my variables. Used inspiration from stopwatch.tsx and timer.tsx.
  const pomodoro_length = 1500; // 25 minutes
  const first_break = 300; // 5 minutes
  const second_break = 900; // 15 minutes
  // timer will only ever be as long as the pomodoro length.
  const [timer, set_timer] = useState(pomodoro_length);
  // again this is the same notation as in timer.tsx. See explanatino there. 
  const [interval_name, set_interval] = useState<NodeJS.Timeout | null>(null);
  // mode is the mode of the timer. It can be work, first_break, or second_break. count is the number of times the timer has gone through a pomodoro cycle. Sets initial value of mode to 'work.'
  const [mode, set_mode] = useState<'work' | 'first_break' | 'second_break'>('work');
  const [count, set_count] = useState(0);

  // used same interval notation as previous two timer
  useEffect(() => {
    if (timer <= 0 && interval_name) {
      clearInterval(interval_name);
      set_interval(null);
      // if the mode is work, increment the count and set the mode to first_break. If the count is divisible by 4, set the mode to second_break. Otherwise, set the mode to work. When one of us coded a pomodoro in Python previously, he found this to be the best algorithm for coding the clock.
      if (mode === 'work') {
        set_count(count + 1);
        //checks if count is divisible by 4. If true, then it looks at second break. If not, it looks at first break. 
        set_mode(count % 4 === 0 ? 'second_break' : 'first_break');
        // sets time to second break or if not sets timer to first break time. 
        set_timer(count % 4 === 0 ? second_break : first_break);
      } else {
        // otherwise it sets the mode to work and the timer to the proper pomodoro time. 
        set_mode('work');
        set_timer(pomodoro_length);
      }
    }
  }, [timer, interval_name, mode, count]);

  // same logic as timer
  const start_timer = () => {
    if (interval_name) return;
    // if there is no active interval, start a new one
    const new_interval_name = setInterval(() => {
      // decrement timer by 1 second 
      set_timer((prev) => Math.max(prev - 1, 0));
    }, 1000);

    set_interval(new_interval_name);
  };

  // same logic as timer
  const stop_timer = () => {
    if (interval_name) {
      clearInterval(interval_name);
      set_interval(null);
    }
  };

  // same logic as timer except change mode back to 'work'
  const reset_timer = () => {
    stop_timer();
    set_mode('work');
    set_timer(pomodoro_length);
    set_count(0);
  };

  // .padStart(2, '0') sees if the string is 2 characters long. Idk if there is a function for numbers but I will look into it. If the string is shorter than 2 characters, it adds 0s to the beginning to make it 2 characters long. 
  // pomodoro clock only requires seconds and minutes.
  const format_time = () => {
    const minutes = Math.floor((timer % 3600) / 60).toString().padStart(2, '0');
    const seconds = (timer % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <Box textAlign="center">
      <Box fontWeight="bold" mb={4}>
        {/* This is better grammar. AI reccomended to change and capitalize the first letter of the mode when displaying it. Said that it is the status quo to have the mode be undercase */}
        Mode: {mode.charAt(0).toUpperCase() + mode.slice(1)}
      </Box>
        {/* Display the timer */}
      <Box fontSize="6xl" fontWeight="bold" mb={4}>
        {format_time()}
      </Box>
        {/* Display the buttons */}
      <Button colorScheme="green" onClick={start_timer} mr={2}>
        Start
      </Button>
      <Button colorScheme="yellow" onClick={stop_timer} mr={2}>
        Pause
      </Button>
      <Button colorScheme="red" onClick={reset_timer}>
        Reset
      </Button>
    </Box>
  );
};

export default pomodoro;
