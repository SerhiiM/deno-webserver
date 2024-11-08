// import { GoogleOAuth } from "https://deno.land/x/google@0.0.8/mod.ts";
import { FreshContext } from "$fresh/server.ts";

// const oauth2Client = new GoogleOAuth({
//     client_id: Deno.env.get("GOOGLE_CLIENT_ID")!,
//     client_secret: Deno.env.get("GOOGLE_CLIENT_SECRET")!,
//     redirect_uri: "http://localhost:8000/auth/callback",
//     scopes: ["read:user"],
// });

// export function loginHandler(context: FreshContext<any>) {
//     const authorizationUrl = oauth2Client.buildAuthLink();
//     console.log("TEST123 authorizationUrl", authorizationUrl);

//     context.response.redirect(authorizationUrl);
// }

// export async function callbackHandler(context: FreshContext<any>) {
//     const tokens = await oauth2Client.getTokens(
//         context.request.url.searchParams.get("code")!,
//     );
//     context.response.body = `Logged in! Tokens: ${JSON.stringify(tokens)}`;
// }

export async function handler(
    req: Request,
    ctx: FreshContext<any>,
) {
    const resp = await ctx.next();
    return resp;
}
