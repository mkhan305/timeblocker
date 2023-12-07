'use client';
// import in all of the timers
import React, { useState } from 'react';
import Stopwatch from './stopwatch';
import Timer from './timer';
import Pomodoro from './pomodorotimer';

const Rendertimer = () => {
  // define state variable active_timer. This will be used to determine which timer to render.
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
    const [active_timer, set_active_timer] = useState('pomodoro');

    // get the name of the timer to display. 
    // You could combine this function with the next function and we tried doing this. However, it would mess up the styling since it would make the container box larger. Thus, there is not point combining these two functions together. 
    
    const get_timer = () => {
      switch (active_timer) {
        case 'stopwatch':
          return 'Stopwatch';
        case 'timer':
          return 'Timer';
        case 'pomodoro':
          return 'Pomodoro';
        default:
          return 'Stopwatch';
      }
    };

    // Links the timer name to the timer component. See comment above for explanation for why this was not combined with the previous lines of code.
    const render_active_timer = () => {
      switch (active_timer) {
        case 'stopwatch':
          return <Stopwatch />;
        case 'timer':
          return <Timer />;
        case 'pomodoro':
          return <Pomodoro />;
        default:
          return <Stopwatch />;
      }
    };
  
    return (
      // render the buttons to select the timer, the name of the timer, and the timer component.
      // Because I set up the conditional rendering above, I can just render the display variable.
      <div style={{ textAlign: 'center' }}>
        <div style={{ margin: '10px 0' }}>
          {/* Added normal HTML headers and formatted the buttons accordingly starting with the pomodoro timer */}
          <button 
            onClick={() => set_active_timer('pomodoro')} 
            style={{ padding: '10px', margin: '10px', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}>
            Pomodoro
          </button>
          <button 
            onClick={() => set_active_timer('stopwatch')} 
            style={{ padding: '10px', margin: '10px', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}>
            Stopwatch
          </button>
          <button 
            onClick={() => set_active_timer('timer')} 
            style={{ padding: '10px', margin: '10px', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}>
            Timer
          </button>
          <div style={{ fontSize: '32px', margin: '20px 0' }}>
            {/* Adjusted font size of button to be much better */}
          {get_timer()}
          {/* Find timer */}
          </div>
        </div>
        <div style={{ border: '2px solid #ccc', padding: '10px', margin: '10px', borderRadius: '10px' }}>
          {render_active_timer()}
          {/* Show timer */}
        </div>
      </div>
    );
};

export default Rendertimer;
