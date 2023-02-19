import type { LoaderArgs } from "@remix-run/cloudflare"; // or cloudflare/deno
import { json } from "@remix-run/cloudflare"; // or cloudflare/deno
import { authenticator } from "~/auth.server";

export const loader = async ({ request }: LoaderArgs) => {
  // handle "GET" request
  try {
    const result = await authenticator.authenticate("jwt", request);
    return json({ success: true, ...result }, 200);
  } catch (error) {
    console.error(error);
    return json({ success: false }, 401);
  }
};
