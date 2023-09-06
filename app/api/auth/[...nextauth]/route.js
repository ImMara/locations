import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: 'Sr/oM7aAKevTvbcrJa4GkMJY+YLNUoBgtKLjDsgVNWw=',
});

export { handler as GET, handler as POST }