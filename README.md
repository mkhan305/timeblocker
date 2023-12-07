This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Above is the auto-generated text on how you run the app.

Now here's how you use the app.

Description:
    TimeBlocker
    A productivity application for those who use google calendar to coordinate their daily schedule and need a productivity app to track and encourage studying.
Getting Started:
    Dependencies:
        Node.js
        Npm Install 
    Installing:
        Download the code that we have supplied.
        Visit the Node.js website and download the installer for your operating system.
        Follow the installation instructions provided on the website
        After installing Node.js, verify that is is installed correctly by running the command prompt in your terminal: “node -v”
        After checking to make sure that Node.js is installed correctly, run the prompt “npm install” in your terminal. This will download and install the package and its dependencies.
        Check that Npm installed correctly by running “npm -v” in your terminal 
    Executing Program:
        To start the program, run “npm run dev” and click on the local host link provided. You now should have the application open and can use it.
Usage:
    How To
    First, click the login button. Login with your Google account. The main page consists of three main components: Tasks, Timers, and the Menu Bar.
    The Menu Bar consists of:
        The TimeBlocker Title
            This is just a title.
        Light/Dark Mode
            This switches the mode to light or dark.
        Log In/Log Out
            This lets you Log In to your Google Calendar. You must log in for your tasks to Sync. After logging in, the button turns into a Log Out button. This will, as stated, log you out.
        Start/Stop and Sync Button
            Recall that a study session contains all of the tasks currently in the Task section. Upon clicking Start, the webpage records the current time as the start time of your study session. After clicking Start, the Start button converts into a Sync and Stop button. At the end of your study session, the user may either click the Sync or Stop Button. Clicking the Sync Button will record the end time of your study session. It will then create a Google Calendar event for each task in the study session with the recorded start and end times. Clicking the End button will instead simply end your session without recording any events to your Google Calendar.
        Dropdown Menu consisting of: About Us and How to.
            Self Explanatory, it leads you to an About Page and a How To Page.
    The Timer Bar consists of:
        Timer
            This is a countdown timer. The time is modifiable, with customizable hours, minutes, and seconds.. The time cannot be over 24 hours, otherwise, we’ll return a friendly reminder to prevent you from working too long. You can Start, Pause and Stop the timer.
        Stop Watch
            This is a stopwatch that counts up. You can Start, Pause and Clear the stopwatch.
        Pomodoro Timer
            This is the Pomodoro Timer. It is a fixed countdown timer that has two modes: Work and Break. When started, it begins in the 25 minute Work state. After the Work Timer is completed, a 5 Minute Break begins. A full Pomodoro cycle takes five rounds of work-break with the last break being 10 minutes, rather than 5. As per usual, you can Start, Pause and Reset the stopwatch.
    The Tasks Bar consists of:
        Entry Box
            Enter Tasks here. Each Task is sent to the Task List upon entering.
        Task List
            A current list of checkboxes for your current tasks. Clicking each task will cross it out. This will not affect its uploading to the Google Calendar. You may remove a task from the task list by clicking the “x” button beside it. These are saved to the Google Calendar by clicking the Sync button in the Menu Bar.
About:

Authors:
Ethan Dhadly - ethandhadly@college.harvard.edu
Mohammad Khan - mohammadkhan@college.harvard.edu
Andrew Yu - andrewyu@college.harvard.edu

License:
Copyright (c) 2023 Ethan Dhadly, Mohammad Kahn, Andrew Yu
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
