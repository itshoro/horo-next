import { AccessToken } from "./accessToken";
import Endpoints from "./endpoints";
import { Track } from "./topTracks";
// import "server-only";

type NowPlaying =
  | {
      isPlaying: false;
    }
  | ({
      isPlaying: true;
    } & Track);

const fetchNowPlaying = async ({
  access_token,
  expires_at,
}: AccessToken): Promise<NowPlaying> => {
  if (Date.now() >= expires_at - 5000)
    throw new Error("Access token expiration imminent.");

  const headers = new Headers();
  headers.set("Authorization", `Bearer ${access_token}`);
  headers.set("Accept", "application/json");
  headers.set("Content-Type", "application/json");

  try {
    const response = await fetch(Endpoints.NowPlaying, {
      headers,
      cache: "no-store",
    });

    if (!response.ok)
      throw new Error(`${response.status} ${response.statusText}`);
    if (response.status === 204) return { isPlaying: false };

    const data = (await response.json()).item as Track;

    return { ...data, isPlaying: true };
  } catch (e) {
    console.log("Now playing encoutered an error...");

    return { isPlaying: false };
  }
};

export { fetchNowPlaying, type NowPlaying };
