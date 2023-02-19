import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/session.server";
import { JwtStrategy } from 'remix-auth-jwt';
import { secret } from "./utils/constants";

export type User = { username: string };
export let authenticator = new Authenticator<User>(sessionStorage);

// The rest of the code above here...
authenticator.use(
  new JwtStrategy(
    {
      secret: secret,
    },
    // Define what to do when the request is authenticated
    async ({ payload, context }) => {
      // You can access decoded token values here using payload
      // and also use `context` to access more things from the server
      return payload as User;
    }
  ),
  // each strategy has a name and can be changed to use another one
  "jwt"
);
