import Endpoints from "./endpoints";
// import "server-only";

const basic = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
).toString("base64");

interface AccessToken {
  access_token: string;
  expires_at: number;
}

async function getAccessToken() {
  const headers = new Headers();
  headers.set("Authorization", `Basic ${basic}`);
  headers.set("Content-Type", "application/x-www-form-urlencoded");

  const body = new URLSearchParams();
  body.set("grant_type", "refresh_token");
  body.set("refresh_token", process.env.SPOTIFY_REFRESH_TOKEN!);

  try {
    const response = await fetch(Endpoints.Token, {
      method: "POST",
      cache: "no-store",
      headers,
      body: body.toString(),
    });

    if (!response.ok) {
      if (response.status === 429 && response.headers.has("Retry-After")) {
        console.warn(
          "[spotify / access token] Rate Limited until ",
          Date.now() + parseInt(response.headers.get("Retry-After")!)
        );

        return Promise.reject("Rate limited.");
      }
      throw new Error(
        `[spotify / access token] ${response.status} ${response.statusText}`
      );
    }

    const { access_token, expires_in } = await response.json();

    return {
      access_token,
      expires_at: Date.now() + expires_in * 1000,
    } as AccessToken;
  } catch (e) {
    console.log("Access token encoutered an error...");
    console.error(e);
    return Promise.reject(e);
  }
}

export { getAccessToken, type AccessToken };
