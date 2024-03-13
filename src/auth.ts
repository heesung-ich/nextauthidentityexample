import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import DuendeIDS6Provider from "next-auth/providers/duende-identity-server6";
import { authConfig } from "./auth.config";

//! active when test on local environment
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const issuer = process.env.STS_ISSUER;

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  providers: [
    // Credentials({
    //   async authorize(credentials) {
    //     console.log("credentials : ", credentials);
    //     return null;
    //   },
    // }),
    DuendeIDS6Provider({
      id: "cloudhospital",
      name: "CloudHospital",
      clientId: process.env.STS_CLIENT_ID,
      clientSecret: process.env.STS_CLIENT_SECRET,
      issuer,
      wellKnown: `${issuer}/.well-known/openid-configuration`,
      client: { token_endpoint_auth_method: "client_secret_post" },
      userinfo: {
        url: `${issuer}/connect/userinfo`,
      },
      token: {
        url: `${issuer}/connect/token`,
      },
      authorization: {
        params: {
          scope: process.env.STS_SCOPE,
          grant_type: "authorization_code",
        },
        // redirect_uri: 'http://localhost:3000/api/auth/callback/CloudHospital',
      },
      async profile(profile, token) {
        const res = await fetch(`${issuer}/connect/userinfo`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token.access_token}`,
          },
        });

        const userInfo = await res.json();

        const user: User = {
          id: userInfo.sub,
          role: userInfo.role,
          name: userInfo.name,
          email: userInfo.email,
          email_verified: userInfo.email_verified,
        };

        return user;
      },
    }),
  ],
});
