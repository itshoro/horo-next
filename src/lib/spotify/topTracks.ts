import { AccessToken } from "./accessToken";
import Endpoints from "./endpoints";

type Artist = {
  href: string;
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
};

type Album = {
  images: {
    width: number;
    height: number;
    url: string;
  }[];
  external_urls: {
    spotify: string;
  };
};

type Track = {
  id: string;
  album: Album;
  name: string;
  href: string;
  external_urls: {
    spotify: string;
  };
  artists: Artist[];
};

const fetchTopTracks = async ({ access_token, expires_at }: AccessToken) => {
  if (Date.now() >= expires_at - 5000)
    throw new Error("Access token expiration imminent.");

  const headers = new Headers();
  headers.set("Authorization", `Bearer ${access_token}`);
  headers.set("Accept", "application/json");

  const params = new URLSearchParams();
  params.append("time_range", "short_term");
  params.append("limit", "5");

  try {
    const response = await fetch(
      `${Endpoints.TopTracks}?${params.toString()}`,
      {
        headers,
        next: { revalidate: 604_800 },
      }
    );

    if (!response.ok) return Promise.reject("Response not ok.");
    return (await response.json()).items as Track[];
  } catch (e) {
    return Promise.reject(e);
  }
};

export { fetchTopTracks, type Track };
