import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    callbacks: {
        signIn({ user, account, profile, email, credentials }) {
            return true;
        },
        redirect({ url, baseUrl }) {
            return baseUrl;
        },
        session({ session, user, token }) {
            return session;
        },
        jwt({ token, user, account, profile }) {
            return token;
        }
    },
    providers: [],
} satisfies NextAuthConfig;