import type { ActionArgs } from "@remix-run/cloudflare"; // or cloudflare/deno
import { json } from "@remix-run/cloudflare";
import * as jwt from "jsonwebtoken-esm";
import { secret } from "~/utils/constants";

export const action = async ({ request }: ActionArgs) => {
  console.log("request.method", request.method);
  switch (request.method) {
    case "POST": {
      /* handle "POST" */
      const data = await request.json<{
        username: string;
      }>();

      console.log("data", data);
      console.log("secret", secret);
      const token = jwt.sign(
        {
          username: data.username,
        },
        secret
      );
      console.log("token", token);
      return json({ success: true, token }, 200);
    }
    default: {
      /* handle "GET" */
      return json({ success: false }, 405);
    }
  }
};
