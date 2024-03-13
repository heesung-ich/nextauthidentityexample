import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    token_type?: string;
    access_token?: string;
    id_token?: string;

    // role?: {} | null;
    // email_verified: boolean | undefined;
    // refresh_token?: string;
    // scope?: string;
    // expires_at?: number;
    // session_state?: string;
  }
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: DefaultSession["user"] & User;
    access_token?: string | unknown;
    token_type?: string | unknown;
    refresh_token?: string | unknown;
    expires_in?: number | unknown;
    expires_at?: number | unknown;
  }

  interface User {
    id?: string;
    email: string | undefined;
    email_verified: boolean | undefined;
    role: {} | undefined;
    identityToken?: JWT | undefined;
  }
}
