// took inspiration from https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks#:~:text=URL%3A%20https%3A%2F%2Fupmostly.com%2Ftutorials%2Fbuild
// using functional components and hooks
// Our research on APIs helped us understand how to use react components such as useState and useEffect.
// See https://reactjs.org/docs/hooks-state.html

'use client';
import React, { useState, useEffect } from 'react';
import { Button, Box, Text, VStack, Alert, AlertIcon } from '@chakra-ui/react';

const stopwatch = () => {
  // define state variables. timer is the time in seconds, interval is the interval that the timer is running on, outoftime is a boolean that is true if the timer has run for more than 24 hours, and status is the status of the timer (initial, studying, or paused). Status is used to display certain buttons.
  const [timer, set_timer] = useState(0);
  const [interval, set_interval] = useState<number | undefined>();
  const [outoftime, setoutoftime] = useState(false);
  const [status, set_status] = useState('initial');

  // if the timer is greater than 24 hours, clear the interval and set outoftime to true. Also set the timer to 0 and the status to initial. This will display an alert. We are controlling for errors here.
  useEffect(() => {
    if (timer >= 86400) {
      clearInterval(interval);
      setoutoftime(true);
      set_timer(0);
      set_status('initial');
      setTimeout(() => setoutoftime(false), 5000);
    }
  }, [timer, interval]);

  // if the interval is not defined, then clear the interval. I was recommended by an AI to add this in because it would control for "unmounting". Unmounting occurs when one removes a component from the Document Object Model. This means that it is detached from the website. Thus, we ensure here that the timer stops running after it has been unmounted, thus preventing memory leaks.
  useEffect(() => {
    return () => {
      if (interval !== undefined) clearInterval(interval);
    };
  }, [interval]);

  // start the timer. Set outoftime to false, set the interval to the interval that the timer is running on, and set the status to studying. This will display the pause and clear buttons.
  const start_time = () => {
    setoutoftime(false);
    // Start a timer that increments the 'timer' state every 1000 milliseconds (1 second)
    const id = setInterval(() => {
      set_timer(prev_time => prev_time + 1);
    }, 1000);
    // identifies the interval ID to then refer to or clear the interval later. Unknown as number was a way for me to prevent errors. I need to use a type assertion to cast the ID to a number because the interval function takes a number. 
    set_interval(id as unknown as number);
    set_status('studying');
  };

  // pause the timer. If the interval is not undefined, clear the interval and set the status to paused. This will display the resume and clear buttons.
  const pause_time = () => {
    if (interval !== undefined) clearInterval(interval);
    set_status('paused');
  };

  // resume the timer. Start the timer again and set the status to studying. This will display the pause and clear buttons.
  const resumeTimer = () => {
    start_time();
  };

  // clear the timer. If the interval is not undefined, clear the interval and set the timer to 0. Also set the status to initial. This will display the start button.
  const clear_time = () => {
    if (interval !== undefined) clearInterval(interval);
    set_timer(0);
    set_status('initial');
  };

  // format the time in hours, minutes, and seconds.
  const formatTime = () => {
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;
    // https://stackoverflow.com/questions/55110835/how-do-i-add-a-0-to-my-minutes-and-seconds. This took me a bit to figure out and some help from the Duck
    // Padding basically checks to see if a string is less than 2 characters. If it is not, then it adds 0s until a string is 2 characters. 
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Box textAlign="center">
        {/* If the user lets the timer run for too long */}
      {outoftime && (
        <Alert status="warning">
          <AlertIcon />
          As the creators of this app, we will not allow you to work for more than 24 hours straight.
        </Alert>
      )}
      {/* Put all of the stopwatch elements together and make the buttons different colors */}
      <Text fontSize="6xl" fontWeight="bold" mt="4" mb="8">
        {formatTime()}
      </Text>
      {/* I had set statuses for different buttons so that I could adjust which buttons a user would see. It is basically a bunch of if-statements for the status */}
        {status === 'initial' && <Button colorScheme="green" onClick={start_time}>Start</Button>}
        {status === 'studying' && (
          <>
          {/* Added right margin to make aesthetics better. Did same for buttons below as well */}
            <Button onClick={pause_time} mr={2} >Pause</Button>
            <Button colorScheme="red" onClick={clear_time}>Clear</Button>
          </>
        )}
        {/* status paused means that I must display separate buttons */}
        {status === 'paused' && (
          <>{/* ... */}
            <Button colorScheme="green" onClick={resumeTimer} mr={2}>Resume</Button>
            <Button colorScheme="red" onClick={clear_time}>Clear</Button>
          </>
        )}
    </Box>
  );
};

export default stopwatch;
