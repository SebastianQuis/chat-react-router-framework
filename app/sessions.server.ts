import { createCookieSessionStorage } from "react-router";

// define lo que va a retornar la session
type SessionData = {
    userId: string;
    name: string;
    token: string;
};

// el error de la session
type SessionFlashData = {
    error: string;
};

const { getSession, commitSession, destroySession } =
    createCookieSessionStorage<SessionData, SessionFlashData>(
        {
            // a Cookie from `createCookie` or the CookieOptions to create one
            cookie: {
                name: "__session",

                // all of these are optional
                domain: "localhost",
                // Expires can also be set (although maxAge overrides it when used in combination).
                // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
                //
                // expires: new Date(Date.now() + 60_000),
                httpOnly: true,
                maxAge: 60 * 60 * 24, // 1 day - tiempo de expiración de la session
                path: "/",
                sameSite: "lax",
                secrets: ["s3cret1"], // use a secure secret in production, es como el token en nextjs 
                secure: true,
            },
        }
    );

export { getSession, commitSession, destroySession };
