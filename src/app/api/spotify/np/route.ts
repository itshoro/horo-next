import { SimpleCache, getCachedValue } from "@/lib/cache";
import { getAccessToken } from "@/lib/spotify/accessToken";
import { NowPlaying, fetchNowPlaying } from "@/lib/spotify/nowPlaying";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const nowPlayingCache: SimpleCache<NowPlaying> = {
  updatedAt: 0,
};

export async function GET() {
  const nowPlaying = await getCachedValue(nowPlayingCache, 20000, async () => {
    const basic = Buffer.from(
      `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
    ).toString("base64");

    console.log("[info/spotify] NowPlaying - cache invalidated.");
    const accessToken = await getAccessToken();
    return await fetchNowPlaying(accessToken);
  });
  return NextResponse.json(nowPlaying);
}
