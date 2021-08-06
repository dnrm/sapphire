import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async signIn(user, account, profile) {
            const isAllowedToSignIn =
                ['daniel@medina.com', 'sofiahinojosadl@gmail.com'].indexOf(
                    user.email
                ) != -1
                    ? true
                    : false;
            if (isAllowedToSignIn) {
                return true;
            } else {
                // Return false to display a default error message
                return '/unauthorised';
                // Or you can return a URL to redirect to:
                // return '/unauthorized'
            }
        },
    },
});
