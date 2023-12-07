import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"; 
import type { GenericObject } from "next-auth/_utils";
import type { Session, User } from "next-auth";
import type { NextAuthOptions } from 'next-auth'; 
import type { Task } from '@/app/tasks'
require('dotenv').config();



export const authOptions : NextAuthOptions = { 
  providers: [
    GoogleProvider({
      clientId : process.env.GOOGLE_CLIENT_ID ? process.env.GOOGLE_CLIENT_ID :"",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ? process.env.GOOGLE_CLIENT_SECRET : "", 
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code", 
          scope: "openid https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events.owned " 
        }
      } 
    })
  ], 
  session: { 
      strategy: "jwt", 
      maxAge: 30 * 24 * 60 * 60, // 30 days 
  }, 
  callbacks: { 
    // JWT callback (called everytime JWT is updated like on sign-in)
    async jwt({ token, account } : { token : GenericObject, account : GenericObject } ) : Promise<GenericObject> { 
      if (account?.access_token) { 
        token.access_token = account.access_token; 
        token.refresh_token = account.refresh_token; 
      }
      return token; 
    }, 

    // session callback - stores the tokens, completed tasks, and their times 
    async session({ session, token, user } : { session: SessionData, token : any, user :User }) : Promise<GenericObject> { 

      if (!session.access_token || !session.refresh_token) { 
        session.access_token = token.access_token; 
        session.refresh_token = token.refresh_token; 
      }

      return session; 
    }
  }
}

const handler = NextAuth(authOptions)

// new type for hdandling access and refresh tokens 
export interface SessionData extends Session { 
  access_token?: string, 
  refresh_token? : string
}

// export the handler in accordance with NextJS route handlers 
export { handler as GET, handler as POST }