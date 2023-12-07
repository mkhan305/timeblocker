import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';
import type { SessionData } from '@/app/api/auth/[...nextauth]/route.ts'
import { NextRequest, NextResponse } from 'next/server';

async function handler( req : NextRequest, res : NextResponse ) { 

  // gets the users session and post data with all info needed to export an event 
  const session : SessionData = await getServerSession(authOptions)
  const body = await req.json();
  // console.log(body);  
  const startTime = new Date(parseInt(body.startTime)); 
  const endTime = Date.now(); 
  const completedTasks = JSON.parse(body.completedTasks); 
  console.log("COMPLETEDTASKS", completedTasks)


  // define event parameters 
  const today = `${startTime.getMonth() + 1}/${startTime.getDate()}/${startTime.getFullYear()}`; 
  const numTasks = completedTasks ? completedTasks.length : 0; 

   // generates the task description 
  let desc  = ""
  if (completedTasks && numTasks) { 
    desc = `${completedTasks[0].name}: ${getMinutes(completedTasks[0].timeCompleted, startTime.getTime())} Minutes \n`; 

    for (let i = 1; i < numTasks; ++i) { 
      desc += `${completedTasks[i].name}: ${getMinutes(completedTasks[i].timeCompleted, completedTasks[i-1].timeCompleted)} Minutes \n`
    }
    // if (numTasks > 1) { 
    //   desc += `${completedTasks[numTasks -1].name}: ${getMinutes(endTime, completedTasks[numTasks - 1].timeCompleted)} Minutes \n`
    // } 
  } 
  desc += "\n\nGenerated with <3 by Timeblocker!"

  // checks if the session exists and returns an error if it doesnt 
  if (session == null) { 
    return Response.json({ error: 'No Access Token Supplied', status: 400 })
  }

  // google auth parameters 
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const accessToken = session.access_token;
  const refreshToken = session.refresh_token;

  // auth object - initializes and sets the credentials 
  const auth = new google.auth.OAuth2({
    clientId,
    clientSecret,
  });

  auth.setCredentials({
      access_token: accessToken ? accessToken : "",
      refresh_token: refreshToken ? accessToken : "",
  });

  // gcal instance 
  const gcal = google.calendar({auth, version:"v3"})


  // gets all calendars 
  const calendars = (await gcal.calendarList.list({})).data.items; 
  
  // gets the desired calendar's id 
  const tbCalendar = calendars?.find((calendar) => calendar.summary == "TIMEBLOCKER"); 
  const calendarID : string = tbCalendar && tbCalendar.id? tbCalendar.id : 'primary'; 


  // puts together the event 
  const event = {
    summary: today + " Work Session",
    description: desc, 
    colorId: '8', 
    start: { dateTime: (new Date(startTime)).toISOString() }, // Use your desired start date and time
    end: { dateTime: (new Date(endTime)).toISOString() },
  };

  // inserts the event into the calendar 
  gcal.events.insert({ 
    calendarId: calendarID, 
    requestBody: event
  }, (err: any, _: any) => {
    console.error("Error creating event: ", err)
  }); 

  // returns a responese indicating success 
  return Response.json({ status: 200 })

}

export { handler as GET, handler as POST }


// helper function to get the minutes between two Date objects
const getMinutes = (time1 : Date | Number, time2 : Date | Number) =>  Math.floor((time1 - time2)/(1000 * 60)) 