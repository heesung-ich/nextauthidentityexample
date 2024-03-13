import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import DuendeIDS6Provider from "next-auth/providers/duende-identity-server6"
import { authConfig } from './auth.config';
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log('credentials : ', credentials);
        return null;
      },
    }),
    DuendeIDS6Provider({
        clientId: "NextAuthClient",
        clientSecret: "",
        issuer: "http://localhost:3000",
    })
  ],
});